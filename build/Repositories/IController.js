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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var identifiers_1 = __importDefault(require("./../Constants/identifiers"));
var QuoteController = /** @class */ (function () {
    function QuoteController(db) {
        this.database = db;
    }
    QuoteController.prototype.findAll = function () {
        var quotes = this.database.findAllQuotes();
        return {
            statusCode: quotes.length > 0 ? 200 : 404,
            response: JSON.stringify(quotes),
        };
    };
    QuoteController = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(identifiers_1.default.IDatabase)),
        __metadata("design:paramtypes", [Object])
    ], QuoteController);
    return QuoteController;
}());
