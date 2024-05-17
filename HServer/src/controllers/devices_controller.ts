import express from 'express';
import Device from '../models/Device';


// get devices
export const devices_get = async (req:express.Request, res:express.Response) => {
    res.send("devices_Get");
}

// add new device
export const devices_post = async(req:express.Request, res:express.Response) => {
    res.send("devices_post");
}

// retrieve info for a device
export const single_device_get = async(req:express.Request, res:express.Response) => {
    res.send(`single device get ${req.params.id}`);
}

//  update device info
export const device_put = async(req:express.Request, res:express.Response) => {
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
    res.send(`device delete ${req.params.id}`);
}

