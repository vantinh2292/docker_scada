import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DWordDisplayEntity } from './scada_dword-display.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaDWordDisplayService implements OnModuleInit {
    private readonly dwordDisplayRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(dwordDisplayRepository: Repository<DWordDisplayEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private checkVariableTypeNumber;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertDWordDisplay(dwordDisplayData: any): Promise<any>;
    updateDWordDisplay(updateData: any): Promise<any>;
    deleteDWordDisplay(dwordDisplayId: string): Promise<any>;
}
