# RegHelper-typescript

RegHelper is a library for typescript that provides functions to easily validate common inputs like email addresses, passwords, phone numbers, date formats and more. With RegHelper, you don't need to write complex regular expressions, just call the appropriate function to perform the validation.

## Installation
You can install RegHelper using NPM:

```npm
npm i reg-helper-typescript
```

## Usage
Once installed, you can import RegHelper into your project:

```javascript
import { RegHelper } from "reg-helper-typescript";
```

The RegHelper object provides several functions that can be used to validate different types of input. Here are some examples:

### Validate Email

```javascript
const isValidEmail = RegHelper.isEmailRegEx('test@example.com');
```
that will return true for valid and if not valid, returns false

### Validate Password

```javascript
const isValidPassword = RegHelper.isPasswordRegEx('MyP@ssword123');
```
This will return true if the password is valid, and false otherwise. By default, RegHelper requires passwords to be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.

### Validate Phone Number
```javascript
const isValidPhoneNumber = RegHelper.isPhoneNumberRegEx('+38344007007');
```
### Validate username
```javascript
const isValidUsername = RegHelper.isUsernameRegEx("user.name",5,20);
```
First character must be a letter or digit, any subsequent characters can be letters, digits, underscores, periods, or hyphens, The total length of the string must be between minLength and maxLength (inclusive)

### Validate code
```javascript
const isValidCode = RegHelper.isCodeRegEx('PD2Ys8',6);
```
Lower cases, Upper cases, numbers so in a total length of 6 chars.

### Other functions
Url
```javascript
const isValid = RegHelper.isUrlRegEx('https://github.com/elvirmisini/RegHelper')
```
For USA SSN
```javascript
const isValid = RegHelper.isUsSSNRegEx('222-22-2222')
```
Credit Card
```javascript
const isValid = RegHelper.isCardRegEx('4111111111111111')
```
IP address
```javascript
const isValid = RegHelper.isIPRegEx('192.158.1.38')
```
USA Zip code
```javascript
const isValid = RegHelper.isUsZipCodeRegEx('99577-0727')
```
Date format  mm/dd/yyyy
```javascript
const isValid = RegHelper.isDateMmDdYyyySlashRegEx('12/22/2023')
```
Date format dd/mm/yyyy
```javascript
const isValid = RegHelper.isDateDdMmYyyySlashRegEx('22/12/2023')
```
Date format yyyy/mm/dd
```javascript
const isValid = RegHelper.isDateYyyyMmDdSlashRegEx('2023/12/22')
```
Date format mm/dd/yy
```javascript
const isValid = RegHelper.isDateMmDdYySlashRegEx('12/22/22')
```
Date format yyyy-mm-dd
```javascript
const isValid = RegHelper.isDateYyyyMmDdHyphenRegEx('2023-12-12')
```
Date format mm-dd-yyyy
```javascript
const isValid = RegHelper.isDateMmDdYyyyHyphenRegEx('12-12-2023')
```
Date format dd-mm-yyyy
```javascript
const isValid = RegHelper.isDateDdMmYyyyHyphenRegEx('22-12-2023')
```
Hexadecimal Color code
```javascript
const isValid = RegHelper.isHeksadeximalColorCodeRegEx('#123456')
```
MAC address
```javascript
const isValid = RegHelper.isMACAdressRegEx('00-B0-D0-63-C2-26')
```
SubnetMask
```javascript
const isValid = RegHelper.isSubnetMaskRegEx('255.255.255.0')
```
Random password generator
```javascript
const isValid = RegHelper.randomPasswordGeneration()
```
Password validator, see if your password is strong, weak or moderate
```javascript
const isValid = RegHelper.validatePassword('PPpassword123.')
```

## Contributing
If you find a bug or want to contribute to the development of RegHelper, please submit a pull request on the GitHub repository.

## Version
Version 2.0.0, in the future will come with more features.

<!-- ## License
RegHelper is licensed under the --- License. See the LICENSE file for more information. -->
