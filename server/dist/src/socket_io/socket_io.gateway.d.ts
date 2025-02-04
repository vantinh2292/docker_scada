import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MqttService } from '../mqtt/mqtt.service';
export declare class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly mqttService;
    constructor(mqttService: MqttService);
    server: Server;
    handleConnection(client: Socket, ...args: any[]): void;
    handleDisconnect(client: Socket): void;
    handleMessage(client: any, payload: any): void;
}
