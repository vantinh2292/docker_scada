import { ScadaBitAdjustImageLibraryService } from './scada_bit-adjust-image-library.service';
export declare class ScadaBitAdjustImageLibraryController {
    private readonly scadaBitAdjustImageLibraryService;
    constructor(scadaBitAdjustImageLibraryService: ScadaBitAdjustImageLibraryService);
    getData(): Promise<any>;
    upload(requestBody: any): Promise<any>;
    delete(requestBody: any): Promise<any>;
}
