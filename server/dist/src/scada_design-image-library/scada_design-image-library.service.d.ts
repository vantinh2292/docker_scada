import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SocketGateway } from '../socket_io/socket_io.gateway';
import { DesignImageLibraryEntity } from './scada_design-image-library.entity';
export declare class ScadaDesignImageLibraryService implements OnModuleInit {
    private readonly designImageLibraryRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(designImageLibraryRepository: Repository<DesignImageLibraryEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    upload(data: any): Promise<any>;
    update(updateData: any): Promise<any>;
    delete(id: string): Promise<any>;
}
