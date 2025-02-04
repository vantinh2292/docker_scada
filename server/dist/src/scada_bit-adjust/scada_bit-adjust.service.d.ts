import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BitAdjustEntity } from './scada_bit-adjust.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaBitAdjustService implements OnModuleInit {
    private readonly bitAdjustRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(bitAdjustRepository: Repository<BitAdjustEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private checkVariableTypeNumber;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertBitAdjust(bitAdjustData: any): Promise<any>;
    updateBitAdjust(updateData: any): Promise<any>;
    deleteBitAdjust(bitAdjustId: string): Promise<any>;
}
