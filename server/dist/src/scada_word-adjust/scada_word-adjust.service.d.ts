import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { WordAdjustEntity } from './scada_word-adjust.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaWordAdjustService implements OnModuleInit {
    private readonly wordAdjustRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(wordAdjustRepository: Repository<WordAdjustEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private checkVariableTypeNumber;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertWordAdjust(wordAdjustData: any): Promise<any>;
    updateWordAdjust(updateData: any): Promise<any>;
    deleteWordAdjust(wordAdjustId: string): Promise<any>;
}
