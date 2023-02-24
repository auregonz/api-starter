# Express API Starter

Starter Kit pour une API fonctionnelle basée sur Express.

## API Server utilities:

### Framework

- [Express](https://www.npmjs.com/package/express)
  - Fast, unopinionated, minimalist web framework for Node.js

### Middlewares

- [morgan](https://www.npmjs.com/package/morgan)
  - HTTP request logger middleware for node.js
- [Helmet](https://www.npmjs.com/package/helmet)
  - Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
- [cors](https://www.npmjs.com/package/cors)
  - CORS is a node.js package for providing a **Connect/Express** middleware that can be used to enable **CORS** with various options.

### Environment variables

- [dotenv](https://www.npmjs.com/package/dotenv)
  - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`

## Development utilities:

### Auto-reload node server

- [nodemon](https://www.npmjs.com/package/nodemon)
  - nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

### Tests librairies

- [jest](https://www.npmjs.com/package/jest)
  - Jest is a delightful JavaScript Testing Framework with a focus on simplicity. (v28.1.3 for CommonJS usage)
- [supertest](https://www.npmjs.com/package/supertest)
  - HTTP assertions made easy via superagent.

# Setup

```bash
cd server
npm install
```

## Start

```
npm run start
```

## Development

```
npm run dev
```

## Test

```bash
npm run test
```

# Endpoints disponibles

- Chat ninja
  - http://localhost:5000/
- Chat hackeur
  - http://localhost:5000/api/v1/
- Liste d'emojis
  - http://localhost:5000/api/v1/emojis
- Liste de kaomojis
  - http://localhost:5000/api/v1/kaomojis
