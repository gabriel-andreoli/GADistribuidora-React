import React from 'react';

interface InputProps {
  type: string;
  name: any;
  id: any;
  label: string;
  setValue : any;
}

const Input: React.FC<InputProps> = ({ type, name, id, label, setValue, ...props }) => {
  return (
    <div className="form-outline">
      <label className="form-label" htmlFor={id}>{label}</label>
      <input 
        type={type}
        id={id} 
        name={name}
        className="form-control"
        onChange={({target}) => setValue(target.value)}
        {...props}
      />
    </div>
  );
}

export default Input;
