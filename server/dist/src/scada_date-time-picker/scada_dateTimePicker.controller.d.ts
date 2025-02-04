import { ScadaDateTimePickerService } from './scada_dateTimePicker.service';
export declare class ScadaDateTimePickerController {
    private readonly scadaDateTimePickerService;
    constructor(scadaDateTimePickerService: ScadaDateTimePickerService);
    getData(): Promise<any>;
    insertDateTimePicker(requestBody: any): Promise<any>;
    updateDateTimePicker(requestBody: any): Promise<any>;
    deleteDateTimePicker(requestBody: any): Promise<any>;
}
