import { OnModuleInit } from '@nestjs/common';
import { ConfigService } from "../config/config.service";
export declare class SystemApiService implements OnModuleInit {
    private readonly configService;
    port: number;
    constructor(configService: ConfigService);
    onModuleInit(): void;
    getPort(): {
        PORT: number;
    };
}
