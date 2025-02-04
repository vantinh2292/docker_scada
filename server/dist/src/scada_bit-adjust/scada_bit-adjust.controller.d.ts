import { ScadaBitAdjustService } from './scada_bit-adjust.service';
export declare class ScadaBitAdjustController {
    private readonly scadaBitAdjustService;
    constructor(scadaBitAdjustService: ScadaBitAdjustService);
    getData(): Promise<any>;
    insertBitAdjust(requestBody: any): Promise<any>;
    updateBitAdjust(requestBody: any): Promise<any>;
    deleteBitAdjust(requestBody: any): Promise<any>;
}
