import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaSetupAlarmRefreshService {
    private readonly socketGateway;
    private intervalId;
    private oldArrActiveAlarm;
    constructor(socketGateway: SocketGateway);
    onModuleInit(): void;
    refreshData(): void;
}
