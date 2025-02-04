import { ScadaMapService } from './scada_map.service';
export declare class ScadaMapController {
    private readonly scadaMapService;
    constructor(scadaMapService: ScadaMapService);
    getData(): Promise<any>;
    getPosition(): any;
    insertMap(requestBody: any): Promise<any>;
    updateMap(requestBody: any): Promise<any>;
    deleteMap(requestBody: any): Promise<any>;
}
