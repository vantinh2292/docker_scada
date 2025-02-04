import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LabelEntity } from './scada_label.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaLabelService implements OnModuleInit {
    private readonly labelRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(labelRepository: Repository<LabelEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertLabel(labelData: any): Promise<any>;
    updateLabel(updateData: any): Promise<any>;
    deleteLabel(labelId: string): Promise<any>;
}
