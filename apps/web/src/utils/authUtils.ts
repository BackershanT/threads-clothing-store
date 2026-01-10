import { User } from '@/src/contexts/AuthContext';

/**
 * Utility function to simulate user login
 */
export const loginUser = (userData: User): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify(userData));
      resolve(userData);
    }, 500); // Simulate network delay
  });
};

/**
 * Utility function to simulate user logout
 */
export const logoutUser = (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem('user');
      resolve();
    }, 300); // Simulate network delay
  });
};

/**
 * Utility function to check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  const userData = localStorage.getItem('user');
  return !!userData;
};

/**
 * Utility function to get current user data
 */
export const getCurrentUser = (): User | null => {
  const userData = localStorage.getItem('user');
  if (!userData) return null;
  
  try {
    return JSON.parse(userData);
  } catch (error) {
    console.error('Error parsing user data:', error);
    return null;
  }
};