import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ChartEntity } from './scada_chart.entity';
import { SocketGateway } from '../socket_io/socket_io.gateway';
export declare class ScadaChartService implements OnModuleInit {
    private readonly chartRepository;
    private readonly socketGateway;
    private intervalId;
    constructor(chartRepository: Repository<ChartEntity>, socketGateway: SocketGateway);
    onModuleInit(): void;
    private setupDataRefreshInterval;
    private fetchDataAndUpdate;
    getData(): Promise<any>;
    insertChart(chartData: any): Promise<any>;
    updateChart(updateData: any): Promise<any>;
    deleteChart(chartId: string): Promise<any>;
}
