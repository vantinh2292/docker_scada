import { ScadaReportService } from './scada_report.service';
export declare class ScadaReportController {
    private readonly scadaReportService;
    constructor(scadaReportService: ScadaReportService);
    getData(): Promise<any>;
    insert(requestBody: any): Promise<any>;
    update(requestBody: any): Promise<any>;
    delete(requestBody: any): Promise<any>;
}
