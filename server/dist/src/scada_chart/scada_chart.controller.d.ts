import { ScadaChartService } from './scada_chart.service';
export declare class ScadaChartController {
    private readonly scadaChartService;
    constructor(scadaChartService: ScadaChartService);
    getData(): Promise<any>;
    insertChart(requestBody: any): Promise<any>;
    updateChart(requestBody: any): Promise<any>;
    deleteChart(requestBody: any): Promise<any>;
}
