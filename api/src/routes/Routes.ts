import { AuthRoutes } from './auth'

export class Routes {

    public authRoutes: AuthRoutes = new AuthRoutes();

    constructor(app: any) {
        this.routerSetup(app);
    }

    public routerSetup(app: any): void {
        this.authRoutes.routes(app);
    }

}