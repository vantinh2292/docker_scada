import { ScadaPopupService } from './scada_popup.service';
export declare class ScadaPopupController {
    private readonly scadaPopupService;
    constructor(scadaPopupService: ScadaPopupService);
    getData(): Promise<any>;
    insertPopup(requestBody: any): Promise<any>;
    updatePopup(requestBody: any): Promise<any>;
    deletePopup(requestBody: any): Promise<any>;
}
