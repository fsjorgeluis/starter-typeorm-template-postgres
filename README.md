# Starter template developed with TypeScript, Express, TypeORM and NextJs .

Steps to run this project:

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