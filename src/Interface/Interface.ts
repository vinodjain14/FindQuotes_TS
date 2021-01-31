
export interface IQuote {
    Message: string;
}

export interface IControllerResponse {
    statusCode: number;
    response: string;
}

export interface IController {
    findAll: () => IControllerResponse 
}

export interface IDatabase {
    findAllQuotes: () => IQuote[]
}