import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { NavigateEntity } from './scada_navigate.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
import { MqttService } from '../mqtt/mqtt.service';
export declare class ScadaNavigateService implements OnModuleInit {
    private readonly navigateRepository;
    private readonly socketGateway;
    private readonly mqttService;
    private intervalId;
    constructor(navigateRepository: Repository<NavigateEntity>, socketGateway: SocketGateway, mqttService: MqttService);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private checkVariableTypeNumber;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertNavigate(navigateData: any): Promise<any>;
    updateNavigate(updateData: any): Promise<any>;
    deleteNavigate(navigateId: string): Promise<any>;
}
