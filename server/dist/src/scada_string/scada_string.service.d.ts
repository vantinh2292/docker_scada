import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { StringEntity } from './scada_string.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
import { MqttService } from '../mqtt/mqtt.service';
import { SharedService } from '../shared_module/shared.service';
export declare class ScadaStringService implements OnModuleInit {
    private readonly stringRepository;
    private readonly socketGateway;
    private readonly mqttService;
    private readonly sharedService;
    private intervalId;
    constructor(stringRepository: Repository<StringEntity>, socketGateway: SocketGateway, mqttService: MqttService, sharedService: SharedService);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private checkVariableTypeNumber;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertString(stringData: any): Promise<any>;
    updateString(updateData: any): Promise<any>;
    deleteString(stringId: string): Promise<any>;
}
