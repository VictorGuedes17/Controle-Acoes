import * as express from 'express';
import { Routes } from "./routes/Routes";
import * as cors from "cors";

class Api {
    public app: express.Application;
    public routes: Routes;
  
    
    constructor() {
      this.app = express();
      this.app.use(express.json());
      this.app.listen(5001);
      this.config();
      this.routes = new Routes(this.app);
    }
  
    private config(): void {
      this.app.use(cors());
    }
  }
  
  export default new Api().app;