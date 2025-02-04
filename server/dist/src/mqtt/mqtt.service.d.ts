import { OnModuleInit } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
export declare class MqttService implements OnModuleInit {
    private readonly configService;
    private static mqttClient;
    constructor(configService: ConfigService);
    onModuleInit(): void;
    private initializeMqttClient;
    publish(topic: string, payload: string): string;
}
