import express from 'express';
import User from '../models/User';
import mongoose from 'mongoose';
import { JWT_SECRET } from '../utils/constants';
import { generateToken } from '../utils/jwt_generator';


const JWT_SECRET_KEY = JWT_SECRET;


export const register = async (req: express.Request, res: express.Response) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).send("Missing information...");
        }

        const newUser = new User({
            username,
            email,
            passwordHash: password,
        });

        const savedUser = await newUser.save();
        return res.status(200).send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
};

export const login = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).send("Missing information...");
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send("Invalid email or password.");
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).send("Invalid email or password.");
        }

        const token = generateToken(user);
        return res.status(200).send({ token });
    } catch (err) {
        return res.status(401).send(err);
    }
};


