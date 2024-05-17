import mongoose, {Document, Schema} from 'mongoose';


interface IUser extends Document {
    username: string,
    email: string,
    passwordHash: string
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required:true
    }

}, {
    timestamps: true,
});

const User =  mongoose.model<IUser>("User", userSchema);
export default User;