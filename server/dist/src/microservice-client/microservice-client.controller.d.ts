import { MicroserviceClientService } from './microservice-client.service';
export declare class MicroserviceClientController {
    private readonly microserviceClientService;
    constructor(microserviceClientService: MicroserviceClientService);
    sendMessage(): Promise<string>;
}
