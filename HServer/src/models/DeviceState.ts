import mongoose, { Document, ObjectId, Schema } from 'mongoose';


interface IDeviceState extends Document {
    state: string,
    deviceID: ObjectId
}

const deviceStateSchema = new Schema<IDeviceState>({
    state: {
        type:String,
        required: true,
    },
    deviceID: {
        type:mongoose.Schema.ObjectId,
        required: true,
    }

}, {
    timestamps: true,
});

const DeviceState = mongoose.model<IDeviceState>("DeviceState", deviceStateSchema);

export default DeviceState;