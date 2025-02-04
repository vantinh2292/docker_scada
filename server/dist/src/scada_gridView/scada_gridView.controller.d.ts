import { ScadaGridViewService } from './scada_gridView.service';
export declare class ScadaGridViewController {
    private readonly scadaGridViewService;
    constructor(scadaGridViewService: ScadaGridViewService);
    getData(): Promise<any>;
    insertGridView(requestBody: any): Promise<any>;
    updateGridView(requestBody: any): Promise<any>;
    deleteGridView(requestBody: any): Promise<any>;
}
