"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("view");
const singleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, slice = Array.prototype.slice;
function parseHTML(html) {
    let parsed = singleTag.exec(html);
    if (parsed) {
        return document.createElement(parsed[0]);
    }
    var div = document.createElement('div');
    div.innerHTML = html;
    var element = div.firstChild;
    return element;
}
const domEvents = new Map();
class Html {
    static query(query, context) {
        if (typeof context === 'string') {
            context = document.querySelectorAll(context);
        }
        let html;
        let els;
        if (typeof query === 'string') {
            if (query.length > 0 && query[0] === '<' && query[query.length - 1] === ">"
                && query.length >= 3) {
                return new Html([parseHTML(query)]);
            }
            if (context) {
                if (context instanceof HTMLElement) {
                    els = slice.call(context.querySelectorAll(query));
                }
                else {
                    html = new Html(slice.call(context));
                    return html.find(query);
                }
            }
            else {
                els = slice.call(document.querySelectorAll(query));
            }
        }
        else if (query && query instanceof Element) {
            els = [query];
        }
        else if (query && query instanceof NodeList) {
            els = slice.call(query);
        }
        return new Html(els);
    }
    static removeAllEventListeners() {
        for (let el of domEvents.keys()) {
            let entries = domEvents.get(el);
            for (let entry of entries) {
                el.removeEventListener(entry.event, entry.callback);
            }
            domEvents.delete(el);
        }
    }
    static _domEvents() {
        return domEvents;
    }
    get length() {
        return this._elements.length;
    }
    constructor(el) {
        if (!Array.isArray(el))
            el = [el];
        this._elements = el || [];
    }
    get(n) {
        n = (n === undefined || n < 0) ? 0 : n;
        return n >= this.length ? undefined : this._elements[n];
    }
    addClass(str) {
        return this.forEach((e) => {
            e.classList.add(str);
        });
    }
    removeClass(str) {
        return this.forEach((e) => {
            console.log('remove str', str);
            e.classList.remove(str);
        });
    }
    hasClass(str) {
        return this._elements.reduce((_, c) => {
            return c.classList.contains(str);
        }, false);
    }
    toggleClass(str) {
        this.forEach(m => {
            if (m.classList.contains(str))
                m.classList.remove(str);
            else
                m.classList.add(str);
        });
        return this;
    }
    attr(key, value) {
        let attr;
        if (typeof key === 'string' && value) {
            attr = { [key]: value };
        }
        else if (typeof key == 'string') {
            if (this.length)
                return this.get(0).getAttribute(key);
        }
        else if (view_1.isObject(key)) {
            attr = key;
        }
        return this.forEach(e => {
            for (let k in attr) {
                e.setAttribute(k, attr[k]);
            }
        });
    }
    text(str) {
        if (arguments.length === 0) {
            return this.length > 0 ? this.get(0).textContent : null;
        }
        return this.forEach(e => e.textContent = str);
    }
    html(html) {
        if (arguments.length === 0) {
            return this.length > 0 ? this.get(0).innerHTML : null;
        }
        return this.forEach(e => e.innerHTML = html);
    }
    css(attr, value) {
        if (arguments.length === 2) {
            return this.forEach(e => {
                if (attr in e.style)
                    e.style[attr] = String(value);
            });
        }
        else {
            return this.forEach(e => {
                for (let k in attr) {
                    if (k in e.style)
                        e.style[k] = String(attr[k]);
                }
            });
        }
    }
    parent() {
        var out = [];
        this.forEach(e => {
            if (e.parentElement) {
                out.push(e.parentElement);
            }
        });
        return new Html(out);
    }
    remove() {
        return this.forEach(e => {
            if (e.parentElement)
                e.parentElement.removeChild(e);
        });
    }
    clone() {
        return new Html(this.map(m => m.cloneNode()));
    }
    find(str) {
        var out = [];
        this.forEach(e => {
            out = out.concat(slice.call(e.querySelectorAll(str)));
        });
        return new Html(out);
    }
    map(fn) {
        let out = new Array(this.length);
        this.forEach((e, i) => {
            out[i] = fn(e, i);
        });
        return out;
    }
    forEach(fn) {
        this._elements.forEach(fn);
        return this;
    }
    on(name, callback, useCap) {
        return this.forEach(e => {
            let entries = domEvents.get(e);
            if (!entries) {
                entries = [];
                domEvents.set(e, entries);
            }
            e.addEventListener(name, callback, useCap);
            entries.push({
                event: name,
                callback: callback
            });
        });
    }
    once(name, callback, useCap) {
        return this.on(name, (e) => {
            callback(e);
            setTimeout(() => this.off(name, callback));
        }, useCap);
    }
    off(name, callback) {
        if (!name) {
            return this.forEach(el => {
                let entries = domEvents.get(el);
                if (entries) {
                    entries.forEach(e => {
                        el.removeEventListener(e.event, e.callback);
                    });
                    domEvents.delete(el);
                }
            });
        }
        return this.forEach(el => {
            let entries = domEvents.get(el);
            if (!entries)
                return;
            entries.forEach((entry, index) => {
                if (entry.event === name && (callback ? callback === entry.callback : true)) {
                    domEvents.get(el).splice(index, 1);
                }
            });
            if (!domEvents.get(el).length)
                domEvents.delete(el);
        });
    }
    /*animationEnd(callback: (e: AnimationEvent) => void, timeout?: number) {
        return this.forEach(el => {
            dom.animationEnd(el, callback, null, timeout);
        });
    }

    transitionEnd(callback: (e: TransitionEvent) => void, timeout?: number) {
        return this.forEach(el => {
            dom.transitionEnd(el, callback, null, timeout);
        });
    }*/
    // Iterator
    [Symbol.iterator]() {
        let pointer = 0;
        let components = this._elements;
        let len = components.length;
        return {
            next() {
                let done = pointer >= len;
                return {
                    done: done,
                    value: done ? null : components[pointer++]
                };
            }
        };
    }
}
exports.Html = Html;
function html(query, context) {
    return Html.query(query, context);
}
exports.html = html;