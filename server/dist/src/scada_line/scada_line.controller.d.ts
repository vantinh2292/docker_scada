import { ScadaLineService } from './scada_line.service';
export declare class ScadaLineController {
    private readonly scadaLineService;
    constructor(scadaLineService: ScadaLineService);
    getData(): Promise<any>;
    insertLine(requestBody: any): Promise<any>;
    updateLine(requestBody: any): Promise<any>;
    deleteLine(requestBody: any): Promise<any>;
}
