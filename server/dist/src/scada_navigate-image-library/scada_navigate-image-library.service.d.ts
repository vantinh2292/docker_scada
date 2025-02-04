import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SocketGateway } from '../socket_io/socket_io.gateway';
import { NavigateImageLibraryEntity } from './scada_navigate-image-library.entity';
export declare class ScadaNavigateImageLibraryService implements OnModuleInit {
    private readonly navigateDisplayImageLibraryRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(navigateDisplayImageLibraryRepository: Repository<NavigateImageLibraryEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    upload(data: any): Promise<any>;
    delete(id: string): Promise<any>;
    update(updateData: any): Promise<any>;
}
