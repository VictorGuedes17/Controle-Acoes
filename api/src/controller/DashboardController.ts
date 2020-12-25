import { Request, Response } from 'express';
import ControlPainel from '../database/Schema/controlPainel';
import { Control } from '../models/Control'
import * as _ from 'lodash';
import moment from 'moment';

export default class DashboardController {
  
  async getHigherProfits(req: Request, res: Response): Promise<any> {
    const { userUid } = req.body;

    try {
      const pappers: Control[] = await ControlPainel.find({ userUid });

      for(let papper of pappers) {
        papper.result = papper.result * papper.saleAmout;
      }

      const higher = _.orderBy(pappers, ['result','papper'],['desc','desc']);

      let higherProfits = [];
      if(higher.length > 5){
        for(let x=0; x < 5; x++){
          higherProfits.push(higher[x]);
        }
      }
      else {
        higherProfits = higher;
      }

      return res.json(higherProfits);

    } catch (e) {
      console.log("Error : ", e)
      return res.json({ success: false });
    }
  }

  async getHigherLoss(req: Request, res: Response): Promise<any> {
    const { userUid } = req.body;

    try {
      const pappers: Control[] = await ControlPainel.find({ userUid });

      for(let papper of pappers) {
        papper.result = Math.abs(papper.result * papper.saleAmout);
      }

      const higher = _.orderBy(pappers, ['result','papper'],['asc','desc']);

      let higherLoss = [];
      if(higher.length > 5){
        for(let x=0; x < 5; x++){
          higherLoss.push(higher[x]);
        }
      }
      else {
        higherLoss = higher;
      }

      return res.json(higherLoss);

    } catch (e) {
      console.log("Error : ", e)
      return res.json({ success: false });
    }
  }

  async getEvolutionData(req: Request, res: Response): Promise<any> {
    const { userUid } = req.body;

    try {
      const pappers: Control[] = await ControlPainel.find({ userUid });

      for(let papper of pappers) {
        papper.result = Math.abs(papper.result * papper.saleAmout);
      }

      const orderArr = _.orderBy(pappers, ['inputDate','papper'],['asc','desc']);
      let data = [];
      
      _.each(orderArr,(papper: Control) => {
        const x =papper.inputDate;
        const y = papper.result;
        data.push({ x: x , y: y });
      });

      return res.json(data);

    } catch (e) {
      console.log("Error : ", e)
      return res.json({ success: false });
    }
  }

}