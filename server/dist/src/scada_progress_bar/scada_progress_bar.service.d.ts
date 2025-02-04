import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProgressBarEntity } from './scada_progress_bar.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
import { MqttService } from '../mqtt/mqtt.service';
import { SharedService } from '../shared_module/shared.service';
export declare class ScadaProgressBarService implements OnModuleInit {
    private readonly progressBarRepository;
    private readonly socketGateway;
    private readonly mqttService;
    private readonly sharedService;
    private intervalId;
    constructor(progressBarRepository: Repository<ProgressBarEntity>, socketGateway: SocketGateway, mqttService: MqttService, sharedService: SharedService);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private checkVariableTypeNumber;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insert(progressBarData: any): Promise<any>;
    update(updateData: any): Promise<any>;
    delete(progressBarId: string): Promise<any>;
}
