import * as  express from 'express';
import ControlController from '../controller/ControlController'

export class ControlRoutes {
  public controlController: ControlController = new ControlController();
  public router: express.Router = express.Router();

  public routes(app:any) : any {
    this.router.post('/create', this.controlController.Create);
    this.router.post('/getPappers', this.controlController.getPappers);
    this.router.post('/deletePapper', this.controlController.deletePapper);
    this.router.post('/UpdatePapper', this.controlController.UpdatePapper);
    
    this.router.get('/', (req,res) => {console.log("teste")});

    app.use('/control', this.router);
  }

}