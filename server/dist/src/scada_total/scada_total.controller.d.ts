import { ScadaTotalService } from './scada_total.service';
export declare class ScadaTotalController {
    private readonly scadaTotalService;
    constructor(scadaTotalService: ScadaTotalService);
    insert(requestBody: any): Promise<any>;
    delete(requestBody: any): Promise<any>;
}
