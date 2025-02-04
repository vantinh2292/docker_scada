import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SelectEntity } from './scada_select.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaSelectService implements OnModuleInit {
    private readonly selectRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(selectRepository: Repository<SelectEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insert(selectData: any): Promise<any>;
    update(updateData: any): Promise<any>;
    delete(selectId: string): Promise<any>;
}
