export class RegHelper {

    static isEmailRegEx(email: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static isPasswordRegEx(password: string) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
        return passwordRegex.test(password);
    }

    static isPhoneNumberRegEx(phoneNumber: string) {

        const phoneRegex = /^\+\d{1,3}\d{8,}$/;
        return phoneRegex.test(phoneNumber);
    }

    static isUsernameRegEx(username: string, minLength: number, maxLength: number) {
        const usernameRegex = new RegExp(`^[a-zA-Z0-9][a-zA-Z0-9_.-]{${minLength - 1},${maxLength - 1}}$`);
        return usernameRegex.test(username);
    }

    static isCodeRegEx(code: string, length: number) {
        const codeRegex = new RegExp(`^[a-zA-Z0-9]{${length}}$`);
        return codeRegex.test(code);
    }

    static isUrlRegEx(url: string) {
        const urlRegex = /^(https?:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?$/;
        return urlRegex.test(url);
    }

    static isUsSSNRegEx(SSN: string) {
        const SSNRegex = /^\d{3}-\d{2}-\d{4}$/;
        return SSNRegex.test(SSN);
    }

    static isCardRegEx(Card: string) {
        const CardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
        return CardRegex.test(Card);
    }

    static isIPRegEx(IP: string) {
        const IPRegex = /^([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])$/;
        return IPRegex.test(IP);
    }

    static isUsZipCodeRegEx(ZIP: string) {
        const ZIPRegex = /^\d{5}(?:[-\s]\d{4})?$/;
        return ZIPRegex.test(ZIP);
    }

    static isDateMmDdYyyySlashRegEx(date: string) {
        const dateRegex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])\/((19|20)\d{2})$/;
        return dateRegex.test(date);
    }

    static isDateDdMmYyyySlashRegEx(date: string) {
        const dateRegex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        return dateRegex.test(date);
    }

    static isDateYyyyMmDdSlashRegEx(date: string) {
        const dateRegex = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/;
        return dateRegex.test(date);
    }

    static isDateMmDdYySlashRegEx(date: string) {
        const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{2}$/;
        return dateRegex.test(date);
    }

    static isDateYyyyMmDdHyphenRegEx(date: string) {
        const dateRegex = /^(?:(?:19|20)[0-9]{2})[-\/.](?:0?[1-9]|1[0-2])[-\/.](?:0?[1-9]|[12][0-9]|3[01])$/;
        return dateRegex.test(date);
    }

    static isDateDdMmYyyyHyphenRegEx(date: string) {
        const dateRegex = /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
        return dateRegex.test(date);
    }

    static isDateMmDdYyyyHyphenRegEx(date: string) {
        const dateRegex = /^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])-\d{4}$/;
        return dateRegex.test(date);
    }

    static isHeksadeximalColorCodeRegEx(colorCode: string) {
        const colorCodeRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
        return colorCodeRegex.test(colorCode);
    }

    static isMACAdressRegEx(MACAddress: string) {
        const MACAddressRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
        return MACAddressRegex.test(MACAddress);
    }

    static isSubnetMaskRegEx(subnetMask: string) {
        const subnetMaskRegex = /^((128|192|224|240|248|252|254)\.0\.0\.0)|(255\.(0|128|192|224|240|248|252|254)\.0\.0)|(255\.255\.(0|128|192|224|240|248|252|254)\.0)|(255\.255\.255\.(0|128|192|224|240|248|252|254))$/;
        return subnetMaskRegex.test(subnetMask);
    }

    static randomPasswordGeneration() {
        const randomPassword =
            Math.random().toString(36).slice(5) +
            Math.random().toString(36)
                .toUpperCase().slice(5);
        return randomPassword
    }

    static validatePassword(password: string) {
        // Define regular expressions for different password strengths
        const weakRegex = /^[a-zA-Z]+$/;
        const moderateRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]+$/;
        const strongRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[\w\W]+$/;

        // Check the strength of the password
        if (weakRegex.test(password)) {
            return "Weak password";
        } else if (moderateRegex.test(password)) {
            return "Moderate password";
        } else if (strongRegex.test(password)) {
            return "Strong password";
        } else {
            return "Invalid password";
        }
    }


}

