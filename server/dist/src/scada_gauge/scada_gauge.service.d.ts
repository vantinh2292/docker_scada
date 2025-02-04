import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GaugeEntity } from './scada_gauge.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
import { MqttService } from '../mqtt/mqtt.service';
import { SharedService } from '../shared_module/shared.service';
export declare class ScadaGaugeService implements OnModuleInit {
    private readonly gaugeRepository;
    private readonly socketGateway;
    private readonly mqttService;
    private readonly sharedService;
    private intervalId;
    constructor(gaugeRepository: Repository<GaugeEntity>, socketGateway: SocketGateway, mqttService: MqttService, sharedService: SharedService);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private checkVariableTypeNumber;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insert(gaugeData: any): Promise<any>;
    update(updateData: any): Promise<any>;
    delete(gaugeId: string): Promise<any>;
}
