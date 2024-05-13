import express from 'express';

export const testController= async (req:express.Request, res:express.Response) => {
    res.send("This is a test File and its working.")
}

