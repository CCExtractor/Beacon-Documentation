---
title: Folder Structure
sidebar_position: 1
---


# BEACON Backend Project Structure

## Root Directory Structure

### Core Folders

- `📁 .github/` - GitHub-specific configurations and workflows
- `📁 graphql/` - GraphQL schema definitions and resolvers
- `📁 models/` - Database models and schemas
- `📁 node_modules/` - Project dependencies
- `📁 permissions/` - Authorization and permission rules
- `📁 serverless/` - Serverless framework configurations

### Configuration Files

- `📄 .env` - Environment variables (not tracked in git)
- `📄 .env.example` - Template for environment variables
- `📄 .eslintrc.json` - ESLint configuration for code style
- `📄 .gitignore` - Git ignore rules
- `📄 .prettierrc` - Prettier code formatting rules
- `📄 ecosystem.config.js` - PM2 process manager configuration
- `📄 index.mjs` - Application entry point
- `📄 package-lock.json` - Dependency lock file
- `📄 package.json` - Project metadata and dependencies

### Utility Files

- `📄 parsing.js` - Data parsing utilities
- `📄 pubsub.js` - PubSub implementation for real-time features
- `📄 script.sh` - Utility shell scripts
- `📄 serverless.yml` - Serverless framework configuration

### Documentation

- `📄 LICENSE` - Project license information
- `📄 README.md` - Project documentation

## Key Components

### GraphQL Layer (`/graphql`)

Contains GraphQL schema definitions and resolvers for:

- User authentication
- Group management
- Beacon (tracking session) operations
- Real-time location updates
- Landmark management

### Data Models (`/models`)

MongoDB/Mongoose models for:

- Users
- Groups
- Beacons
- Landmarks

### Permissions (`/permissions`)

Authorization rules and middleware for:

- User roles
- Resource access
- Operation permissions

### Serverless (`/serverless`)

Serverless framework configurations for:

- AWS Lambda functions
- API Gateway settings
- Service definitions
- Deployment configurations

## Configuration Details

### Environment Variables

Required variables in `.env`:

- Database connection strings
- JWT secrets
- API keys
- Service configurations
- Environment-specific settings

### Development Tools

- ESLint for code linting
- Prettier for code formatting
- PM2 for process management
- Serverless Framework for deployment

## Development Setup

1. Copy `.env.example` to `.env`
2. Install dependencies: `npm install`
3. Configure environment variables
4. Start development server: `npm run dev`

## Deployment

- Production deployment via Serverless Framework
- Configure `serverless.yml` for deployment settings
- Use `script.sh` for deployment automation

## Real-time Features

- WebSocket connections managed through `pubsub.js`
- Subscription handlers for:
  - Location updates
  - Group activities
  - Safety alerts

## Best Practices

- Use environment variables for configuration
- Follow ESLint and Prettier rules
- Keep GraphQL resolvers modular
- Implement proper error handling
- Document code changes
- Follow security best practices
