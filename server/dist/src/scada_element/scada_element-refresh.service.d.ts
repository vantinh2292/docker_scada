import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaElementRefreshService {
    private readonly socketGateway;
    constructor(socketGateway: SocketGateway);
    refreshData(): void;
}
