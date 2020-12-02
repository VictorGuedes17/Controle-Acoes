import React from 'react';
import './style.css';

interface Props{
  label: string;
  onClick: any;
}

export const SimpleButton:React.FC<Props> = props => {
  const { label, onClick } = props;
  return(
  <div className="saveButtonContainer">
  <button className="saveButton" onClick={onClick}>{label}</button>
  </div>
  )
}