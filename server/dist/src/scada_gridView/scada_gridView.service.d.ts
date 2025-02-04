import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GridViewEntity } from './scada_gridView.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaGridViewService implements OnModuleInit {
    private readonly gridViewRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(gridViewRepository: Repository<GridViewEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertGridView(gridViewData: any): Promise<any>;
    updateGridView(updateData: any): Promise<any>;
    deleteGridView(gridViewId: string): Promise<any>;
}
