import { ScadaElementImageLibraryService } from './scada_element-image-library.service';
export declare class ScadaElementImageLibraryController {
    private readonly scadaElementImageLibraryService;
    constructor(scadaElementImageLibraryService: ScadaElementImageLibraryService);
    getData(): Promise<any>;
    upload(requestBody: any): Promise<any>;
    update(requestBody: any): Promise<any>;
    delete(requestBody: any): Promise<any>;
}
