# Starter template (all-in-one)

Just a starter template which uses / includes:
1. TypeScript.
2. Express.
3. Axios.
4. TypeORM. (PostgreSQL)
5. Passport.
6. NextJs.

_NOTE: for those times when you don't want to use a framework._

### Steps to run this project:

1. Run `npm i` command to install backend dependencies.
2. Next `cd frontend`.
3. Then run `npm i` command to install nextjs dependencies.
4. Setup database settings inside `ormconfig.json` file.
5. Run `docker-compose up` command (optional) or execute your local postgres db server.
6. While in root, choose one of the following command to start de server:
    - `npm run build` compile the project to deploy.
    - `npm run start` start the server.
    - `npm run dev:client` start the frontend app.
    - `npm run dev:server` start the server for development purposes.
    - `npm run data:import` migrate data to database.
    - `npm run data:destroy` remove data from database.
7. Do something amazing with this template. :D

### TODO

1. Link your migration code to package.json scripts.
2. Choose how to use routes, that's why you'll see a folder `routes` and a file `routes.ts`.
3. Connect frontend to backend.
4. Maybe add ESLint, for linting your code. xD