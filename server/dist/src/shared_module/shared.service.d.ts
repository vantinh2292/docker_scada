export declare class SharedService {
    private checkVariableTypeNumber;
    private isObject;
    private sanitizeVariableName;
    Scada_Number_Return(idDevice: number, typeDevice: string, dataType: string, negative: number, tag: string, _id: string, round: number, swapHighLow: boolean): number;
    Scada_Bit_Return(idDevice: number, typeDevice: string, dataType: string, tag: string, _id: string): number;
    Scada_Number_Add(idDevice: number, typeDevice: string, dataType: string, negative: number, tag: string, _id: string): void;
    Scada_Bit_Add(idDevice: number, typeDevice: string, dataType: string, tag: string, _id: string): void;
    Scada_String_Add(idDevice: number, typeDevice: string, dataType: string, numberCharacter: number, tag: string, _id: string): void;
}
