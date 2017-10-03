import {
    CollectionView, ArrayCollection, TemplateView, Model, property, Mixins,
    IViewTemplate, IViewElement, getValue, setValue, html,
} from '../lib';
import { RestCollection, RestModel } from '../lib';
import { uniqueId, attributes, event, DelegateEvent } from 'view';

// It isn't really necessary to use a model in 
// this implemnentation.
export class TodoModel extends RestModel {
    //@property id: string = uniqueId();
    @property title: string;
    @property done: boolean = false

    constructor(title?: string) {
        super()
        if (title)
            this.title = title;
    }
}


@attributes({
    tagName: 'li'
})
export class TodoListItemView extends TemplateView {
    template = (data: TodoModel) => {
        this.el!.setAttribute('data-id', data.id);
        const style = data.done ? 'line-through' : 'none';
        return `
            <span data-id="${data.id}" style="text-decoration:${style};cursor:pointer;">${data.title}</span>
            <button class="done">${data.done ? 'not done' : 'done'}</button>
        `
    }
    // FIXME: see https://github.com/kildevaeld/view.extras/issues/1
    data: TodoModel
}


export class BaseTodoListView extends CollectionView<TodoModel, TodoListItemView> { }

@attributes({
    ui: {
        input: 'input',
        btn: 'button.add-btn'
    }
})
export class TodoListView extends Mixins.ViewTemplate(Mixins.ViewElement(BaseTodoListView)) implements IViewTemplate, IViewElement {
    childView = TodoListItemView;
    collection: RestCollection<TodoModel> = new RestCollection({
        url: "/api/todos",
        Model: TodoModel
    });
    childViewContainer = "ul";

    template = _ => `
        <div>
            <div>
                <input type="text" />
                <button class="add-btn" disabled>New Todo</button>
            </div>
            <ul></ul>
        </div>`

    @event.click('@btn')
    onNewClicked() {
        this.collection.create(new TodoModel(getValue(this.ui.input) as string));
        setValue(this.ui.input, null);
        this.ui.btn.setAttribute('disabled', 'disabled');
        this.ui.input.focus();

    }

    @event('keyup', '@input')
    onInputKeyPress(e: KeyboardEvent) {
        if (e.keyCode === 13 && getValue(this.ui.input))
            return this.onNewClicked();
        if (getValue(this.ui.input))
            this.ui.btn.removeAttribute('disabled');
        else this.ui.btn.setAttribute('disabled', 'disabled');
    }


    @event.click('li button')
    onTodoItemClicked(e: DelegateEvent) {
        // This should be way more simple, when implementing: https://github.com/kildevaeld/view.extras/issues/1
        let id = e.delegateTarget.parentElement!.getAttribute('data-id');
        let model = this.collection.find(m => m.id === id);

        if (!model) throw new Error(`could not find model with id: ${id}`);
        model.done = !model.done;
        model.save();
        this.childViews.find(m => m.data.id == id).render();
    }

}

window.onload = () => {
    let view = new TodoListView();
    document.body.appendChild(view.render().el);
    view.collection.fetch();
};