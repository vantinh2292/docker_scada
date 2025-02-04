import { ScadaWordAdjustService } from './scada_word-adjust.service';
export declare class ScadaWordAdjustController {
    private readonly scadaWordAdjustService;
    constructor(scadaWordAdjustService: ScadaWordAdjustService);
    getData(): Promise<any>;
    insertWordAdjust(requestBody: any): Promise<any>;
    updateWordAdjust(requestBody: any): Promise<any>;
    deleteWordAdjust(requestBody: any): Promise<any>;
}
