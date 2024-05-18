import mongoose from "mongoose";
import User from "../models/User";
import express from "express";

export const user_get = async (req:express.Request, res:express.Response) => {
    try {
        const userID = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(userID)) {
            return res.status(402).send("ID not valid...");
        }

        const user = await User.findById(userID);
        if (!user) {
            return res.status(401).send("User not found");
        }
        return res.status(200).send(user);
    }catch(err) {
        return res.status(400).send(err);
    }

}

export const users_get = async (req:express.Request,res: express.Response) => {
    try {
        const users = await User.find();
        return res.status(200).send(users);
    }catch(err) {
        return res.status(400).send(err);
    }
}