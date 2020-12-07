import React from 'react';
import './styles.css';

interface Props{
  label: string;
  pressed: boolean;
}

export const OptionButton: React.FC<Props> = props => {
  const { label, pressed } = props;
  return(
    <>
     <button className="btnCard">{label}</button>
    </>
  )
}