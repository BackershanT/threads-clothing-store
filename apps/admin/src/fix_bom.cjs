const fs = require('fs');
const files = ['./pages/CreateVariant.tsx', './pages/Products.tsx', './pages/CreateCategory.tsx', './layouts/MainLayout.tsx'];

files.forEach(file => {
  if(fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1);
      fs.writeFileSync(file, content, 'utf8');
      console.log('BOM removed from ' + file);
    } else {
      console.log('No BOM in ' + file);
    }
  }
});