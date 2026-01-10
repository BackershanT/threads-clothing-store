import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    productId: mongoose.Types.ObjectId;
    size: string;
    color: string;
    stock: number;
    price: number;
    fabric?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    productId: mongoose.Types.ObjectId;
    size: string;
    color: string;
    stock: number;
    price: number;
    fabric?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    productId: mongoose.Types.ObjectId;
    size: string;
    color: string;
    stock: number;
    price: number;
    fabric?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    productId: mongoose.Types.ObjectId;
    size: string;
    color: string;
    stock: number;
    price: number;
    fabric?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    productId: mongoose.Types.ObjectId;
    size: string;
    color: string;
    stock: number;
    price: number;
    fabric?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    productId: mongoose.Types.ObjectId;
    size: string;
    color: string;
    stock: number;
    price: number;
    fabric?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        productId: mongoose.Types.ObjectId;
        size: string;
        color: string;
        stock: number;
        price: number;
        fabric?: string | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        productId: mongoose.Types.ObjectId;
        size: string;
        color: string;
        stock: number;
        price: number;
        fabric?: string | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    productId: mongoose.Types.ObjectId;
    size: string;
    color: string;
    stock: number;
    price: number;
    fabric?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    productId: mongoose.Types.ObjectId;
    size: string;
    color: string;
    stock: number;
    price: number;
    fabric?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=variant.model.d.ts.map