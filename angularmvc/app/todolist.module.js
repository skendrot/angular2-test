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
var core_1 = require('@angular/core');
var app_service_todolist_1 = require('./services/app.service.todolist');
var http_1 = require('@angular/http');
var todolist_component_1 = require('./components/todolist/todolist.component');
var TodoListModule = (function () {
    function TodoListModule() {
    }
    TodoListModule = __decorate([
        core_1.NgModule({
            imports: [http_1.HttpModule],
            declarations: [todolist_component_1.TodoListComponent],
            providers: [app_service_todolist_1.AppServiceTodoList],
            bootstrap: [todolist_component_1.TodoListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoListModule);
    return TodoListModule;
}());
exports.TodoListModule = TodoListModule;
//# sourceMappingURL=todolist.module.js.map