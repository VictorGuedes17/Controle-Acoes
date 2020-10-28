import React from 'react';
import { Icons } from '../../Assets/Icons';
import './style.css';
import Table from 'react-bootstrap/esm/Table';

const TableContent = () => {
    return (
        <>
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
        </>
    );

}

export default TableContent;