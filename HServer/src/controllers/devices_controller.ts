import express from 'express';


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
    res.send("single device get");
}

//  update device info
export const device_put = async(req:express.Request, res:express.Response) => {
    res.send("device_put");
}

export const device_delete = async(req:express.Request, res:express.Response) => {
    res.send("device delete");
}

