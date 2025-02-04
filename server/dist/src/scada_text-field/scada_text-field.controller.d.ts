import { ScadaTextFieldService } from './scada_text-field.service';
export declare class ScadaTextFieldController {
    private readonly scadaTextFieldService;
    constructor(scadaTextFieldService: ScadaTextFieldService);
    getData(): Promise<any>;
    insertTextField(requestBody: any): Promise<any>;
    updateTextField(requestBody: any): Promise<any>;
    deleteTextField(requestBody: any): Promise<any>;
}
