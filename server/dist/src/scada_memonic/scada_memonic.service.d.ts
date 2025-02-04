import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MemonicEntity } from './scada_memonic.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaMemonicService implements OnModuleInit {
    private readonly memonicRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(memonicRepository: Repository<MemonicEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertMemonic(memonicData: any): Promise<any>;
    updateMemonic(updateData: any): Promise<any>;
    deleteMemonic(memonicId: string): Promise<any>;
}
