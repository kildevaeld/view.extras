"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const view_1 = require("view");
const Mixins = require("./mixins");
const collection_view_1 = require("./collection-view");
const array_collection_1 = require("./array-collection");
const model_1 = require("./model");
const decorators_1 = require("./decorators");
const html_1 = require("./html");
class Todo extends model_1.Model {
    constructor(o) {
        super();
        view_1.extend(this, o);
    }
}
__decorate([
    decorators_1.property,
    __metadata("design:type", String)
], Todo.prototype, "id", void 0);
__decorate([
    decorators_1.property,
    __metadata("design:type", String)
], Todo.prototype, "name", void 0);
__decorate([
    decorators_1.property,
    __metadata("design:type", Boolean)
], Todo.prototype, "done", void 0);
let TodoView = class TodoView extends Mixins.ViewTemplate(Mixins.ViewElement(view_1.View)) {
    constructor() {
        super(...arguments);
        this.tagName = "li";
        this.template = (data) => {
            return `
            <p>${data.name}</p>
            <input type="text" style="display:none" value="${data.name}" />
            <button class="done${data.done ? ' is-done' : ''}">Done ${data.done ? 'v' : ''}</button>
        `;
        };
    }
    onClick() {
        this.ui.p.style.display = 'none';
        this.ui.i.style.display = 'block';
        this.ui.i.focus();
        this.data.tri;
    }
    onDone(e) {
        let el = html_1.html(e.delegateTarget);
        let d = el.hasClass('is-done');
        el.toggleClass('is-done');
        this.data.done = !d;
        this.render();
    }
    onKeyPress(e) {
        switch (e.keyCode) {
            case 13:
                this.data.name = this.ui.i.value;
                this.ui.p.style.display = 'block';
                this.ui.i.style.display = 'none';
                this.render();
        }
        console.log(e);
    }
    onblur() {
        this.ui.p.style.display = 'block';
        this.ui.i.style.display = 'none';
    }
};
__decorate([
    view_1.event.click('p'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TodoView.prototype, "onClick", null);
__decorate([
    view_1.event.click('.done'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TodoView.prototype, "onDone", null);
__decorate([
    view_1.event('keypress', 'input'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], TodoView.prototype, "onKeyPress", null);
__decorate([
    view_1.event('blur', 'input'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TodoView.prototype, "onblur", null);
TodoView = __decorate([
    view_1.attributes({
        ui: {
            p: 'p',
            i: 'input'
        }
    })
], TodoView);
class TodoListView extends (class extends collection_view_1.CollectionView {
}) {
    constructor() {
        super(...arguments);
        this.collection = new array_collection_1.ArrayCollection();
        this.childView = TodoView;
        this.childViewContainer = 'ul';
        this.tagName = "div";
        this.template = `
        <button class="add">Add</button>
        <ul></ul>
    `;
    }
    addTodo() {
        this.collection.push(new Todo({
            name: "New Todo",
            id: view_1.uniqueId(),
            done: false
        }));
    }
}
__decorate([
    view_1.event.click('button.add'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TodoListView.prototype, "addTodo", null);
let view = new (Mixins.ViewTemplate(Mixins.ViewElement(TodoListView)))();
document.body.appendChild(view.render().el);
