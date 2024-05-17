import express from 'express';
import mongoose from 'mongoose';

const validateObjectId = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ error: 'Invalid ID format' });
    }

    next();
};

export default validateObjectId;
