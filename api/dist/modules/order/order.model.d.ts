import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    }> & {
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    }>;
    status: "PENDING" | "PAID" | "SHIPPED" | "DELIVERED" | "CANCELLED";
    totalAmount?: number | null;
    paymentId?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    }> & {
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    }>;
    status: "PENDING" | "PAID" | "SHIPPED" | "DELIVERED" | "CANCELLED";
    totalAmount?: number | null;
    paymentId?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    }> & {
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    }>;
    status: "PENDING" | "PAID" | "SHIPPED" | "DELIVERED" | "CANCELLED";
    totalAmount?: number | null;
    paymentId?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    }> & {
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    }>;
    status: "PENDING" | "PAID" | "SHIPPED" | "DELIVERED" | "CANCELLED";
    totalAmount?: number | null;
    paymentId?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    }> & {
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    }>;
    status: "PENDING" | "PAID" | "SHIPPED" | "DELIVERED" | "CANCELLED";
    totalAmount?: number | null;
    paymentId?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    }> & {
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    }>;
    status: "PENDING" | "PAID" | "SHIPPED" | "DELIVERED" | "CANCELLED";
    totalAmount?: number | null;
    paymentId?: string | null;
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
        userId: mongoose.Types.ObjectId;
        items: mongoose.Types.DocumentArray<{
            variantId: mongoose.Types.ObjectId;
            price?: number | null;
            quantity?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            variantId: mongoose.Types.ObjectId;
            price?: number | null;
            quantity?: number | null;
        }> & {
            variantId: mongoose.Types.ObjectId;
            price?: number | null;
            quantity?: number | null;
        }>;
        status: "PENDING" | "PAID" | "SHIPPED" | "DELIVERED" | "CANCELLED";
        totalAmount?: number | null;
        paymentId?: string | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        userId: mongoose.Types.ObjectId;
        items: mongoose.Types.DocumentArray<{
            variantId: mongoose.Types.ObjectId;
            price?: number | null;
            quantity?: number | null;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            variantId: mongoose.Types.ObjectId;
            price?: number | null;
            quantity?: number | null;
        }> & {
            variantId: mongoose.Types.ObjectId;
            price?: number | null;
            quantity?: number | null;
        }>;
        status: "PENDING" | "PAID" | "SHIPPED" | "DELIVERED" | "CANCELLED";
        totalAmount?: number | null;
        paymentId?: string | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    } | {
        variantId: string;
        price?: number | null;
        quantity?: number | null;
        _id: string;
    }, mongoose.Types.Subdocument<string | mongoose.mongo.BSON.ObjectId, unknown, {
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    } | {
        variantId: string;
        price?: number | null;
        quantity?: number | null;
        _id: string;
    }> & ({
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    } | {
        variantId: string;
        price?: number | null;
        quantity?: number | null;
        _id: string;
    })>;
    status: "PENDING" | "PAID" | "SHIPPED" | "DELIVERED" | "CANCELLED";
    totalAmount?: number | null;
    paymentId?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: mongoose.Types.ObjectId;
    items: mongoose.Types.DocumentArray<{
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    } | {
        variantId: string;
        price?: number | null;
        quantity?: number | null;
        _id: string;
    }, mongoose.Types.Subdocument<string | mongoose.mongo.BSON.ObjectId, unknown, {
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    } | {
        variantId: string;
        price?: number | null;
        quantity?: number | null;
        _id: string;
    }> & ({
        variantId: mongoose.Types.ObjectId;
        price?: number | null;
        quantity?: number | null;
    } | {
        variantId: string;
        price?: number | null;
        quantity?: number | null;
        _id: string;
    })>;
    status: "PENDING" | "PAID" | "SHIPPED" | "DELIVERED" | "CANCELLED";
    totalAmount?: number | null;
    paymentId?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=order.model.d.ts.map