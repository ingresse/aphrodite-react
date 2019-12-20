/* Core Packages */
import * as CNPJ from '@fnando/cnpj';

/**
 * CNPJ Validator
 *
 * CNPJ is a brazilian document type
 *
 * @param {string} cnpj
 *
 * @return {boolean}
 */
function cnpjValidator(cnpj = '') {
    return CNPJ.isValid(cnpj);
}

/* Exporting */
export default cnpjValidator;
