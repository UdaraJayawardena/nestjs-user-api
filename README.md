<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

---

## 🚀 Project Setup

### Step 1 - Install Packages
Run the following command to install all dependencies:

```bash
npm install
```

###  Step 2 - Setup Environment Variables
Before running the project, configure the required environment variables.

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env

2. Update the values in .env with the appropriate credentials.

3. Make sure the .env file is in the root directory of each project.

## Local Development Setup
Follow the steps below to run your project locally without using Docker.

### Step 2.1 - Run Database Migrations
Run the following commands to apply migrations and generate prisma client:

```bash
npm run prisma:migrate
npm run prisma:generate
```
### Step 2.2 - Compile and Run the Project

```bash
# standard start
$ npm run start

# starts in watch mode
$ npm run start:dev
```
## Running the Project using Docker
Follow the steps below to run your project with Docker Compose.

## Step 2.1 - Run with Docker Compose
Before running on Docker, configure the required environment variables.

1. Create a root folder for both the user-service and tweet-service.

2. Add the docker-compose.yml file to that folder.

3. Make sure the docker-compose.yml file is outside both service folders.

4. The folder structure will look like this:
```bash
├── nestjs-micro-backend # Root folder
│ ├── nestjs-user-api # User API service
│   ├── src/ 
│   ├── dist/
│   ├── prisma/
│   ├── package.json
│   └── Dockerfile
│ ├── nestjs-tweet-api # Tweet API service
│   ├── src/ 
│   ├── dist/
│   ├── prisma/
│   ├── package.json
│   └── Dockerfile
└── docker-compose.yml # Docker Compose file
```

5. Build each project using the following command
```bash
$ npm run build
```
6. Run the Docker Compose file to build the user-service, tweet-service, and postgres-db

```bash
$ sudo docker compose up --build -d
```

## API Documentation

```bash
http://localhost:3005/api/docs
```