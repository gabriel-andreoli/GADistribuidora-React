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
        if(value.length < 6){
            result = 'Senha muito curta';
        }else if (!Utils.HasUpperCase(value)) {
            result = 'A sua senha deve conter pelo menos 1 caracter maiúsculo';
        }else if (!Utils.HasLowerCase(value)){            
            result = 'A sua senha deve conter pelo menos 1 caracter minúsculo';
        }else if (!Utils.HasNonAlphanumericCharacters(value)){
            result = 'A sua senha deve conter pelo menos 1 caracter que não seja alfanumérico';
        }
        return result;
    }

    public static HasUpperCase(str: string) : boolean{
        const uppercaseRegex = /[A-Z]/;
        return [...str].some(char => uppercaseRegex.test(char));
    }
    
    public static HasLowerCase(str: string) : boolean{
        const lowercaseRegex = /[a-z]/;
        return [...str].some(char => lowercaseRegex.test(char));
    }

    public static AreEquals(first: string, second: string) : boolean{
        return first.toLowerCase().trim() === second.toLowerCase().trim();
    }

    public static HasNonAlphanumericCharacters(str: string): boolean {
        const specialCharacterRegex = /[^a-zA-Z0-9]/;
        return specialCharacterRegex.test(str);
    }

}