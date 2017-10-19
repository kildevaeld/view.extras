"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPropertyKey(a) {
    return typeof a === 'symbol' || typeof a === 'number' || typeof a === 'string';
}
exports.isPropertyKey = isPropertyKey;
/**
 * Get value from HTML Elemement
 *
 * @export
 * @param {HTMLElement} el
 * @param {boolean} [coerce=false]
 * @returns
 */
function getValue(el, coerce = false) {
    const tagName = el.tagName.toLocaleLowerCase(), type = el.type, isInput = tagName, isCheckbox = /checkbox/.test(type), isSelect = /select/.test(el.nodeName);
    if (isCheckbox) {
        return Boolean(el.checked);
    }
    else if (isSelect) {
        if (!coerce)
            return el.value || '';
        let option = el.options[el.selectedIndex];
        return { value: option.value, text: option.innerText };
    }
    else if (isInput) {
        let input = el;
        let type = input.type;
        switch (type) {
            case "number":
                return coerce ? 'valueAsNumber' in input ? input.valueAsNumber : parseInt(input.value) : input.value;
            case "date":
                return coerce ? 'valueAsDate' in input ? input.valueAsDate : new Date(input.value) : input.value;
            default: return input.value;
        }
    }
    return el.textContent;
}
exports.getValue = getValue;
/**
 * Set value on an HTMLElmenet
 *
 * @export
 * @param {HTMLElement} el
 * @param {*} [value]
 */
function setValue(el, value) {
    const tagName = el.tagName.toLocaleLowerCase(), type = el.type, isInput = tagName, isCheckbox = /checkbox/.test(type), isRadio = /radio/.test(type), isRadioOrCheckbox = isRadio || isCheckbox, isSelect = /select/.test(el.nodeName);
    if (value == null) {
        value = "";
    }
    if (isRadioOrCheckbox) {
        if (isRadio) {
            if (String(value) === String(el.value)) {
                el.checked = true;
            }
        }
        else {
            el.checked = value;
        }
    }
    else if (String(value) !== getValue(el)) {
        if (isInput || isSelect) {
            el.value = value;
        }
        else {
            el.innerHTML = value;
        }
    }
}
exports.setValue = setValue;
const _slice = Array.prototype.slice;
function slice(a, index, end) {
    return _slice.call(a, index, end);
}
exports.slice = slice;
