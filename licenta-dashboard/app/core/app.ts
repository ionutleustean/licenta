"use strict";

// import Angular 2
import {Component} from "angular2/core";

// import Angular 2 Component Router
// reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
import {RouteConfig, Route, RouterOutlet, RouterLink, Router} from "angular2/router";

// app components
import {Home} from "../pages/home/home";
import {Login} from "../pages/user/login/login";
import {Register} from "../pages/user/register/register";
import {ResetPassword} from "../pages/user/reset-password/reset-password";

// app services
//import {appServicesInjectables} from "core/services/services";

@Component({
    selector: "app",
    templateUrl: "core/app.template.html", //template: "<router-outlet></router-outlet>",
    directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
    {path: "/...", component: Home, as: "Home", data: undefined}, // the as serves as alias for links, etc
    {path: "/login", component: Login, as: "Login", data: undefined},
    {path: "/register", component: Register, as: "Register", data: undefined},
    {path: "/reset-password", component: ResetPassword, as: "ResetPassword", data: undefined},
])
export class App {
    constructor() {
        console.log("Application bootstrapped!");
    }
}

