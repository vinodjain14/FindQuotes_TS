import { Container, inject, injectable } from "inversify";
import { IDatabase, IQuote } from "../Interface/Interface"

@injectable()
export class StubDatabase implements IDatabase{
    findAllQuotes (): IQuote[] {
        return [
            { Message: "Yes, this URL contains a word quotes." }
        ]
    }
}