import React from 'react';
import './style.css';

interface Props{
  placeholder: string;
  disable: boolean;
  label: string;
  type: string;
  step?:string;
  min?:string;
  onChange:any;
  value?:any;
}

export const SimpleFormInput: React.FC<Props> = props => {
  const { placeholder, disable, label, type ,step ,min, onChange, value} = props;
  return(
    <>
    <div className="formContainer">
    <label className={"textInput"}>{label}</label>
    <input 
      className="SimpleInput" 
      disabled = {disable} 
      placeholder={placeholder} 
      type={type} 
      step={step} 
      min={min}
      value={value}
      onChange={(e:any) => onChange(e)}
    />
    </div>
    </>
  );
}
