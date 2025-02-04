import { ScadaProgressBarService } from './scada_progress_bar.service';
export declare class ScadaProgressBarController {
    private readonly scadaProgressBarService;
    constructor(scadaProgressBarService: ScadaProgressBarService);
    getData(): Promise<any>;
    insert(requestBody: any): Promise<any>;
    update(requestBody: any): Promise<any>;
    delete(requestBody: any): Promise<any>;
}
