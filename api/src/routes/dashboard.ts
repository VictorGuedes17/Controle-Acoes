import * as  express from 'express';
import DashboardController from '../controller/DashboardController'

export class DashboardRoutes {
  public dashboardController: DashboardController = new DashboardController();
  public router: express.Router = express.Router();

  public routes(app:any) : any {
    this.router.post('/getHigherProfits', this.dashboardController.getHigherProfits);
    this.router.post('/getHigherLoss', this.dashboardController.getHigherLoss);
    this.router.post('/getEvolutionData', this.dashboardController.getEvolutionData);   

    app.use('/dashboard', this.router);
  }

}