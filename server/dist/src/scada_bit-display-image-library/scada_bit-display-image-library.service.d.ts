import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SocketGateway } from '../socket_io/socket_io.gateway';
import { BitDisplayImageLibraryEntity } from './scada_bit-display-image-library.entity';
export declare class ScadaBitDisplayImageLibraryService implements OnModuleInit {
    private readonly bitDisplayImageLibraryRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(bitDisplayImageLibraryRepository: Repository<BitDisplayImageLibraryEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    upload(data: any): Promise<any>;
    update(updateData: any): Promise<any>;
    delete(id: string): Promise<any>;
}
