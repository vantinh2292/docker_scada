import { Repository } from 'typeorm';
import { UserEntity } from '../scada_user.entity';
import { ConfigService } from "../../config/config.service";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>, configService: ConfigService);
    validate(payload: {
        sub: string;
        name: string;
    }): Promise<UserEntity>;
}
export {};
