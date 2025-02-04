import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { _3DEntity } from './scada_3D.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class Scada3DService implements OnModuleInit {
    private readonly _3DRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(_3DRepository: Repository<_3DEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insert3D(_3DData: any): Promise<any>;
    update3D(updateData: any): Promise<any>;
    delete3D(_3DId: string): Promise<any>;
}
