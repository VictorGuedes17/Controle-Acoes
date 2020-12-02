import React, { useEffect, useState } from 'react';
import { Icons } from '../../Assets/Icons';
import './style.css';
import Table from 'react-bootstrap/esm/Table';
import DefaultModal from '../Modal';
import PopUpModal from '../PopUpModal';
import moment from 'moment';

interface Props {
    data: any[];
}



const TableContent: React.FC<Props> = props => {
    const { data } = props;
    const [open, setOpen] = useState(false);
    const [openPopUp, setOpenPopUp] = useState(false);
    const [isEditting, setIsEditting] = useState(false);
    const [currentPapper, setCurrentPapper] = useState<string>('');
    const [currentId, setCurrentId] = useState<String>('');
    const [currentData, setCurrentData] = useState<any>();

    const renderModal = () => {
        return (
            <DefaultModal open={open} isEditting={isEditting} close={() => setOpen(false)} data={currentData} />
        )
    }

    const renderPopUp = () => {
        const popUpText = `Deseja realmente apagar a ação de codigo - ${currentPapper}`;
        return (
            <PopUpModal open={openPopUp} text={popUpText} close={() => setOpenPopUp(false)} uid={currentId} />
        )
    }

    const openModal = (isEditting: boolean, data?: any) => {
        setIsEditting(isEditting);
        setOpen(true);
        setCurrentData(data);
    }

    function deleteAction(papper: string, id: string) {
        setCurrentId(id);
        setCurrentPapper(papper);
        setOpenPopUp(true);
    }

    return (
        <>
            <div className="row-lg-1 d-flex align-itens-start justify-content-center">
                <button className="btnAdd" onClick={() => openModal(false)}>Adicionar</button>
            </div>
            <Table striped borderless hover size="lg">
                <thead>
                    <tr>
                        <th className="">Ação</th>
                        <th className="">Lotes</th>
                        <th className="" >Data da Compra</th>
                        <th className="">Preço</th>
                        <th className="">Data de Venda</th>
                        <th className="">Lotes</th>
                        <th className="">Preço de Venda</th>
                        <th className="">Resultado</th>
                        <th className="">#</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? data.map((row: any, index: any) => {
                        //    const currentPrice = await getCurrentPrice(row.papper);
                        return (
                            <tr key={index}>
                                <td>{row.papper}</td>
                                <td>{row.amount}</td>
                                <td>{moment(row.inputDate).format("DD/MM/YYYY")}</td>
                                <td>{row.inputPrice}</td>
                                <td>{row.saleDate ? moment(row.saleDate).format("DD/MM/YYYY") : ""}</td>
                                <td>{row.saleAmout}</td>
                                <td>{row.salePrice}</td>
                                <td>
                                <span className={row.result > 0 ? "text-success" : "text-danger"}>
                                {row.result ? row.result * row.saleAmout : ""}
                                </span>
                                </td>
                                <td>
                                    <img
                                        className="tableIcon"
                                        src={Icons.edit}
                                        onClick={() => openModal(true, row)}
                                    />
                                    <img
                                        className="tableIcon"
                                        src={Icons.delete}
                                        onClick={() => deleteAction(row.papper, row._id)}
                                    />
                                </td>
                            </tr>)
                    }) : <></>}
                </tbody>
            </Table>
            {renderModal()}
            {renderPopUp()}
        </>

    );

}

export default TableContent;