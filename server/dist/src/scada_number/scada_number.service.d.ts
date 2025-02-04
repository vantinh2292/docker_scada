import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { NumberEntity } from './scada_number.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
import { MqttService } from '../mqtt/mqtt.service';
import { SharedService } from '../shared_module/shared.service';
export declare class ScadaNumberService implements OnModuleInit {
    private readonly numberRepository;
    private readonly socketGateway;
    private readonly mqttService;
    private readonly sharedService;
    private intervalId;
    constructor(numberRepository: Repository<NumberEntity>, socketGateway: SocketGateway, mqttService: MqttService, sharedService: SharedService);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private checkVariableTypeNumber;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    getDataRaw(): any;
    insertNumber(numberData: any): Promise<any>;
    updateNumber(updateData: any): Promise<any>;
    deleteNumber(numberId: string): Promise<any>;
}
