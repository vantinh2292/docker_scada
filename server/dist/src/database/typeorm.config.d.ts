import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigModule } from "../config/config.module";
import { ConfigService } from "../config/config.service";
export declare const typeOrmConfigAsync: {
    imports: (typeof ConfigModule)[];
    inject: (typeof ConfigService)[];
    useFactory: (configService: ConfigService) => Promise<TypeOrmModuleOptions>;
};
