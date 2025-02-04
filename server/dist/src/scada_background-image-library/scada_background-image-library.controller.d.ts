import { ScadaBackgroundImageLibraryService } from './scada_background-image-library.service';
export declare class ScadaBackgroundImageLibraryController {
    private readonly scadaBackgroundImageLibraryService;
    constructor(scadaBackgroundImageLibraryService: ScadaBackgroundImageLibraryService);
    getData(): Promise<any>;
    getDataQuery(screenName: string): Promise<any>;
    user: any;
    upload(requestBody: any): Promise<any>;
    update(requestBody: any): Promise<any>;
    delete(requestBody: any): Promise<any>;
}
