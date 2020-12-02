import React, { useEffect, useState } from 'react';
import { getData } from '../../Common/storage';
import { requestAPI } from '../../Config/constants';
import { useRefreshTable } from '../../Context/auth';
import { SimpleButton } from '../SimpleButton';
import { SimpleFormInput } from '../SimpleInput';
import moment from 'moment';

interface Props {
  isEditting: boolean;
  close: any;
  data?: any;
}

export const FormControl: React.FC<Props> = props => {
  const { isEditting, close, data } = props;

  const [ papper, setPapper ] = useState<string>(data ? data.papper : "");
  const [ amountBuy, setAmountBuy ] = useState<number>(data ? data.amount : "");
  const [ dateBuy, setDateBuy ] = useState<number>(data ? data.inputDate : "");
  const [ priceBuy, setPriceBuy ] = useState<number>(data ? data.inputPrice : "");
  const [ dateSell, setDateSell ] = useState<number>();
  const [ amountSell, setAmountSell ] = useState<number>();
  const [ priceSell, setPriceSell ] = useState<number>();

  const userData = getData('user');
  const userUid = userData[0] && userData[0]._id || "";

  const { refresh, setRefresh } = useRefreshTable();

  async function savePapper(){

    let papperObject: any = {}

    if(isEditting === false){
      papperObject = {
        papper: papper,
        amount : amountBuy,
        inputDate: moment(dateBuy).valueOf(),
        inputPrice: priceBuy,
        userUid: userUid        
      }
    }
    else{
      papperObject = {
        papper: papper,
        amount : amountBuy,
        inputDate: moment(dateBuy).valueOf(),
        inputPrice: priceBuy,
        userUid: userUid,
        saleDate: moment(dateSell).valueOf(),
        saleAmout: amountSell,
        salePrice: priceSell,
        id: data ? data._id : ""
      }
    }

      const url = isEditting ? 'updatePapper' : 'create';
      console.log(url)
      const response = await requestAPI({
        params: `/control/${url}`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: papperObject
      });

      const { success } = response;
      if(success){
        setRefresh(true);
        close();
      }
      else{
        alert("ERRO NAO ESPCEIFICADO")
      }
    }
  
  return (
    <>
      <div style={{display: "grid"}}>
        <SimpleFormInput
          placeholder="Ex: PETR4"
          disable={isEditting ? true : false}
          label={"Ação"}
          type={"text"}
          value={data ? data.papper : papper}
          onChange={(e: any) => setPapper(e.target.value)}
        />
         <SimpleFormInput
          placeholder="Ex: 100 (Ref a 1 Lote)"
          disable={isEditting ? true : false}
          label={"Quantidade"}
          type={"text"}
          value={data ? data.amount : amountBuy}
          onChange={(e: any) => setAmountBuy(e.target.value)}
        />
        <SimpleFormInput
          placeholder=""
          disable={isEditting ? true : false}
          label={"Data de Entrada"}
          type={"date"}
          value={data ? data.inputDate : dateBuy}
          onChange={(e: any) => setDateBuy(e.target.value)}
        />
        <SimpleFormInput
          placeholder="ex: 12.50"
          disable={isEditting ? true : false}
          label="Preço de Entrada"
          type="number"
          step="0.01"
          min="0.00"
          value={data ? data.inputPrice : priceBuy}
          onChange={(e: any) => setPriceBuy(e.target.value)}
        />
        <SimpleFormInput
          placeholder=""
          disable={isEditting ? false : true}
          label={"Data de Saída"}
          type={"date"}
          value={data ? data.saleDate : ""}
          onChange={(e: any) => setDateSell(e.target.value)}
        />
        <SimpleFormInput
          placeholder="Ex: 100 (Ref a 1 Lote)"
          disable={isEditting ? false : true}
          label={"Quantidade Vendida"}
          type={"text"}
          value={data ? data.saleAmout : ""}
          onChange={(e: any) => setAmountSell(e.target.value)}
        />
        <SimpleFormInput
          placeholder="ex: 12.50"
          disable={isEditting ? false : true}
          label="Preço de Venda"
          type="number"
          step="0.01"
          min="0.00"
          value={data ? data.salePrice : ""}
          onChange={(e: any) => setPriceSell(e.target.value)}
        />
       <SimpleButton label={"Salvar"} onClick={() => savePapper()} />
      </div>
    </>
  )
}