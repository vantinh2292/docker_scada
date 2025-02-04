import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SocketGateway } from '../socket_io/socket_io.gateway';
import { BitImageLibraryEntity } from './scada_bit-image-library.entity';
export declare class ScadaBitImageLibraryService implements OnModuleInit {
    private readonly bitDisplayImageLibraryRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(bitDisplayImageLibraryRepository: Repository<BitImageLibraryEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    upload(data: any): Promise<any>;
    delete(id: string): Promise<any>;
    update(updateData: any): Promise<any>;
}
