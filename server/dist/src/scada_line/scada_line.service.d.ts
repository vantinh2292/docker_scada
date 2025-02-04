import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LineEntity } from './scada_line.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaLineService implements OnModuleInit {
    private readonly lineRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(lineRepository: Repository<LineEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertLine(lineData: any): Promise<any>;
    updateLine(updateData: any): Promise<any>;
    deleteLine(lineId: string): Promise<any>;
}
