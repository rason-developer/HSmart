import mongoose, { Document, Schema } from 'mongoose';

interface IDevice extends Document {
    name: string;
    type: string;
    configurationID: mongoose.Types.ObjectId;
    eventsId: mongoose.Types.ObjectId;
    stateId: mongoose.Types.ObjectId;
}

const deviceSchema = new Schema<IDevice>({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    configurationID: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    eventsId: {
        type: Schema.Types.ObjectId,
        required: false, //TODO requireds to True
    },
    stateId: {
        type: Schema.Types.ObjectId,
        required: false,
    },
}, {
    timestamps: true,  // Automatically manages `createdAt` and `updatedAt`
});

const Device = mongoose.model<IDevice>('Device', deviceSchema);

export default Device;
