import { ScadaPanelService } from './scada_panel.service';
export declare class ScadaPanelController {
    private readonly scadaPanelService;
    constructor(scadaPanelService: ScadaPanelService);
    getData(): Promise<any>;
    insertPanel(requestBody: any): Promise<any>;
    updatePanel(requestBody: any): Promise<any>;
    deletePanel(requestBody: any): Promise<any>;
}
