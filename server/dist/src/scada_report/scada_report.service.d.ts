import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ReportEntity } from './scada_report.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaReportService implements OnModuleInit {
    private readonly reportRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(reportRepository: Repository<ReportEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    private checkVariableTypeNumber;
    getData(): Promise<any>;
    insert(reportData: any): Promise<any>;
    update(updateData: any): Promise<any>;
    delete(reportId: string): Promise<any>;
}
