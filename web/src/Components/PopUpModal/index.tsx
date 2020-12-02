import React from 'react';
import { Modal } from "react-bootstrap";
import { requestAPI } from '../../Config/constants';
import { useRefreshTable } from '../../Context/auth';
import { FormControl } from '../FormControl';
import './style.css';

interface Props{
  open: boolean;
  close: any;
  text: string;
  uid: any;
}

const PopUpModal:React.FC<Props> = props => {
  const { open, close, text, uid } = props;

  const { refresh, setRefresh } = useRefreshTable();

  async function deletePapper(){
    console.log("EXECUTANDO")
    const response = await requestAPI({
      params: `/control/deletePapper`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        userUid: uid
      }
    });
    
    const { success } = response;
    if(success) {
      setRefresh(true);
      close();
    }
    else{
      alert("Erro nao esperado");
    }
  }

  return (
    <>
      <Modal show={open} onHide={() => close()}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Ação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {text}
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center" }}>
          <button className="cancelButton" onClick={() => close()}>Cancelar</button>
          <button className="confirmButton" onClick={() => deletePapper()}>Confirmar</button>
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default PopUpModal;