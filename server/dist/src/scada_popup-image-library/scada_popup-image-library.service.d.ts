import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SocketGateway } from '../socket_io/socket_io.gateway';
import { PopupImageLibraryEntity } from './scada_popup-image-library.entity';
export declare class ScadaPopupImageLibraryService implements OnModuleInit {
    private readonly popupImageLibraryRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(popupImageLibraryRepository: Repository<PopupImageLibraryEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    upload(data: any): Promise<any>;
    update(updateData: any): Promise<any>;
    delete(id: string): Promise<any>;
}
