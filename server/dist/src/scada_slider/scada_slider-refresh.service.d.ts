import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaSliderRefreshService {
    private readonly socketGateway;
    constructor(socketGateway: SocketGateway);
    private checkVariableTypeNumber;
    private isObject;
    refreshData(): void;
}
