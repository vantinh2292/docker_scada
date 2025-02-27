import { AuthDTO } from './dto';
import { Repository } from 'typeorm';
import { UserEntity } from './scada_user.entity';
import { JwtService } from '@nestjs/jwt';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaUserService {
    private readonly userRepository;
    private jwtService;
    private readonly socketGateway;
    private intervalId;
    constructor(userRepository: Repository<UserEntity>, jwtService: JwtService, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<UserEntity[]>;
    signup(userDTO: AuthDTO): Promise<{
        result: string;
        data: {};
        message: any;
    }>;
    signin(userDTO: AuthDTO): Promise<{
        result: string;
        message: string;
        data: {
            _id: string;
            name: string;
            password: string;
            levelUser: number;
            token: string;
        };
    } | {
        result: string;
        message: string;
        data: {
            _id: string;
            name: string;
            password: string;
            levelUser: number;
            arrIdPageAccess: string;
            token: {
                accessToken: string;
            };
        };
    }>;
    signJwtToken(userId: string, name: string, levelUser: number, arrIdPageAccess: string): Promise<{
        accessToken: string;
    }>;
    verify(token: string): Promise<{
        result: string;
        message: string;
        data: {
            name: string;
            levelUser: number;
            arrIdPageAccess: string;
        };
    } | {
        result: string;
        message: string;
        data: {
            name?: undefined;
            levelUser?: undefined;
            arrIdPageAccess?: undefined;
        };
    }>;
    updateUser(updateData: any): Promise<any>;
    deleteUser(_id: string): Promise<any>;
}
