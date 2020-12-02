import React, { useContext, useEffect, useState } from 'react';
import './styles.css'
import Header from '../../Components/Navbar'
import TableContent from '../../Components/Table';
import { requestAPI } from '../../Config/constants';
import { getData } from '../../Common/storage';
import { useRefreshTable } from '../../Context/auth';



const Controle = () => {
    const [data, setData] = useState([]);
    const userData = getData('user');
    const { refresh, setRefresh } = useRefreshTable();

    useEffect(() => {
        const userUid = userData[0] && userData[0]._id || "";
        if(refresh === false){
        }
        else{
        setRefresh(false);
        (async function getPappers(){
            const response = await requestAPI({
                params: `/control/getPappers`,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: {
                  userUid: userUid
                }
              });

              const controlData = response;
              setData(controlData);
        })()}
    },[refresh === true])
   

     return (
        <>
            <div className="col-lg-12 mt-2 h-75 p-5">
                <div className="row-lg-11">
                    <TableContent data={data} />
                </div>
            </div>
            <div className="row-md-12 mt-5">
                <div className="d-flex col-lg-12 col-md-12 col-sm-12 h-100 ml-5">
                    <div className="">

                    </div>
                </div>
            </div>
        </>
    )

}

export default Controle