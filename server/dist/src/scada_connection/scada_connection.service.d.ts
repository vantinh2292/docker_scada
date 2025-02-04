import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ConnectionEntity } from './scada_connection.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
import { MqttService } from '../mqtt/mqtt.service';
export declare class ScadaConnectionService implements OnModuleInit {
    private readonly connectionRepository;
    private readonly socketGateway;
    private readonly mqttService;
    private intervalId;
    constructor(connectionRepository: Repository<ConnectionEntity>, socketGateway: SocketGateway, mqttService: MqttService);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private checkVariableTypeNumber;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insert(connectionData: any): Promise<any>;
    update(updateData: any): Promise<any>;
    delete(connectionId: string): Promise<any>;
}
