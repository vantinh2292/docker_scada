import { ScadaStringService } from './scada_string.service';
export declare class ScadaStringController {
    private readonly scadaStringService;
    constructor(scadaStringService: ScadaStringService);
    getData(): Promise<any>;
    insertString(requestBody: any): Promise<any>;
    updateString(requestBody: any): Promise<any>;
    deleteString(requestBody: any): Promise<any>;
}
