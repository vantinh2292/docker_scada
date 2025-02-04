import { ScadaLabelService } from './scada_label.service';
export declare class ScadaLabelController {
    private readonly scadaLabelService;
    constructor(scadaLabelService: ScadaLabelService);
    getData(): Promise<any>;
    insertLabel(requestBody: any): Promise<any>;
    updateLabel(requestBody: any): Promise<any>;
    deleteLabel(requestBody: any): Promise<any>;
}
