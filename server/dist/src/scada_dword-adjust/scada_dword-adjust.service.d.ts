import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DWordAdjustEntity } from './scada_dword-adjust.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaDWordAdjustService implements OnModuleInit {
    private readonly dwordAdjustRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(dwordAdjustRepository: Repository<DWordAdjustEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private checkVariableTypeNumber;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertDWordAdjust(dwordAdjustData: any): Promise<any>;
    updateDWordAdjust(updateData: any): Promise<any>;
    deleteDWordAdjust(dwordAdjustId: string): Promise<any>;
}
