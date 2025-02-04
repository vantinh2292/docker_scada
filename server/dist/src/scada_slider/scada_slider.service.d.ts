import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SliderEntity } from './scada_slider.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
import { MqttService } from '../mqtt/mqtt.service';
import { SharedService } from '../shared_module/shared.service';
export declare class ScadaSliderService implements OnModuleInit {
    private readonly sliderRepository;
    private readonly socketGateway;
    private readonly mqttService;
    private readonly sharedService;
    private intervalId;
    constructor(sliderRepository: Repository<SliderEntity>, socketGateway: SocketGateway, mqttService: MqttService, sharedService: SharedService);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private checkVariableTypeNumber;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insert(sliderData: any): Promise<any>;
    update(updateData: any): Promise<any>;
    delete(sliderId: string): Promise<any>;
}
