import mongoose, { Document, ObjectId, Schema } from 'mongoose';


interface IDeviceEvent extends Document {
    type: string,
    deviceId: ObjectId
}

const deviceEventSchema = new Schema<IDeviceEvent>({
    type: {
        type: String,
        required: true,
    },
    deviceId: {
        type: mongoose.Types.ObjectId,
        required: true,
    }

}, {
    timestamps: true,
});

const DeviceEvent = mongoose.model<IDeviceEvent>('deviceEvent',deviceEventSchema);

export default DeviceEvent;