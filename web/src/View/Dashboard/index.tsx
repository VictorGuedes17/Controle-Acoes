import React, { useEffect, useState } from 'react';
import { getData } from '../../Common/storage';
import { CardOptions } from '../../Components/CardOptions';
import { LineChart } from '../../Components/Charts/LineChart';
import PieChart from '../../Components/Charts/PieChart';
import { requestAPI } from '../../Config/constants';
import * as _ from 'lodash';
import moment from 'moment';

interface Props {

}

const Dashboard: React.FC<Props> = props => {

  const userData = getData('user');

  const [pieChartDataHigher, setPieChartDataHigher] = useState<any>();
  const [pieChartDataLoss, setPieChartDataLoss] = useState<any>();
  const [lineChartData, setLineChartData] = useState<any>();

  useEffect(() => {
    (async function getPieChartData() {
      await getHigherProfits();
      await getHigherLoss();
      await getEvolutionData();
    })()
  }, [])

  async function getHigherProfits() {
    const userUid = userData[0] && userData[0]._id || "";
    const response = await requestAPI({
      params: `/dashboard/getHigherProfits`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        userUid: userUid
      }
    });

    const higherProfitsData = response;

    const data = [
      {
        id: higherProfitsData[0].papper,
        label: higherProfitsData[0].papper,
        value: higherProfitsData[0].result,
        color: "hsl(19, 70%, 50%)"
      },
      {
        id: higherProfitsData[1].papper,
        label: higherProfitsData[1].papper,
        value: higherProfitsData[1].result,
        color: "hsl(213, 70%, 50%)"
      },
      {
        id: higherProfitsData[2].papper,
        label: higherProfitsData[2].papper,
        value: higherProfitsData[2].result,
        color: "hsl(58, 70%, 50%)"
      }
    ];

    setPieChartDataHigher(data);
  }

  async function getHigherLoss() {
    const userUid = userData[0] && userData[0]._id || "";
    const response = await requestAPI({
      params: `/dashboard/getHigherLoss`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        userUid: userUid
      }
    });

    const higherLossData = response;

    const data = [
      {
        id: higherLossData[0].papper,
        label: higherLossData[0].papper,
        value: higherLossData[0].result,
        color: "hsl(19, 70%, 50%)"
      },
      {
        id: higherLossData[1].papper,
        label: higherLossData[1].papper,
        value: higherLossData[1].result,
        color: "hsl(213, 70%, 50%)"
      },
      {
        id: higherLossData[2].papper,
        label: higherLossData[2].papper,
        value: higherLossData[2].result,
        color: "hsl(58, 70%, 50%)"
      }
    ];

    setPieChartDataLoss(data);
  }

  async function getEvolutionData() {
    const userUid = userData[0] && userData[0]._id || "";
    const response = await requestAPI({
      params: `/dashboard/getEvolutionData`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        userUid: userUid
      }
    });

    const evolutionData = response;
    console.log("evolution : " , evolutionData)

    const dateConvertEvolution = _.each(evolutionData, (evolution: any) => {
      evolution.x = moment(evolution.x).format("DD/MM/YYYY");
    })

    const dataEvolution = [ 
      {
        "id": "Evolução por Tempo",
        "color": "#079312",
        "data": dateConvertEvolution
      }
    ];

    setLineChartData(dataEvolution);
  }


  return (
    <div className="col-md-12 pr-5 pl-5 pt-1 mt-4 w-100 h-75">
      <div className="row-md-6 d-flex h-50">
        <div className="col-md-6 d-flex justify-content-center">
          <CardOptions header={"Resultado"} data={"-10.00"} />
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div style={{ display: "grid" }} className="col-md-12">
            <div className="d-flex justify-content-center">
              <h1>Maiores Resultados</h1>
            </div>
            <div>
              <PieChart data={pieChartDataHigher} />
            </div>
          </div>
        </div>
      </div>
      <div className="row-md-6 d-flex h-50 mt-4">
        <div className="col-md-6 d-flex justify-content-center">
          <div style={{ display: "grid" }} className="col-md-12">
            <div className="d-flex justify-content-center">
            <h1>Evolução</h1>
            </div>
            <div>
            <LineChart data={lineChartData} />
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div style={{ display: "grid" }} className="col-md-12">
            <div className="d-flex justify-content-center">
              <h1>Maiores Perdas</h1>
            </div>
            <div>
              <PieChart data={pieChartDataLoss} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;