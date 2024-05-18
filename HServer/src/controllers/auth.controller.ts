import express from 'express';
import User from '../models/User';
import mongoose from 'mongoose';

export const register = async (req: express.Request, res: express.Response) => {
    try {
        const {username, email, passwordHash} = req.body;
        if (!username || !email || !passwordHash) {
            return res.status(400).send("Missing information...");
        }
        // TODO middleware to check username, email and  JWT password
        const newUser = new User({
            username,
            email,
            passwordHash,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        const saveUser = await newUser.save();
        return res.status(200).send(saveUser);
    }catch (err) {
        res.status(400).send(err);
    }
}

