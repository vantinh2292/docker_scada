import { ScadaDesignTableService } from './scada_design_table.service';
export declare class ScadaDesignTableController {
    private readonly scadaDesign_tableService;
    constructor(scadaDesign_tableService: ScadaDesignTableService);
    getData(): Promise<any>;
    insertDesign_table(requestBody: any): Promise<any>;
    updateDesign_table(requestBody: any): Promise<any>;
    deleteDesign_table(requestBody: any): Promise<any>;
}
