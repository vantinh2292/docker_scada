import { ScadaSelectService } from './scada_select.service';
export declare class ScadaSelectController {
    private readonly scadaSelectService;
    constructor(scadaSelectService: ScadaSelectService);
    getData(): Promise<any>;
    insert(requestBody: any): Promise<any>;
    update(requestBody: any): Promise<any>;
    delete(requestBody: any): Promise<any>;
}
