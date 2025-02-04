import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { WordDisplayEntity } from './scada_word-display.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaWordDisplayService implements OnModuleInit {
    private readonly wordDisplayRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(wordDisplayRepository: Repository<WordDisplayEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private checkVariableTypeNumber;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    getDataRaw(): any;
    insertWordDisplay(wordDisplayData: any): Promise<any>;
    updateWordDisplay(updateData: any): Promise<any>;
    deleteWordDisplay(wordDisplayId: string): Promise<any>;
}
