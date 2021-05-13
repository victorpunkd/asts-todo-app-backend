# ASTS-ToDo-App-BackEnd

It's a simple todo list backend API application made with nest js for ASTS candidate selection task, it has all the basic features which a normal todo backend api usually have.

## Prerequisite to run this App

1. Node JS need to be installed.
2. PostgresSql should be installed and the database server should be running locally
3. Git is optional.

## How to run this app locally

1. Git clone this repo to your local system - `git clone https://github.com/victorpunkd/asts-todo-app-backend.git`, if you dont have Git you can just download the entire repo.
2. Open this project root folder in your local system in cmd or visual studio code terminal and run `npm install` to install all the dependencies.
3. Create a new file in the root folder called .env and copy the entire content of ./.env.sample to this file and update the variables accordingly, you need your database name, local port number where the postgres db is running user name and password.
4. Open this project root folder in your local system in cmd or visual studio code terminal and run npm install to install all the dependencies.
5. Once the installation is done run `npm run start:dev` to run the project in dev environment.
6. By Default the project will start at port no 8080, if you need to change it the update it in ./src/main.ts - app.listen(port no).

## How to test it in postman

No authorization are implemented so you dont need a token to test the api.

### Endpoints to test

1. POST - http://localhost:port_no/todos - it will create/instert a new todo item in the db
   we need to pass this object in the body -

{
"title": "todo item title",
"description": "todo item description",
"dueDate": "due date in date format",
"priority": 1,
"isDone": false
}

it will return the same object with the assigned id, createdAt and updatedAt date.

2. GET - http://localhost:8080/todos - it will fetch all the todo items we have in the db

3. GET - http://localhost:8080/todos/:id - it will fetch that particular todo item which matches with the passed id we have in the db otherwise it will return 404 exception.

4. DELETE - http://localhost:8080/todos/:id - it will delete that particular todo item which matches with the passed id we have in the db otherwise it will return 404 exception.

5. PUT - - http://localhost:8080/todos/:id - it will update that particular todo item which matches with the passed id we have in the db otherwise it will return 404 exception.
   we also need to pass the new updated data in the body

{
"title": "updated todo item title",
"description": "updated todo item description",
"dueDate": "due date in date format",
"priority": 1,
"isDone": false
}

## Features used to build the project

1. Nest JS
2. Typescript
3. SequelizeORM
4. Postgres SQL

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
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
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
