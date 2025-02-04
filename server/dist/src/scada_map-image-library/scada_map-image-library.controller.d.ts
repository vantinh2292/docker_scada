import { ScadaMapImageLibraryService } from './scada_map-image-library.service';
export declare class ScadaMapImageLibraryController {
    private readonly scadaMapImageLibraryService;
    constructor(scadaMapImageLibraryService: ScadaMapImageLibraryService);
    getData(): Promise<any>;
    upload(requestBody: any): Promise<any>;
    delete(requestBody: any): Promise<any>;
}
