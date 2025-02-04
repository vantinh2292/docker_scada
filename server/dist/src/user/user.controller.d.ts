import { Request } from 'express';
interface CustomRequest extends Request {
    user?: any;
}
export declare class UserController {
    me(request: CustomRequest): any;
}
export {};
