import { ScadaWordDisplayService } from './scada_word-display.service';
export declare class ScadaWordDisplayController {
    private readonly scadaWordDisplayService;
    constructor(scadaWordDisplayService: ScadaWordDisplayService);
    getData(): Promise<any>;
    getDataRaw(): any;
    insertWordDisplay(requestBody: any): Promise<any>;
    updateWordDisplay(requestBody: any): Promise<any>;
    deleteWordDisplay(requestBody: any): Promise<any>;
}
