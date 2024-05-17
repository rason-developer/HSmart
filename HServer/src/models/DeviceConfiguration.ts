import mongoose, { Document, ObjectId, Schema } from 'mongoose';


interface IDeviceConfiguration extends Document {
    DeviceID: ObjectId,
    ScheduleID:ObjectId,
    threshold:number,
    notifications:boolean,

}

const deviceConfigurationSchema = new Schema<IDeviceConfiguration>({
    DeviceID: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    ScheduleID: {
        type: mongoose.Types.ObjectId, required: true,
    },
    threshold: {
        type: Number,
        required: true,
    },
    notifications: {
        type: Boolean,
        required: true,
    }
},{
    timestamps: true,
});

const DeviceConfiguration =  mongoose.model<IDeviceConfiguration>("DeviceConfiguration", deviceConfigurationSchema);
export default DeviceConfiguration;