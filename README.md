  <h1 align="center">Streaming Twitter Tweets & Log Aggregation Endpoint
  </h1>
  
Hi.

This is sample code for implementing Rest APIs, Stream management and using AppGateway (Socket) in NestJS.

I need to highlight that a simplified version of Streaming and Log Aggregation are implemented as demo. In log aggregation pattern we need to monitor incoming logs to find some specific events and invoke proper action for instance sending alarm to admins. Also we can use stream to manage incoming logs however in this sample API endpoint is used to manage incoming logs.

For streaming twitter tweets, simplified stream pattern and observable are used. A pipe function is simulated to send incoming message to clients via socket. 
I have tried to keep the application simple and far from over-engineering.

Some tests have been implemented for testing log APIs. 

## Used Technologies and Patterns

- NestJS - Main structure of the application.
- SQLite - Database for log aggregation and test.
- TypeOrm + Repository pattern- The Orm to work with DB.
- AppGateway (Socket) - The solution for real-time streaming to clients.
- Observable pattern (RxJS) - The pattern to manage incoming message from stream.
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

## Database

Sqlite is used as Database. There are two database files in data folder for development and testing. We can manage to use correct DB automatically based on environment and NestJS config file but in this sample code a manual config file is used.

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

Seperate DB is used for testing purpose and it is managed properly.

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

<img src="/assets/test.png" width="500">

## API Document

Swagger is used to generate API document automatically. Follow below steps to see the document.

1. Run the application

```bash
$ npm run start
```

2. Open following address `http://localhost:3001/swagger/` in browser

<img src="/assets/swagger.png" width="500">

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
