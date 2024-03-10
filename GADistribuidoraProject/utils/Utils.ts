import React from 'react';

export class Utils{
    public static ValidadeBasicAndSetValues(value: string, handleState: React.Dispatch<React.SetStateAction<string>>, handleStateError: React.Dispatch<React.SetStateAction<string>>) : string {
        value = value.trim();
        if(value == null || value === ""){
            handleStateError("Preencha o campo");
        }else if (value.length < 2){
            handleStateError("O campo deve conter no mínimo 1 caracter");
        }
        handleState(value);
        return value;
    }

    public static IsValidEmail(value: string) : boolean{
        const regexToValidEmail: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexToValidEmail.test(value);
    }

    public static ValidatePasswordAndReturnErrorMessage(value: string) : string{
        let result: string = '';
        if(value.length < 4){
            result = 'Senha muito curta';
        }else if (!Utils.HasUpperCase(value)) {
            result = 'A sua senha deve conter pelo menos 1 caracter maiúsculo';
        }
        return result;
    }

    public static HasUpperCase(str: string) : boolean{
        return [...str].some(char => char !== char.toLowerCase());
    }

    public static AreEquals(first: string, second: string) : boolean{
        return first.toLowerCase().trim() === second.toLowerCase().trim();
    }
}