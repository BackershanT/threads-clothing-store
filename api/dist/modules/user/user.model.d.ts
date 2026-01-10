import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    password: string;
    role: "USER" | "ADMIN";
    resetPasswordToken?: string | null;
    resetPasswordExpires?: NativeDate | null;
    name?: string | null;
    email?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    password: string;
    role: "USER" | "ADMIN";
    resetPasswordToken?: string | null;
    resetPasswordExpires?: NativeDate | null;
    name?: string | null;
    email?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    password: string;
    role: "USER" | "ADMIN";
    resetPasswordToken?: string | null;
    resetPasswordExpires?: NativeDate | null;
    name?: string | null;
    email?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    password: string;
    role: "USER" | "ADMIN";
    resetPasswordToken?: string | null;
    resetPasswordExpires?: NativeDate | null;
    name?: string | null;
    email?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    password: string;
    role: "USER" | "ADMIN";
    resetPasswordToken?: string | null;
    resetPasswordExpires?: NativeDate | null;
    name?: string | null;
    email?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    password: string;
    role: "USER" | "ADMIN";
    resetPasswordToken?: string | null;
    resetPasswordExpires?: NativeDate | null;
    name?: string | null;
    email?: string | null;
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
        password: string;
        role: "USER" | "ADMIN";
        resetPasswordToken?: string | null;
        resetPasswordExpires?: NativeDate | null;
        name?: string | null;
        email?: string | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        password: string;
        role: "USER" | "ADMIN";
        resetPasswordToken?: string | null;
        resetPasswordExpires?: NativeDate | null;
        name?: string | null;
        email?: string | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    password: string;
    role: "USER" | "ADMIN";
    resetPasswordToken?: string | null;
    resetPasswordExpires?: NativeDate | null;
    name?: string | null;
    email?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    password: string;
    role: "USER" | "ADMIN";
    resetPasswordToken?: string | null;
    resetPasswordExpires?: NativeDate | null;
    name?: string | null;
    email?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=user.model.d.ts.map