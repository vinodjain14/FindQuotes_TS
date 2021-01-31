
import * as http from "http"
import "reflect-metadata"
import SERVICE_IDENTIFIERS from "./Constants/identifiers";
import container from "./Infrastructure/Installer";
import { IController, IControllerResponse } from "./Interface/Interface";


const controller: IController = container.get<IController>(SERVICE_IDENTIFIERS.IController);

const app: http.Server = http.createServer((request : http.IncomingMessage, response: http.ServerResponse) => {
    if(request.url === '/quotes') {
        const result: IControllerResponse = controller.findAll();
        response.statusCode = result.statusCode;
        response.end(result.response);
    }
    else {
        response.statusCode = 404;
        response.end("404 Error, Sorry Page not found!!!");
    }
})

app.listen(3000, () => console.log('listening on 3000'));