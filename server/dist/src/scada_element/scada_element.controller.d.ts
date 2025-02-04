import { ScadaElementService } from './scada_element.service';
export declare class ScadaElementController {
    private readonly scadaElementService;
    constructor(scadaElementService: ScadaElementService);
    getData(): Promise<any>;
    insertElement(requestBody: any): Promise<any>;
    updateElement(requestBody: any): Promise<any>;
    deleteElement(requestBody: any): Promise<any>;
}
