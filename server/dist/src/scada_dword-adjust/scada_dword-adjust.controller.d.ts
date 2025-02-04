import { ScadaDWordAdjustService } from './scada_dword-adjust.service';
export declare class ScadaDWordAdjustController {
    private readonly scadaDWordAdjustService;
    constructor(scadaDWordAdjustService: ScadaDWordAdjustService);
    getData(): Promise<any>;
    insertDWordAdjust(requestBody: any): Promise<any>;
    updateDWordAdjust(requestBody: any): Promise<any>;
    deleteDWordAdjust(requestBody: any): Promise<any>;
}
