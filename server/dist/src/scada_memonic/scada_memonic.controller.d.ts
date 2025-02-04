import { ScadaMemonicService } from './scada_memonic.service';
export declare class ScadaMemonicController {
    private readonly scadaMemonicService;
    constructor(scadaMemonicService: ScadaMemonicService);
    getData(): Promise<any>;
    insertMemonic(requestBody: any): Promise<any>;
    updateMemonic(requestBody: any): Promise<any>;
    deleteMemonic(requestBody: any): Promise<any>;
}
