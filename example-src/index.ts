import {
    CollectionView, ArrayCollection, TemplateView, Model, property, Mixins,
    IViewTemplate, IViewElement
} from '../lib';
import { uniqueId, attributes, event, DelegateEvent } from 'view';

export class TodoModel extends Model {
    @property id: string = uniqueId();
    @property title: string;
    @property done: boolean = false

    constructor(title: string) {
        super()
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
/*
@attributes({
    events: {
        'click button.add-btn': 'onNewClicked'
    }
})*/
export class TodoListView extends Mixins.ViewTemplate(Mixins.ViewElement(BaseTodoListView)) implements IViewTemplate, IViewElement {
    childView = TodoListItemView;
    collection: ArrayCollection<TodoModel> = new ArrayCollection();
    childViewContainer = "ul";

    template = _ => `
        <div>
            <button class="add-btn">New Todo</button>
            <ul></ul>
        </div>`

    @event.click('button.add-btn')
    onNewClicked() {
        this.collection.push(new TodoModel(`Todo ${this.collection.length}`));
    }


    @event.click('li button')
    onTodoItemClicked(e: DelegateEvent) {
        console.log('done')
        // This should be way more simple, when implementing: https://github.com/kildevaeld/view.extras/issues/1
        let id = e.delegateTarget.parentElement!.getAttribute('data-id');
        let model = this.collection.find(m => m.id === id);

        if (!model) throw new Error(`could not find model with id: ${id}`);
        model.done = !model.done;

        this.childViews.find(m => m.data.id == id).render();
    }

}

window.onload = () => {
    let view = new TodoListView();
    document.body.appendChild(view.render().el);
};