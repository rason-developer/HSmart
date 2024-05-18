import express from 'express';
import mongoose from 'mongoose';
import DeviceSchedule from '../models/DeviceSchedule';
import User from '../models/User';

export const schedule_get = async(req:express.Request,res: express.Response) => {
    try {
        const userID = req.body.id;
        if (!mongoose.Types.ObjectId.isValid(userID)) {
            return res.status(400).send("User Id is not valid");
        }
        if (! await User.findById(userID) ) {
            return res.status(401).send("User not found");
        }
        const schedules = await DeviceSchedule.find({userID})
        if (!schedules) {
            return res.status(401).send("No schedules found!");
        }
        return res.status(200).send(schedules);
    }catch(err) {
        res.status(403).send(err);
    }
}

// TODO change id device to id user.