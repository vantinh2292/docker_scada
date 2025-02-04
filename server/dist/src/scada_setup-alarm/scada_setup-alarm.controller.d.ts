import { ScadaSetupAlarmService } from './scada_setup-alarm.service';
export declare class ScadaSetupAlarmController {
    private readonly scadaSetupAlarmService;
    constructor(scadaSetupAlarmService: ScadaSetupAlarmService);
    getData(): Promise<any>;
    getDataSetupAlarmTable(): Promise<any>;
    insertSetupAlarm(requestBody: any): Promise<any>;
    updateSetupAlarm(requestBody: any): Promise<any>;
    deleteSetupAlarm(requestBody: any): Promise<any>;
}
