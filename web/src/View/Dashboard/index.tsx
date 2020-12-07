import React from 'react';
import { CardOptions } from '../../Components/CardOptions';

interface Props {

}

const Dashboard: React.FC<Props> = props => {
  return (
    <div className="col-md-12 pr-5 pl-5 pt-1 mt-4 w-100 h-75">
      <div className="row-md-6 d-flex h-50">
        <div className="col-md-6 d-flex justify-content-center">
          <CardOptions header={"Resultado"} data={"-10.00"} />
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <h1>Graph2</h1>
        </div>
      </div>
      <div className="row-md-6 d-flex h-50">
        <div className="col-md-6 d-flex justify-content-center">
          <h1>Graph3</h1>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <h1>Graph4</h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;