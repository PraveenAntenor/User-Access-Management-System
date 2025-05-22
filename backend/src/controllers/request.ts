import { Request as Req, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Request as AccessRequest } from '../entities/Request';
import { User } from '../entities/User';
import { Software } from '../entities/Software';

export const createAccessRequest = async (req: Req, res: Response) => {
  const { softwareId, accessType, reason } = req.body;
  const user = await AppDataSource.getRepository(User).findOneBy({ id: req.user.id });
  const software = await AppDataSource.getRepository(Software).findOneBy({ id: softwareId });
  const accessRequest = AppDataSource.getRepository(AccessRequest).create({ user, software, accessType, reason });
  await AppDataSource.getRepository(AccessRequest).save(accessRequest);
  res.status(201).json(accessRequest);
};

export const updateRequestStatus = async (req: Req, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  const request = await AppDataSource.getRepository(AccessRequest).findOneBy({ id: parseInt(id) });
  if (!request) return res.status(404).json({ message: 'Request not found' });
  request.status = status;
  await AppDataSource.getRepository(AccessRequest).save(request);
  res.json(request);
};