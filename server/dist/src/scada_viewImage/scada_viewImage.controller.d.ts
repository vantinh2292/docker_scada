import { ScadaViewImageService } from './scada_viewImage.service';
export declare class ScadaViewImageController {
    private readonly scadaViewImageService;
    constructor(scadaViewImageService: ScadaViewImageService);
    getData(): Promise<any>;
    insertViewImage(requestBody: any): Promise<any>;
    updateViewImage(requestBody: any): Promise<any>;
    deleteViewImage(requestBody: any): Promise<any>;
}
