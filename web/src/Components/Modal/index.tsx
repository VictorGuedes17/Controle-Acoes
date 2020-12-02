import React from 'react';
import { Modal } from "react-bootstrap";
import { FormControl } from '../FormControl';

interface Props{
  open: boolean;
  close: any;
  isEditting: boolean;
  data?: any;
}

const DefaultModal:React.FC<Props> = props => {
  const { open, close, isEditting, data } = props;
  return (
    <>
      <Modal show={open} onHide={() => close()}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Ação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <FormControl isEditting={isEditting} close={() => close()} data={data}/>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default DefaultModal;