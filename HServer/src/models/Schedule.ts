import mongoose, {Document, ObjectId, Schema} from 'mongoose';


interface ISchedule extends Document {
    deviceID : ObjectId,
    actionType : string,
    timingDetails: StorageManager,
    eventsID: ObjectId,
};


const scheduleSchema = new Schema<ISchedule>({
    deviceID:{
        type: mongoose.Types.ObjectId,
        required: true,
    },
    actionType:{
        type: String,
        required: true,
    },
    timingDetails:{
        type: String,
        required:true,
    },
    eventsID:{
        type: mongoose.Types.ObjectId,
        required:true
    }

});


const Schedule = mongoose.model<ISchedule>("Schedule", scheduleSchema);

export default Schedule;
