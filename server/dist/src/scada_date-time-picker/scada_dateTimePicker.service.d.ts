import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DateTimePickerEntity } from './scada_dateTimePicker.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaDateTimePickerService implements OnModuleInit {
    private readonly dateTimePickerRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(dateTimePickerRepository: Repository<DateTimePickerEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertDateTimePicker(dateTimePickerData: any): Promise<any>;
    updateDateTimePicker(updateData: any): Promise<any>;
    deleteDateTimePicker(dateTimePickerId: string): Promise<any>;
}
