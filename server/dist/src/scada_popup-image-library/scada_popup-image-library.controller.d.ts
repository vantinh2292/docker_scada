import { ScadaPopupImageLibraryService } from './scada_popup-image-library.service';
export declare class ScadaPopupImageLibraryController {
    private readonly scadaPopupImageLibraryService;
    constructor(scadaPopupImageLibraryService: ScadaPopupImageLibraryService);
    getData(): Promise<any>;
    upload(requestBody: any): Promise<any>;
    update(requestBody: any): Promise<any>;
    delete(requestBody: any): Promise<any>;
}
