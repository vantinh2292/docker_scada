import { ScadaCameraStreamService } from './scada_camera_stream.service';
export declare class ScadaCameraStreamController {
    private readonly scadaCameraStreamService;
    constructor(scadaCameraStreamService: ScadaCameraStreamService);
    getData(): Promise<any>;
    insertCameraStream(requestBody: any): Promise<any>;
    updateCameraStream(requestBody: any): Promise<any>;
    deleteCameraStream(requestBody: any): Promise<any>;
}
