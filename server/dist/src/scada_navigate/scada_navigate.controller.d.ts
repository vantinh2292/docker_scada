import { ScadaNavigateService } from './scada_navigate.service';
export declare class ScadaNavigateController {
    private readonly scadaNavigateService;
    constructor(scadaNavigateService: ScadaNavigateService);
    getData(): Promise<any>;
    insertNavigate(requestBody: any): Promise<any>;
    updateNavigate(requestBody: any): Promise<any>;
    deleteNavigate(requestBody: any): Promise<any>;
}
