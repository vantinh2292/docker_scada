import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SetupAlarmEntity } from './scada_setup-alarm.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaSetupAlarmService implements OnModuleInit {
    private readonly setupAlarmRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(setupAlarmRepository: Repository<SetupAlarmEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    getDataSetupAlarmTable(): Promise<any>;
    insertSetupAlarm(setupAlarmData: any): Promise<any>;
    updateSetupAlarm(updateData: any): Promise<any>;
    deleteSetupAlarm(setupAlarmId: string): Promise<any>;
}
