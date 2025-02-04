import { ScadaNavigateImageLibraryService } from './scada_navigate-image-library.service';
export declare class ScadaNavigateImageLibraryController {
    private readonly scadaNavigateImageLibraryService;
    constructor(scadaNavigateImageLibraryService: ScadaNavigateImageLibraryService);
    getData(): Promise<any>;
    upload(requestBody: any): Promise<any>;
    delete(requestBody: any): Promise<any>;
    update(requestBody: any): Promise<any>;
}
