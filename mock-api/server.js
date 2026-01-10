const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Mock database
let users = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@example.com',
    password: '$2a$10$9cG4OAxE8kw.W1PIdZ2.Zu7BzJ.s8.Y3/Ye2J9q3y9N2y9N2y9N2y', // 'admin123'
    role: 'ADMIN',
    resetPasswordToken: null,
    resetPasswordExpires: null
  }
];

let products = [];
let categories = [];
let orders = [];

// Helper function to generate JWT token
const generateToken = (userId, role) => {
  return jwt.sign(
    { id: userId, role: role },
    process.env.JWT_SECRET || 'fallback_secret',
    { expiresIn: '30d' }
  );
};

// Authentication routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password: hashedPassword,
      role: 'USER',
      resetPasswordToken: null,
      resetPasswordExpires: null
    };

    users.push(newUser);

    const token = generateToken(newUser.id, newUser.role);

    res.status(201).json({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      token
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error during registration' });
  }
});

app.post('/api/auth/login', (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user.id, user.role);

    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error during login' });
  }
});

// User management routes
app.post('/api/users/forgot-password', (req, res) => {
  try {
    const { email } = req.body;

    // Find user by email
    const user = users.find(u => u.email === email);
    if (!user) {
      // Return success even if user doesn't exist to prevent email enumeration
      return res.status(200).json({ 
        message: 'Password reset link sent if email exists in our system' 
      });
    }

    // Generate a mock reset token
    const resetToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour

    // Update user with reset token (in a real app, this would be saved to DB)
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = resetTokenExpiry;

    console.log(`Password reset link: http://localhost:5173/reset-password/${resetToken}`);

    res.status(200).json({ 
      message: 'Password reset link sent if email exists in our system' 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error during password reset request' });
  }
});

app.post('/api/users/reset-password', (req, res) => {
  try {
    const { token, newPassword } = req.body;

    // Find user by reset token
    const user = users.find(u => u.resetPasswordToken === token && u.resetPasswordExpires > Date.now());
    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired reset token' });
    }

    // Hash the new password
    const hashedPassword = bcrypt.hashSync(newPassword, 10);

    // Update user's password
    user.password = hashedPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error during password reset' });
  }
});

app.get('/api/users/profile', (req, res) => {
  try {
    // In a real implementation, we'd decode the token and get user info
    // For mock, just return the first admin user
    const user = users[0]; // Admin user
    
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Product routes
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === productId);
  
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  products[productIndex] = { ...products[productIndex], ...req.body };
  res.json(products[productIndex]);
});

app.delete('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === productId);
  
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  products.splice(productIndex, 1);
  res.status(204).send();
});

// Category routes
app.get('/api/categories', (req, res) => {
  res.json(categories);
});

app.post('/api/categories', (req, res) => {
  const newCategory = {
    id: categories.length + 1,
    ...req.body
  };
  categories.push(newCategory);
  res.status(201).json(newCategory);
});

// Order routes
app.get('/api/orders', (req, res) => {
  res.json(orders);
});

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Mock API Server v1.0' });
});

app.listen(PORT, () => {
  console.log(`Mock API server running on port ${PORT}`);
});