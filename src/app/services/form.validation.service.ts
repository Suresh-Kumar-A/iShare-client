import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FormValidationService {

    startWithAlphabet(inputdata: string): boolean {
        return /^[A-Za-z]/.test(inputdata);
    }

    onlyAlphabet(inputdata: string): boolean {
        return /^[A-Za-z]+$/.test(inputdata);
    }

    onlyNumber(inputdata: string): boolean {
        return /^[0-9]+$/.test(inputdata);
    }

    onlyAlphaNumeric(inputdata: string): boolean {
        return /^[A-Za-z0-9]+$/.test(inputdata);
    }

    //may contain alphabet or number or its combination - including underscore(_)
    validateUsername(inputdata: string): boolean
    {
        //username length must be from 2-20
        if (inputdata.length >= 2 && inputdata.length <= 15) {
            //only alphabets in username
            if (this.onlyAlphabet(inputdata))
                return true;
            //first letter must be alphabhet, last letter must be alphanumberic, allowed special character is Underscore(_)
            else if (/^([A-Za-z])(?!.*[ !`~@#$%^&*()+\-=\[\]{};':"\\|,<>\/?])(.*[A-Za-z0-9])$/.test(inputdata))
                return true;
            else
                return false;
        } else
            return false;
    }

    validateEmail(inputdata: string): boolean {
        return /^([a-zA-Z])[\w.-_]*[\w]+@([A-Za-z0-9_]+[.]{1})+([a-zA-Z]{2,})$/.test(inputdata); //old condition ^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(?!.web)(\.\w{2,3})+$
    }

    validatePassword(inputdata: string): boolean { 
        //Password length must be from 3-15
        if (inputdata.length >= 3 && inputdata.length <= 15) {
            //Strong password - 3 to 15 characters => at least one lowercase letter, one uppercase letter, one numeric digit, and one special character 
            if (/^(?=.*\d)(?!.*[ ])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{3,15}$/.test(inputdata)) //if you dont want to accept space give --> (?!.*\s)
            {
                console.info("Strong Password");
                return true;
            }
            //Average password - 3 to 15 characters => at least one numeric digit, one uppercase and one lowercase letter
            else if (/^(?=.*\d)(?!.*[ ])(?=.*[a-z])(?=.*[A-Z]).{3,15}$/.test(inputdata)) {
                console.info("Average Password");
                return true;
            }
            //Weak password
            else if (/(?!.*[ ])/.test(inputdata)) {
                console.info("Weak Password");
                return false;
            } else
                return false;
        } else
            return false;
    }

    validateName(inputdata: string): boolean {
        if (inputdata.length == 0) {
            return false;
        } else {
            return (/^([A-Za-z])(?=.*[ .?][a-zA-Z])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z]).{1,25}$/.test(inputdata))
        }
    }
}