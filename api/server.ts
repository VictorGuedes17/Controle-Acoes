import express from 'express';
import cors from 'cors';
import { Routes } from "./src/routes/Routes";

class Api { 
    public app: express.Application;
    public routes: Routes;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.listen(3333);
        this.config();
        this.routes = new Routes(this.app);
    }

    private config(): void{ 
        this.app.use(cors())
    }

}

export default Api;