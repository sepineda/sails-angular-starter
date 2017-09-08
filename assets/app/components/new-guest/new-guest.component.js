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
var forms_1 = require("@angular/forms");
var NewGuestComponent = (function () {
    function NewGuestComponent(http, fb) {
        this.http = http;
        this.fb = fb;
    }
    NewGuestComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            first_name: ['', forms_1.Validators.required],
            last_name: ['', forms_1.Validators.required],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            phone: ''
        });
        this.status = { color: 'white-text', message: '' };
    };
    NewGuestComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            console.log('yes');
            var formModel = this.form.value;
            var newGuest = {
                first_name: formModel.first_name,
                last_name: formModel.last_name,
                phone: formModel.phone,
                email: formModel.email,
                active: true,
                _wedding: '59ad8bd0a48dace266f1935d'
            };
            this.http.post('Guest', newGuest)
                .subscribe(function (result) {
                _this.status.color = 'green-text';
                _this.status.message = 'Nuevo invitado agregado exitosamente';
            });
        }
        else {
            this.status.color = 'red-text';
            this.status.message = 'Por favor complete los campos requeridos';
        }
    };
    NewGuestComponent = __decorate([
        core_1.Component({
            selector: 'app-new-guest',
            templateUrl: './new-guest.component.html',
            styleUrls: ['./new-guest.component.css']
        }),
        __metadata("design:paramtypes", [http_1.Http, forms_1.FormBuilder])
    ], NewGuestComponent);
    return NewGuestComponent;
}());
exports.NewGuestComponent = NewGuestComponent;
//# sourceMappingURL=new-guest.component.js.map