import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BitDisplayEntity } from './scada_bit-display.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaBitDisplayService implements OnModuleInit {
    private readonly bitDisplayRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(bitDisplayRepository: Repository<BitDisplayEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private checkVariableTypeNumber;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertBitDisplay(bitDisplayData: any): Promise<any>;
    updateBitDisplay(updateData: any): Promise<any>;
    deleteBitDisplay(bitDisplayId: string): Promise<any>;
}
