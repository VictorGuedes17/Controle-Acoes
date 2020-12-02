import { Request, Response } from 'express';
import ControlPainel from '../database/Schema/controlPainel';
const authConfig = require('../config/auth');
const jwt = require('jsonwebtoken');


export default class ControlController {

  async Create(req: Request, res: Response): Promise<any> {
    const { papper, amount, inputDate, inputPrice, userUid } = req.body;
    try {
      await ControlPainel.create({ papper, amount, inputDate, inputPrice, userUid });

      return res.json({ success: true });

    } catch (e) {
      console.log("Error : ", e)
      return res.json({ success: false });
    }
  }

  async getPappers(req: Request, res: Response): Promise<any> {
    const { userUid } = req.body;

    try {
      const pappers = await ControlPainel.find({ userUid });
      
      return res.json(pappers);

    } catch (e) {
      console.log("Error : ", e)
      return res.json({ success: false });
    }
  }

  async deletePapper(req: Request, res: Response): Promise<any> {
    const { userUid } = req.body;
    
    try {
      await ControlPainel.deleteOne({ _id: userUid })

      return res.json({ success: true })

    } catch (e) {
      console.log('deletePapper error: ', e)
      return res.json({ success: false })

    }
  }

  async UpdatePapper(req: Request, res: Response): Promise<any> {
    const { papper, amount, inputDate, inputPrice, userUid, saleDate, saleAmout, salePrice, id } = req.body;

    try {
      await ControlPainel.updateOne({ _id: id }, { $set: { papper, amount, inputDate, inputPrice, userUid, saleDate, saleAmout, salePrice, result: (salePrice - inputPrice) } });

      return res.json({ success: true });

    } catch (e) {
      console.log("Error : ", e)
      return res.json({ success: false });
    }
  }
}