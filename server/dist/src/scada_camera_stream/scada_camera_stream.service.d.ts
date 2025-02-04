import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CameraStreamEntity } from './scada_camera_stream.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaCameraStreamService implements OnModuleInit {
    private readonly cameraStreamRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(cameraStreamRepository: Repository<CameraStreamEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertCameraStream(cameraStreamData: any): Promise<any>;
    updateCameraStream(updateData: any): Promise<any>;
    deleteCameraStream(cameraStreamId: string): Promise<any>;
}
