/**
 * Format Number
 *
 * @param {number} num
 * @param {string} locale
 *
 * @return {string}
 */
export const formatNumber = (num, locale = 'pt-BR') => new Intl.NumberFormat(locale).format(num);

/**
 * Format Number and Round it
 *
 * @param {number} num
 *
 * @return {number}
 */
export const formatNumberRound = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

/**
 * Format Number as Currency value
 *
 * @param {number} num
 * @param {string} locale
 * @param {string} currency
 *
 * @return {string}
 */
export const formatCurrency = (num, locale = 'pt-BR', currency = 'BRL') => new Intl.NumberFormat(locale, { style: 'currency', currency }).format(num);
