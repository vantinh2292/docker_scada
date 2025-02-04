import { ScadaDWordDisplayService } from './scada_dword-display.service';
export declare class ScadaDWordDisplayController {
    private readonly scadaDWordDisplayService;
    constructor(scadaDWordDisplayService: ScadaDWordDisplayService);
    getData(): Promise<any>;
    insertDWordDisplay(requestBody: any): Promise<any>;
    updateDWordDisplay(requestBody: any): Promise<any>;
    deleteDWordDisplay(requestBody: any): Promise<any>;
}
