import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BitEntity } from './scada_bit.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
import { MqttService } from '../mqtt/mqtt.service';
import { SharedService } from '../shared_module/shared.service';
export declare class ScadaBitService implements OnModuleInit {
    private readonly bitRepository;
    private readonly socketGateway;
    private readonly mqttService;
    private readonly sharedService;
    private intervalId;
    constructor(bitRepository: Repository<BitEntity>, socketGateway: SocketGateway, mqttService: MqttService, sharedService: SharedService);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private checkVariableTypeNumber;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertBit(bitData: any): Promise<any>;
    updateBit(updateData: any): Promise<any>;
    deleteBit(bitId: string): Promise<any>;
}
