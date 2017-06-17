import { View, event, uniqueId, attributes, extend, DelegateEvent } from 'view'
import * as Mixins from './mixins';
import { CollectionView } from './collection-view';
import { ArrayCollection } from './array-collection';
import { Model } from './model';
import { observable } from './decorators';
import { html } from './html';

class Todo extends Model {
    @observable
    id: string;
    @observable
    name: string;
    @observable
    done: boolean
    constructor(o: any) {
        super();
        extend(this, o);
    }
}


@attributes({
    ui: {
        p: 'p',
        i: 'input'
    }
})
class TodoView extends Mixins.ViewTemplate(Mixins.ViewElement(View)) {
    tagName = "li"
    data: Todo;
    template = (data: Todo) => {
        return `
            <p>${data.name}</p>
            <input type="text" style="display:none" value="${data.name}" />
            <button class="done${data.done ? ' is-done' : ''}">Done ${data.done ? 'v' : ''}</button>
        `
    }

    @event.click('p')
    onClick() {
        this.ui.p!.style.display = 'none';
        this.ui.i!.style.display = 'block'
        this.ui.i!.focus();

    }

    @event.click('.done')
    onDone(e: DelegateEvent) {
        let el = html(e.delegateTarget! as HTMLElement);
        let d = el.hasClass('is-done');
        el.toggleClass('is-done')
        this.data.done = !d;
        this.render();
    }

    @event('keypress', 'input')
    onKeyPress(e: KeyboardEvent) {
        switch (e.keyCode) {
            case 13:
                this.data.name = (this.ui.i as HTMLInputElement).value;
                this.ui.p!.style.display = 'block';
                this.ui.i!.style.display = 'none';
                this.render();
        }
        console.log(e)
    }

    @event('blur', 'input')
    onblur() {
        this.ui.p!.style.display = 'block';
        this.ui.i!.style.display = 'none';
    }
}



class TodoListView extends (class extends CollectionView<Todo, TodoView> { }) {
    collection = new ArrayCollection<Todo>();
    childView = TodoView;
    childViewContainer = 'ul';
    tagName = "div";
    template = `
        <button class="add">Add</button>
        <ul></ul>
    `;

    @event.click('button.add')
    addTodo() {
        this.collection.push(new Todo({
            name: "New Todo",
            id: uniqueId(),
            done: false
        }));
    }
}

let view = new (Mixins.ViewTemplate(Mixins.ViewElement(TodoListView)))();
document.body.appendChild(view.render().el!);

