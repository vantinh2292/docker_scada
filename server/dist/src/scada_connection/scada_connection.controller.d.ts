import { ScadaConnectionService } from './scada_connection.service';
export declare class ScadaConnectionController {
    private readonly scadaConnectionService;
    constructor(scadaConnectionService: ScadaConnectionService);
    getData(): Promise<any>;
    insert(requestBody: any): Promise<any>;
    update(requestBody: any): Promise<any>;
    delete(requestBody: any): Promise<any>;
}
