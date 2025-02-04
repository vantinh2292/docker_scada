import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaBitDisplayRefreshService {
    private readonly socketGateway;
    constructor(socketGateway: SocketGateway);
    private checkVariableTypeNumber;
    refreshData(): void;
}
