import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ViewImageEntity } from './scada_viewImage.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaViewImageService implements OnModuleInit {
    private readonly viewImageRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(viewImageRepository: Repository<ViewImageEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertViewImage(viewImageData: any): Promise<any>;
    updateViewImage(updateData: any): Promise<any>;
    deleteViewImage(viewImageId: string): Promise<any>;
}
