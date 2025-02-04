import { ScadaBitDisplayImageLibraryService } from './scada_bit-display-image-library.service';
export declare class ScadaBitDisplayImageLibraryController {
    private readonly scadaBitDisplayImageLibraryService;
    constructor(scadaBitDisplayImageLibraryService: ScadaBitDisplayImageLibraryService);
    getData(): Promise<any>;
    upload(requestBody: any): Promise<any>;
    update(requestBody: any): Promise<any>;
    delete(requestBody: any): Promise<any>;
}
