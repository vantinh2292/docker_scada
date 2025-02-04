import { ScadaBitDisplayService } from './scada_bit-display.service';
export declare class ScadaBitDisplayController {
    private readonly scadaBitDisplayService;
    constructor(scadaBitDisplayService: ScadaBitDisplayService);
    getData(): Promise<any>;
    insertBitDisplay(requestBody: any): Promise<any>;
    updateBitDisplay(requestBody: any): Promise<any>;
    deleteBitDisplay(requestBody: any): Promise<any>;
}
