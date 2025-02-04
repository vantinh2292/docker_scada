import { SocketGateway } from '../socket_io/socket_io.gateway';
import { SharedService } from '../shared_module/shared.service';
export declare class ScadaProgressBarRefreshService {
    private readonly socketGateway;
    private readonly sharedService;
    constructor(socketGateway: SocketGateway, sharedService: SharedService);
    private checkVariableTypeNumber;
    refreshData(): void;
}
