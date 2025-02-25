import React from 'react';
import Link from 'next/link';

const MyComponent = () => (
  <Link href="/about">
    About
  </Link>
);

export default MyComponent;
```

{
  "name": "your-app-name",
  "version": "1.0.0",
  "description": "Your app description",
  "main": "index.js",
  "scripts": {
    "start": "next start",
    "build": "next build",
    "dev": "next dev"
  },
  "engines": {
    "node": "22.x",
    "npm": ">=6.0.0"
  },
  "dependencies": {
    "next": "^12.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "express": "^4.17.1",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
    }