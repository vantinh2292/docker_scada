import { SocketGateway } from '../socket_io/socket_io.gateway';
import { MqttService } from '../mqtt/mqtt.service';
export declare class ScadaStringRefreshService {
    private readonly socketGateway;
    private readonly mqttService;
    constructor(socketGateway: SocketGateway, mqttService: MqttService);
    private checkVariableTypeNumber;
    private isObject;
    refreshData(): void;
}
