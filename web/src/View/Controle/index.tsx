import React, { useState } from 'react';
import './styles.css'
import Header from '../../Components/Navbar'
import { Icons } from '../../Assets/Icons';
import TableContent from '../../Components/Table';
import DefaultModal from '../../Components/Modal';

const Controle = () => {
    const [open, setOpen] = useState(false);

    const renderModal = () => {
        return(
            <DefaultModal open={open} close={() => setOpen(false)} />
        )
    }

    return (
        <>
            <Header />
            <div className="col-lg-12 mt-2 h-75 p-5">
                <div className="row-lg-1 d-flex align-itens-start justify-content-center">
                <button className="btnAdd" onClick={() => setOpen(true)}>Adicionar</button>
                </div>
                <div className="row-lg-11">
                    <TableContent />
                </div>
            </div>
            <div className="row-md-12 mt-5">
                <div className="d-flex col-lg-12 col-md-12 col-sm-12 h-100 ml-5">
                    <div className="">

                    </div>
                </div>
            </div>
            {renderModal()}
        </>
    )

}

export default Controle