import { SocketGateway } from '../socket_io/socket_io.gateway';
import { MqttService } from '../mqtt/mqtt.service';
import { SharedService } from '../shared_module/shared.service';
export declare class ScadaNumberRefreshService {
    private readonly socketGateway;
    private readonly mqttService;
    private readonly sharedService;
    constructor(socketGateway: SocketGateway, mqttService: MqttService, sharedService: SharedService);
    refreshData(): void;
}
