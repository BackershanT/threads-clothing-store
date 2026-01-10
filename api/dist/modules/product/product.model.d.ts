import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    name: string;
    description: string;
    images: string[];
    category: mongoose.Types.ObjectId;
    basePrice: number;
    slug: string;
    model3dUrl?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    description: string;
    images: string[];
    category: mongoose.Types.ObjectId;
    basePrice: number;
    slug: string;
    model3dUrl?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name: string;
    description: string;
    images: string[];
    category: mongoose.Types.ObjectId;
    basePrice: number;
    slug: string;
    model3dUrl?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name: string;
    description: string;
    images: string[];
    category: mongoose.Types.ObjectId;
    basePrice: number;
    slug: string;
    model3dUrl?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    name: string;
    description: string;
    images: string[];
    category: mongoose.Types.ObjectId;
    basePrice: number;
    slug: string;
    model3dUrl?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    name: string;
    description: string;
    images: string[];
    category: mongoose.Types.ObjectId;
    basePrice: number;
    slug: string;
    model3dUrl?: string | null;
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
        name: string;
        description: string;
        images: string[];
        category: mongoose.Types.ObjectId;
        basePrice: number;
        slug: string;
        model3dUrl?: string | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        name: string;
        description: string;
        images: string[];
        category: mongoose.Types.ObjectId;
        basePrice: number;
        slug: string;
        model3dUrl?: string | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    description: string;
    images: string[];
    category: mongoose.Types.ObjectId;
    basePrice: number;
    slug: string;
    model3dUrl?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    description: string;
    images: string[];
    category: mongoose.Types.ObjectId;
    basePrice: number;
    slug: string;
    model3dUrl?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=product.model.d.ts.map