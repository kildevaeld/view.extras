export declare function equal(a: any, b: any): boolean;
export declare function isPropertyKey(a: any): a is PropertyKey;
/**
 * Get value from HTML Elemement
 *
 * @export
 * @param {HTMLElement} el
 * @param {boolean} [coerce=false]
 * @returns
 */
export declare function getValue(el: HTMLElement, coerce?: boolean): string | number | Date | {
    value: string;
    text: string;
};
/**
 * Set value on an HTMLElmenet
 *
 * @export
 * @param {HTMLElement} el
 * @param {*} [value]
 */
export declare function setValue(el: HTMLElement, value?: any): void;
