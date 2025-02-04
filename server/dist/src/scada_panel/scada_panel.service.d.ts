import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PanelEntity } from './scada_panel.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaPanelService implements OnModuleInit {
    private readonly panelRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(panelRepository: Repository<PanelEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertPanel(panelData: any): Promise<any>;
    updatePanel(updateData: any): Promise<any>;
    deletePanel(panelId: string): Promise<any>;
}
