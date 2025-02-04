import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PopupEntity } from './scada_popup.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
import { SharedService } from '../shared_module/shared.service';
export declare class ScadaPopupService implements OnModuleInit {
    private readonly popupRepository;
    private readonly socketGateway;
    private readonly sharedService;
    private intervalId;
    constructor(popupRepository: Repository<PopupEntity>, socketGateway: SocketGateway, sharedService: SharedService);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private checkVariableTypeNumber;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertPopup(popupData: any): Promise<any>;
    updatePopup(updateData: any): Promise<any>;
    deletePopup(popupId: string): Promise<any>;
}
