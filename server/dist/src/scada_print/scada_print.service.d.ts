import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PrintEntity } from './scada_print.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaPrintService implements OnModuleInit {
    private readonly printRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(printRepository: Repository<PrintEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    private checkVariableTypeNumber;
    getData(): Promise<any>;
    insert(printData: any): Promise<any>;
    update(updateData: any): Promise<any>;
    delete(printId: string): Promise<any>;
}
