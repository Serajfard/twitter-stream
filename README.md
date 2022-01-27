  <h1 align="center">Streaming Twitter Tweets & Log Aggregation Endpoint
  </h1>
  
Hi.

This is sample code for implementing Rest APIs, Stream management and using AppGateway (Socket) in NestJS.

## Used Technologies and Patterns

- NestJS - Main structure of the application.
- SQLite - Database for log aggregation and test.
- TypeOrm + Repository pattern- The Orm to work with DB.
- AppGateway (Socket) - The solution for real-time streaming to clients.
- Observable pattern - The pattern to manage incoming message from stream.
- pipe function - Send tweet from readable stream to writable stream.
- Swagger - To generate open API document.

Some functionalities are not implemented completely.
Sample code for connecting to twitter and getting data from stream is available in comment section of the code and simple interval function is used to generate fake tweet messages.

## Main Sections :

- API endpoints for log aggregation
- Stream management

#### API Endpoints

Includes two APIs for creating log and getting logs.

#### Stream Management

AppGateway is used to manage socket connection for real time streaming.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

![diagram](/assets/test.png)

## API Document

Swagger is used to generate API document automatically. Follow below steps to see the document.

1. Run the application

```bash
$ npm run start
```

2. Open this addres `http://localhost:3001/swagger/` in browser

![diagram](/assets/swagger.png)

## Sample Client

Use below sample code to connect to application via socket and receive messages.

```javascript
const { io } = require('socket.io-client');

function bootstrap() {
  const socket = io('http://localhost:3001');

  socket.on('tweets', (ms) => {
    console.log(ms);
  });
}
bootstrap();
```
