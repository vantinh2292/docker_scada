import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SocketGateway } from '../socket_io/socket_io.gateway';
import { BitAdjustImageLibraryEntity } from './scada_bit-adjust-image-library.entity';
export declare class ScadaBitAdjustImageLibraryService implements OnModuleInit {
    private readonly bitDisplayImageLibraryRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(bitDisplayImageLibraryRepository: Repository<BitAdjustImageLibraryEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    upload(data: any): Promise<any>;
    delete(id: string): Promise<any>;
}
