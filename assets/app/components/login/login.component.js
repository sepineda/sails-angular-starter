"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../../services/auth.service");
var LoginComponent = (function () {
    function LoginComponent(http, fb, authService, router, route) {
        this.http = http;
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.status = { color: 'green', message: '' };
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            password: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required]
        });
        // reset login status
        this.authService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            var model = this.form.value;
            var user = { email: model.email, password: model.password };
            this.authService.login(user.email, model.password)
                .subscribe(function (data) {
                _this.router.navigate([_this.returnUrl]);
            }, function (error) {
                _this.status.color = 'red';
                _this.status.message = error;
            });
        }
        else {
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'wedding-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [http_1.Http,
            forms_1.FormBuilder,
            auth_service_1.AuthService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map