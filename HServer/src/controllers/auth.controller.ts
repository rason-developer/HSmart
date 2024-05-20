import express from 'express';
import User from '../models/User';
import mongoose from 'mongoose';
import { JWT_SECRET } from '../utils/constants';


const JWT_SECRET_KEY = JWT_SECRET;

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

export const login = async (req: express.Request, res: express.Response) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(401).send("Missing information...");
        }
        const user = await User.findOne({email});

    }catch(err) {
        return res.status(401).send(err);
    }
}

