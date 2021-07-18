# Starter Template

Just a starter template which uses / includes:
1. TypeScript
2. Express
3. TypeORM (PostgreSQL)
4. Passport
4. NextJs

_NOTE: for those times when you don't want to use a framework_

### Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `docker-compose up` command (optional) or execute your local postgres db server
4. Choose one of the following command to start de server:
    - `npm run build` compile the project to deploy
    - `npm run start` start the server
    - `npm run dev:client` start the frontend app
    - `npm run dev:server` start the server for development purposes
    - `npm run data:import` migrate data to database
    - `npm run data:destroy` remove data from database
5. Do something amazing with this template :D

### TODO

1. Link your migration code to package.json scripts
2. Choose how to use routes, that's why you'll see a folder `routes` and a file `routes.ts`
3. Connect frontend with backend