import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entities/User';

export const signup = async (req: Request, res: Response) => {
  const { username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = AppDataSource.getRepository(User).create({ username, password: hashedPassword, role });
  await AppDataSource.getRepository(User).save(user);
  res.status(201).json({ message: 'User registered' });
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await AppDataSource.getRepository(User).findOneBy({ username });
  if (!user) return res.status(404).json({ message: 'User not found' });
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET!);
  res.json({ token, role: user.role });
};
