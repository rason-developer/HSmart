import express from 'express';
import Device from '../models/Device';
import mongoose from 'mongoose';
// 66467524401f4fe07297fb33

// get devices
export const devices_get = async (req:express.Request, res:express.Response) => {
    try {
        const devices = await Device.find();
        res.status(200).send(devices);
    }catch(err) {
        res.status(400).send(err);
    }
}

// update  device
export const device_put = async(req:express.Request, res:express.Response) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).send({error: "Invalid ID Format!"});
        }
        const updatedDevice = await Device.findByIdAndUpdate(id, req.body, {new : true, runValidators: true});
        if (!updatedDevice) {
            return res.status(404).send({ error: "Device not found." });
        }

        res.status(200).send(updatedDevice);
    }catch(err) {
        return res.status(400).send(err);
    }
}

// retrieve info for a device
export const single_device_get = async(req:express.Request, res:express.Response) => {
    try {
        const deviceID = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(deviceID)) {
            return res.status(400).send({error:"Invalid ID format"});
        }
        const device = await Device.findById(deviceID);
        if (!device){
            return res.status(400).send("Device not found!");
        }
        res.status(200).send(device);

    }catch(err) {
        return res.status(400).send({error:"Something went wrong..."});
    }
}

//  add new device
export const devices_post = async(req:express.Request, res:express.Response) => {
    try {
        const {name, type} = req.body;

        if (!name || !type) {
            return res.status(400).send({
                error: 'All fields are required'
            });
        }
        const newDevice = new Device({
            name,
            type,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        const savedDevice = await newDevice.save();
        res.status(201).send({savedDevice});
    }catch(err) {
        res.status(400).send("#");
    }
}

export const device_delete = async(req:express.Request, res:express.Response) => {
    try {
        const deviceID  = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(deviceID)) {
           return res.status(400).send({error:"Invalid ID format"});
       }
        const deletedDevice = await Device.findByIdAndDelete(deviceID);
        if (!deletedDevice) {
            return res.status(400).send({error:"Device not found."});
        }
        res.status(200).send({message: "Device deleted successfully"});
    }catch(err) {
        res.status(401).send("Something went wrong...");
    }

}

//TODO Add to remove all remove logic (configuration, state, events)
//TODO Add on creation, event, state, configuration as well

