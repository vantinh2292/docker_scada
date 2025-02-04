import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DesignEntity } from './scada_design.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaDesignService implements OnModuleInit {
    private readonly designRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(designRepository: Repository<DesignEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertDesign(designData: any): Promise<any>;
    updateDesign(updateData: any): Promise<any>;
    deleteDesign(designId: string): Promise<any>;
}
