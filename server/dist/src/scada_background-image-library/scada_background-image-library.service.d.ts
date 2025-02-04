import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SocketGateway } from '../socket_io/socket_io.gateway';
import { BackgroundImageLibraryEntity } from './scada_background-image-library.entity';
export declare class ScadaBackgroundImageLibraryService implements OnModuleInit {
    private readonly BackgroundImageLibraryRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(BackgroundImageLibraryRepository: Repository<BackgroundImageLibraryEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    getDataQuery(screenName: any): Promise<any>;
    upload(data: any): Promise<any>;
    delete(id: string): Promise<any>;
    update(updateData: any): Promise<any>;
}
