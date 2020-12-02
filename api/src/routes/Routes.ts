import { AuthRoutes } from './auth'
import { ControlRoutes } from './control'

export class Routes {

    public authRoutes: AuthRoutes = new AuthRoutes();
    public ControlRoutes: ControlRoutes = new ControlRoutes();
    constructor(app: any) {
        this.routerSetup(app);
    }

    public routerSetup(app: any): void {
        this.authRoutes.routes(app);
        this.ControlRoutes.routes(app);
    }

}