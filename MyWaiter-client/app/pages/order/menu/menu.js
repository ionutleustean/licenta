var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require('ionic-angular');
var Order_1 = require('../../../servises/backand/Order');
var cart_1 = require('../cart/cart');
var Menu = (function () {
    function Menu(nav, navParams, order) {
        this.nav = nav;
        this.order = order;
        this.orders = [];
        this.restaurantId = navParams.get("restaurantId");
        this.tableNr = navParams.get("tableNr");
        if (navParams.get("orders")) {
            this.orders = navParams.get("orders");
        }
        ;
        this.menu = [];
        this.getMenu(this.restaurantId);
    }
    Menu.prototype.getMenu = function (restaurantId) {
        var _this = this;
        this.order.getMenu(restaurantId)
            .subscribe(function (data) {
            _this.menu = data;
            for (var i = 0; i < data.length; i++) {
                _this.menu[i].desc = data[i].ShortDescription;
                _this.menu[i].descIcon = "chevron-down";
                _this.menu[i].descVisibility = false;
                _this.menu[i].isLiked = false;
                if (!_this.menu[i].Rating) {
                    _this.menu[i].Rating = 0;
                }
            }
        }, function (err) { return _this.logError(err); });
    };
    Menu.prototype.updateImgSrc = function (index) {
        this.menu[index].Image = "http://kingofwallpapers.com/food/food-023.jpg";
    };
    Menu.prototype.toggleDescription = function (index) {
        console.log(index);
        this.menu[index].descVisibility = !this.menu[index].descVisibility;
        if (this.menu[index].descVisibility === false) {
            this.menu[index].desc = this.menu[index].ShortDescription;
            this.menu[index].descIcon = "chevron-down";
        }
        else {
            this.menu[index].desc = this.menu[index].Description;
            this.menu[index].descIcon = "chevron-up";
        }
    };
    Menu.prototype.toggleLike = function (index) {
        if (this.menu[index].isLiked) {
            this.menu[index].Rating--;
        }
        else {
            this.menu[index].Rating++;
        }
        this.order.updateProduct(this.menu[index].id, this.menu[index]).subscribe();
        this.menu[index].isLiked = !this.menu[index].isLiked;
    };
    Menu.prototype.addOrder = function (product) {
        console.log(product);
        this.orders.push(product);
    };
    Menu.prototype.goToCart = function () {
        this.nav.push(cart_1.Cart, {
            orders: this.orders,
            restaurantId: this.restaurantId,
            tableNr: this.tableNr,
        });
    };
    Menu.prototype.logError = function (err) {
    };
    Menu = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/order/menu/menu.html',
            styleUrls: ['build/pages/order/menu/menu.css'],
            providers: [Order_1.Order],
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.NavParams, Order_1.Order])
    ], Menu);
    return Menu;
})();
exports.Menu = Menu;
