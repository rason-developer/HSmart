import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../utils/constants';
import express from 'express';
import User from "../models/User";


export const authenticateJWT = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(403).send('Access denied. No token provided.');
    }

    try {
        jwt.verify(token, JWT_SECRET);
        next();
    } catch (error) {
        return res.status(403).send('Invalid token.');
    }
};


export const authorizeRoles = (...roles: string[]) => {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const token = req.header('Authorization')?.split(' ')[1];
        if (!token) {
            return res.status(403).send('Access denied. No token provided.');
        }

        try {
            const decodedToken = jwt.verify(token, JWT_SECRET) as { roles: string[] };
            const userRoles = decodedToken.roles;

            if (!userRoles || !roles.some(role => userRoles.includes(role))) {
                return res.status(403).send('Access denied. Insufficient privileges.');
            }

            next();
        } catch (error) {
            return res.status(403).send('Invalid token.');
        }
    };
};