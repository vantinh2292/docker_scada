import { ScadaDesignImageLibraryService } from './scada_design-image-library.service';
export declare class ScadaDesignImageLibraryController {
    private readonly scadaDesignImageLibraryService;
    constructor(scadaDesignImageLibraryService: ScadaDesignImageLibraryService);
    getData(): Promise<any>;
    upload(requestBody: any): Promise<any>;
    update(requestBody: any): Promise<any>;
    delete(requestBody: any): Promise<any>;
}
