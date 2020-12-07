import React, { useState } from 'react';
import { OptionButton } from './optionButton';
import './styles.css'
interface Props {
  header: string;
  data: any;
}

export const CardOptions: React.FC<Props> = props => {
  const { header, data } = props;

  const [option1, setOption1] = useState<boolean>(true);
  const [option2, setOption2] = useState<boolean>(false);
  const [option3, setOption3] = useState<boolean>(false);

  return (
    <>
      <div className="d-flex">
        <div className="card border-dark mb-3 " style={{ maxWidth: '24rem', borderRadius: 20, background: "#090527" }}>
          <div className="card-body text-dark">
            <h5 className="card-title text-center" id="cardHeader">{header}</h5>
            <p className="card-text text-center" style={{ color: data > 0 ? "green" : data == 0 ? "grey": "red", fontSize: 40 }} >R$ {data} </p>
          </div>
        </div>
        <div className="ml-4 mb-4" style={{ display: "grid" }}>
          <OptionButton label="Todo Periodo" pressed={option1}/>
          <OptionButton label="Ultimos 3 meses" pressed={option2}/>
          <OptionButton label="Ultimo mês" pressed={option3}/>
        </div>
      </div>
    </>
  )
}