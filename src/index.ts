import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import { Request, Response } from "express";
import * as dotEnv from "dotenv";
import { Routes } from "./routes";
import { User } from "./entities/User";

dotEnv.config();

createConnection().then(async connection => {

    // declare server port
    const port = process.env.APP_PORT || 4000;

    // create express app
    const app = express();
    app.use(express.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(port);

    // insert new users for test
    await connection.manager.save(connection.manager.create(User, {
        firstName: "Timber",
        lastName: "Saw",
        age: 27
    }));
    await connection.manager.save(connection.manager.create(User, {
        firstName: "Phantom",
        lastName: "Assassin",
        age: 24
    }));

    console.log(`Express server has started on port ${port}. Open http://localhost:${port}/users to see results`);

}).catch(error => console.log(error));
