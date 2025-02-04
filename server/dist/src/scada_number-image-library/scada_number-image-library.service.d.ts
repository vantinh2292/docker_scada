import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SocketGateway } from '../socket_io/socket_io.gateway';
import { NumberImageLibraryEntity } from './scada_number-image-library.entity';
export declare class ScadaNumberImageLibraryService implements OnModuleInit {
    private readonly numberDisplayImageLibraryRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(numberDisplayImageLibraryRepository: Repository<NumberImageLibraryEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    upload(data: any): Promise<any>;
    delete(id: string): Promise<any>;
    update(updateData: any): Promise<any>;
}
