/* Core Packages */
import dayjs from 'dayjs';
import dayjsUTC from 'dayjs/plugin/utc';
import dayjsCustomParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/pt-br';

/* Plugins */
dayjs.extend(dayjsUTC);
dayjs.extend(dayjsCustomParseFormat);

/* Date utility */
export const date = dayjs;

/* Native Datepicker identifier */
export function hasDatePickerSupport() {
    if (!window || !document) {
        return false;
    }

    if (window && window.datePickerSupport) {
        return true;
    }

    const input = document.createElement('input');
    input.setAttribute('type','date');

    const notADateValue = 'not-a-date';
    input.setAttribute('value', notADateValue);

    const hasDatePickerSupport = (input.value !== notADateValue);
    window.datePickerSupport   = hasDatePickerSupport;

    return hasDatePickerSupport;
}
