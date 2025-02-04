import { ScadaNumberImageLibraryService } from './scada_number-image-library.service';
export declare class ScadaNumberImageLibraryController {
    private readonly scadaNumberImageLibraryService;
    constructor(scadaNumberImageLibraryService: ScadaNumberImageLibraryService);
    getData(): Promise<any>;
    upload(requestBody: any): Promise<any>;
    delete(requestBody: any): Promise<any>;
    update(requestBody: any): Promise<any>;
}
