const express = require('express');
const app = express();

// Middleware function for the first route
app.get('/example', (req, res, next) => {
  console.log('This middleware will always be executed for /example route');
  // You can perform some operations here
  // and then conditionally skip the remaining middleware for this route
  if (someCondition) {
    // Move on to the next middleware for the current route
    next('route');
  } else {
    // Continue with the remaining middleware for the current route
    next();
  }
});

// Middleware function for the second route
app.get('/example', (req, res) => {
  console.log('This middleware will only be executed if someCondition is false');
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
