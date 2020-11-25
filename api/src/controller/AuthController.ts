import { Request, Response } from 'express';
import { Auth } from '../models/Auth';
import User from '../database/Schema/user';
const mongoose = require('mongoose')
const authConfig = require('../config/auth');
const jwt = require('jsonwebtoken');

const generateToken = (params = {}) => {
  return jwt.sign(params, authConfig.secret, {
      expiresIn: 86400,
  })
}

export default class AuthController {

  async Login(req: Request, res: Response): Promise<any> {
    console.log("bateu")
    const { email, password } = req.body;
    try {
      const user: any[] = await User.find ({ email: email, password: password });

      if(!user.length){
        return res.json({
          success: false,
          message: 'Usuário ou senha incorretos'
        })
      }
      else{
        return res.json({
          success: true,
          user,
          token: generateToken({ id: user.id }),
        })
      }      
    } catch (e) {
      console.log("Error : ", e)
      return res.json({ success: false });
    }

  }

  async Register(req: Request, res: Response): Promise<any> {
    const userObject: Auth = req.body;
    try {
      const user = await User.create(userObject);
      return res.json({
        user,
        token: generateToken({ id: user.id })
      })

    } catch (e) {
      return res.json({ error: e })
    }

  }

}