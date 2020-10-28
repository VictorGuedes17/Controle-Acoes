import React from 'react';
import { Modal } from "react-bootstrap";

interface Props{
  open: boolean;
  close: any;
}

const DefaultModal:React.FC<Props> = props => {
  const { open, close } = props;
  return (
    <>
      <Modal show={open} onHide={() => close()}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Ação</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default DefaultModal;