# Node Boilerplate

_The repo contains the boilerplate for `REST`._

> Node.js, Express, Jest, REST, JWT Authentication, Mongoose.

## Installation guide

```
# clone repository
$ git clone git@github.com:svinayiw/node-boilerplate.git

# install dependencies
$ npm i

# copy and modify the .env.example to .env

# start
$ npm run start:dev
```

### Generate API Docs

Local: `npm run docs` \
Production: `npm run docs:production` \

### Seed database

`npm run db:seed`

## Using Docker

Make sure docker and docker-compose is installed in your system

```
$ docker-compose up

```

In order to seed database:

- First list the container using: `docker ps`

- Seed the database: `docker exec [container_id] npm run db:seed`

In order to generate api docs:

Local - `docker exec [container_id] npm run docs` \
Production - `docker exec [container_id] npm run docs:production`

## `npm run test`

Runs the test cases from the folder `test`

## Prettier

`npm run prettier:write`

## Lint

`npm run lint:fix`
