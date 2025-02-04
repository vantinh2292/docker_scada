import { ScadaNumberService } from './scada_number.service';
export declare class ScadaNumberController {
    private readonly scadaNumberService;
    constructor(scadaNumberService: ScadaNumberService);
    getData(): Promise<any>;
    getDataRaw(): any;
    insertNumber(requestBody: any): Promise<any>;
    updateNumber(requestBody: any): Promise<any>;
    deleteNumber(requestBody: any): Promise<any>;
}
