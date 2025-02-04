import { ScadaIconImageLibraryService } from './scada_icon-image-library.service';
export declare class ScadaIconImageLibraryController {
    private readonly scadaIconImageLibraryService;
    constructor(scadaIconImageLibraryService: ScadaIconImageLibraryService);
    getData(): Promise<any>;
    upload(requestBody: any): Promise<any>;
    update(requestBody: any): Promise<any>;
    delete(requestBody: any): Promise<any>;
}
