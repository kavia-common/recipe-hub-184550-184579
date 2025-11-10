const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Recipe App API',
      version: '1.0.0',
      description: 'REST API for managing recipes and users.',
    },
    servers: [
      { url: 'http://localhost:3001' }
    ],
    tags: [
      { name: 'Recipes', description: 'Recipe management' },
      { name: 'Users', description: 'User placeholder endpoints' }
    ]
  },
  apis: ['./src/routes/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
