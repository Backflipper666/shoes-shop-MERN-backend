const fs = require('fs');

// Base64 string of the image
const base64String = 'iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgCAYAAADbcAZoAAAgAEl...'; // Replace with your base64 string

// Function to convert the base64 string to an image file
const convertBase64ToImage = (base64String) => {
  const matches = base64String.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
  if (matches.length !== 3) {
    throw new Error('Invalid base64 string');
  }

  const fileType = matches[1];
  const base64Data = matches[2];

  // Create a buffer from the base64 string
  const buffer = Buffer.from(base64Data, 'base64');

  // Generate a unique filename
  const filename = `image_${Date.now()}.${fileType}`;

  // Write the buffer to a file
  fs.writeFileSync(filename, buffer);

  console.log(`Image file "${filename}" created successfully.`);
};

// Convert the base64 string to an image
convertBase64ToImage(base64String);
