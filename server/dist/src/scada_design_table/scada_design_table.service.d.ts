import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DesignTableEntity } from './scada_design_table.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaDesignTableService implements OnModuleInit {
    private readonly design_tableRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(design_tableRepository: Repository<DesignTableEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertDesign_table(design_tableData: any): Promise<any>;
    updateDesign_table(updateData: any): Promise<any>;
    deleteDesign_table(design_tableId: string): Promise<any>;
}
