import { ScadaGaugeService } from './scada_gauge.service';
export declare class ScadaGaugeController {
    private readonly scadaGaugeService;
    constructor(scadaGaugeService: ScadaGaugeService);
    getData(): Promise<any>;
    insert(requestBody: any): Promise<any>;
    update(requestBody: any): Promise<any>;
    delete(requestBody: any): Promise<any>;
}
