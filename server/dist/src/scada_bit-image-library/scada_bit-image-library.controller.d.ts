import { ScadaBitImageLibraryService } from './scada_bit-image-library.service';
export declare class ScadaBitImageLibraryController {
    private readonly scadaBitImageLibraryService;
    constructor(scadaBitImageLibraryService: ScadaBitImageLibraryService);
    getData(): Promise<any>;
    upload(requestBody: any): Promise<any>;
    delete(requestBody: any): Promise<any>;
    update(requestBody: any): Promise<any>;
}
