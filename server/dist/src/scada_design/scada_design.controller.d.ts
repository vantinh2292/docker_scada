import { ScadaDesignService } from './scada_design.service';
export declare class ScadaDesignController {
    private readonly scadaDesignService;
    constructor(scadaDesignService: ScadaDesignService);
    getData(): Promise<any>;
    insertDesign(requestBody: any): Promise<any>;
    updateDesign(requestBody: any): Promise<any>;
    deleteDesign(requestBody: any): Promise<any>;
}
