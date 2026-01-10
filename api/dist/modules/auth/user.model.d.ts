import mongoose from "mongoose";
interface UserDocument extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    role: string;
    resetPasswordToken?: string;
    resetPasswordExpires?: Date;
    isModified(path: string): boolean;
}
declare const _default: mongoose.Model<UserDocument, {}, {}, {}, mongoose.Document<unknown, {}, UserDocument, {}, mongoose.DefaultSchemaOptions> & UserDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, UserDocument>;
export default _default;
//# sourceMappingURL=user.model.d.ts.map