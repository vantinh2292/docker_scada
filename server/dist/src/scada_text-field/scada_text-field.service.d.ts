import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TextFieldEntity } from './scada_text-field.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaTextFieldService implements OnModuleInit {
    private readonly textFieldRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(textFieldRepository: Repository<TextFieldEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertTextField(textFieldData: any): Promise<any>;
    updateTextField(updateData: any): Promise<any>;
    deleteTextField(textFieldId: string): Promise<any>;
}
