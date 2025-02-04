import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MapEntity } from './scada_map.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaMapService implements OnModuleInit {
    private readonly mapRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(mapRepository: Repository<MapEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertMap(mapData: any): Promise<any>;
    updateMap(updateData: any): Promise<any>;
    deleteMap(mapId: string): Promise<any>;
}
