/* Core Packages */
import * as CPF from '@fnando/cpf';

/**
 * CPF Validator
 *
 * CPF is a brazilian document type
 *
 * @param {string} cpf
 *
 * @return {boolean}
 */
function cpfValidator(cpf = '') {
    return CPF.isValid(cpf);
}

/* Exporting */
export default cpfValidator;
