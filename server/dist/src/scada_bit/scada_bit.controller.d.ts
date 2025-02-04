import { ScadaBitService } from './scada_bit.service';
export declare class ScadaBitController {
    private readonly scadaBitService;
    constructor(scadaBitService: ScadaBitService);
    getData(): Promise<any>;
    insertBit(requestBody: any): Promise<any>;
    updateBit(requestBody: any): Promise<any>;
    deleteBit(requestBody: any): Promise<any>;
}
