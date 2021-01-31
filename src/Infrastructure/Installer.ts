import "reflect-metadata";
import { Container } from "inversify";

import SERVICE_IDENTIFIERS from "../Constants/identifiers";
import { IController, IDatabase } from "../Interface/Interface";
import { QuoteController } from "../Repositories/QuoteController";
import { StubDatabase } from "../Repositories/StubDatabase";


let container = new Container();

container.bind<IController>(SERVICE_IDENTIFIERS.IController).to(QuoteController);
container.bind<IDatabase>(SERVICE_IDENTIFIERS.IDatabase).to(StubDatabase);

export default container;