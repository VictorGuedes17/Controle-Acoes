import { AuthRoutes } from './auth'
import { ControlRoutes } from './control'
import { DashboardRoutes } from './dashboard';

export class Routes {

    public authRoutes: AuthRoutes = new AuthRoutes();
    public ControlRoutes: ControlRoutes = new ControlRoutes();
    public DashboardRoutes: DashboardRoutes = new DashboardRoutes();

    constructor(app: any) {
        this.routerSetup(app);
    }

    public routerSetup(app: any): void {
        this.authRoutes.routes(app);
        this.ControlRoutes.routes(app);
        this.DashboardRoutes.routes(app);
    }

}