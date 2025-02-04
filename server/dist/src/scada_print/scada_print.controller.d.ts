import { ScadaPrintService } from './scada_print.service';
export declare class ScadaPrintController {
    private readonly scadaPrintService;
    constructor(scadaPrintService: ScadaPrintService);
    getData(): Promise<any>;
    insert(requestBody: any): Promise<any>;
    update(requestBody: any): Promise<any>;
    delete(requestBody: any): Promise<any>;
}
