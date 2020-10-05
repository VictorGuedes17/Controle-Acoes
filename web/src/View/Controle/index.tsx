import React, { useState } from 'react';
import './styles.css'
import Header from '../../Components/Navbar'
import Table from 'react-bootstrap/esm/Table';
import { Icons } from '../../Assets/Icons';

const Controle = () => {

    return (
        <>
            <Header />
            <div className="row-md-12 mt-5">
            </div>
            <div className="d-flex row-lg-12 row-md-12 row-sm-12">
                <div className="d-flex col-lg-12 col-md-12 col-sm-12 h-100 ml-5">
                    <div className="">
                        <Table striped borderless hover size="lg">
                            <thead>
                                <tr>
                                    <th className="text-center">Ação</th>
                                    <th className="text-center">Lote</th>
                                    <th className="text-center" >Data de Entrada</th>
                                    <th className="text-center">Preço de Entrada</th>
                                    <th className="text-center">Data de Saida</th>
                                    <th className="text-center">Lotes de Saida</th>
                                    <th className="text-center">Preço de Saida</th>
                                    <th className="text-center">Cotacao Atual</th>
                                    <th className="text-center">Resultado</th>
                                    <th className="text-center">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td className="text-success">@mdo</td>
                                    <td>
                                        <img
                                            className="tableIcon"
                                            src={Icons.edit}
                                        />
                                        <img
                                            className="tableIcon"
                                            src={Icons.delete}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td className="text-success">@mdo</td>
                                    <td>
                                        <img
                                            className="tableIcon"
                                            src={Icons.edit}
                                        />
                                        <img
                                            className="tableIcon"
                                            src={Icons.delete}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td className="text-danger">@mdo</td>
                                    <td>
                                        <img
                                            className="tableIcon"
                                            src={Icons.edit}
                                        />
                                        <img
                                            className="tableIcon"
                                            src={Icons.delete}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>

        </>
    )

}

export default Controle