"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_1 = require("inversify");
var identifiers_1 = __importDefault(require("../Constants/identifiers"));
var QuoteController_1 = require("../Repositories/QuoteController");
var StubDatabase_1 = require("../Repositories/StubDatabase");
var container = new inversify_1.Container();
container.bind(identifiers_1.default.IController).to(QuoteController_1.QuoteController);
container.bind(identifiers_1.default.IDatabase).to(StubDatabase_1.StubDatabase);
exports.default = container;
