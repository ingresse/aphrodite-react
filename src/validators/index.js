/* Import Validators */
import cnpjValidator from './cnpj.validator';
import cpfValidator from './cpf.validator';
import emailValidator from './email.validator';

/* Validators together */
const validators = {
    cnpjValidator,
    cpfValidator,
    emailValidator,
    cnpj : cnpjValidator,
    cpf  : cpfValidator,
    email: emailValidator,
};


export { default as cnpjValidator } from './cnpj.validator';
export { default as cpfValidator } from './cpf.validator';
export { default as emailValidator } from './email.validator';

/* Export validators together */
export default validators;
