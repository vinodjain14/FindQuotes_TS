import { Container, inject, injectable } from "inversify";
import SERVICE_IDENTIFIERS from "../Constants/identifiers";
import { IController, IControllerResponse, IDatabase, IQuote } from "../Interface/Interface"

@injectable()
export class QuoteController implements IController {

    private database: IDatabase;

    constructor(
        @inject(SERVICE_IDENTIFIERS.IDatabase) db: IDatabase
    ) {
        this.database = db;
    }

    findAll(): IControllerResponse {
        const quotes: IQuote[] = this.database.findAllQuotes();
        
        return {
            statusCode: quotes.length > 0 ? 200 : 404,
            response: JSON.stringify(quotes),
        }
    }
}