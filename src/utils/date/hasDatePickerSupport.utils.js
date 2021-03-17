export function hasDatePickerSupport() {
    if (window.datePickerSupport) {
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
