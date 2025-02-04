import { ScadaSliderService } from './scada_slider.service';
export declare class ScadaSliderController {
    private readonly scadaSliderService;
    constructor(scadaSliderService: ScadaSliderService);
    getData(): Promise<any>;
    insert(requestBody: any): Promise<any>;
    update(requestBody: any): Promise<any>;
    delete(requestBody: any): Promise<any>;
}
