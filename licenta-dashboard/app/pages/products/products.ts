"use strict";

import {Component} from "@angular/core";
import {RouteParams, RouterLink, Router} from "@angular/router-deprecated";
import {FORM_DIRECTIVES} from "@angular/common";

import {MATERIAL_DIRECTIVES} from "../../../node_modules/ng2-material/index";


@Component({
    selector: "page-products",
    templateUrl: "pages/products/products.template.html",
    directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES, RouterLink],
    providers: [],

})
export class Products {

    private resetToken:string;
    public password:string;



    constructor(params:RouteParams, private router:Router) {
        this.resetToken = params.get('token');
        console.log("user setting component loaded");
    }



}
