import { Scada3DService } from './scada_3D.service';
export declare class Scada3DController {
    private readonly scada3DService;
    constructor(scada3DService: Scada3DService);
    getData(): Promise<any>;
    insert3D(requestBody: any): Promise<any>;
    update3D(requestBody: any): Promise<any>;
    delete3D(requestBody: any): Promise<any>;
}
