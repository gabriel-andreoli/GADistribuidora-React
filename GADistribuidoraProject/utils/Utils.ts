import React from 'react';

export class Utils{
    public static validadeBasicAndSetValues(value: string, handleState: React.Dispatch<React.SetStateAction<string>>, handleStateError: React.Dispatch<React.SetStateAction<string>>) : string {
        value = value.trim();
        if(value == null || value === ""){
            handleStateError("Preencha o campo");
        }else if (value.length < 2){
            handleStateError("O campo deve conter no mínimo 1 caracter");
        }
        handleState(value);
        return value;
    }
}