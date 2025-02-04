import { SystemApiService } from './system_api.service';
export declare class SystemApiController {
    private readonly systemApiService;
    constructor(systemApiService: SystemApiService);
    responsesocket(): {
        PORT: number;
    };
}
