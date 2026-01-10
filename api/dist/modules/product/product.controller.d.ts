import { Request, Response } from "express";
export declare const createProduct: (req: Request, res: Response) => Promise<void>;
export declare const getProducts: (_: Request, res: Response) => Promise<void>;
export declare const getProductBySlug: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=product.controller.d.ts.map