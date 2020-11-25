import * as  express from 'express';
import AuthController from '../controller/AuthController'

export class AuthRoutes {
  public authController: AuthController = new AuthController();
  public router: express.Router = express.Router();

  public routes(app:any) : any {
    this.router.post('/register', this.authController.Register);
    this.router.post('/login', this.authController.Login);
    this.router.get('/', (req,res) => {console.log("teste")});

    app.use('/auth', this.router);
  }

}