
import { BaseView, BaseViewOptions, View, Constructor, triggerMethodOn } from 'view';
import { ICollection, ModelEvents, Invoker, IViewElement, IEventEmitter } from './types';
import { isEventEmitter } from './mixins';


export interface BaseCollectionViewOptions<T extends Element, U extends View> extends BaseViewOptions<T> {
    childViewContainer?: string;
    eventProxyName?: string;
    childView?: Constructor<U>
}

export class BaseCollectionView<T extends Element, U extends ICollection<M>, M, V extends View & IViewElement> extends BaseView<T> {

    private _collection?: U;
    private _childViews: V[];
    readonly options: BaseCollectionViewOptions<T, V>;

    protected childView?: Constructor<V>
    protected childViewContainer?: string;

    set collection(collection: U | undefined) {
        this.setCollection(collection);
    }

    get collection(): U | undefined {
        return this._collection;
    }

    get childViews(): V[] {
        return this._childViews;
    }

    constructor(options: BaseCollectionViewOptions<T, V> = {}) {
        options.eventProxyName = options.eventProxyName || "childView";
        super(options);
    }

    render() {
        this.undelegateEvents();
        this._removeChildViews();

        super.render();

        if (!this.collection || !this.el) return this;

        this._renderCollection();

        this.delegateEvents();

        return this;
    }

    protected setCollection(collection?: U) {
        if (this._collection == collection) return;
        if (this.collection) {
            this._removeModelEvents();
            this._removeChildViews();
        }

        this._collection = collection;

        if (this.collection) {
            this._addModelEvents();
        }

    }

    protected _removeChildViews() {
        if (!this._childViews) {
            this._childViews = [];
        }
        for (let v of this._childViews) {
            v.destroy()
            v.el!.remove();
        }

        this._childViews = [];
    }

    protected _renderCollection(collection?: U) {
        let col = collection || this.collection;

        let container = this._getChildViewContainer();

        container.innerHTML = '';

        const frag = document.createDocumentFragment();

        for (let i = 0, ii = col!.length; i < ii; i++) {
            let item = col!.item(i);
            if (!item) throw RangeError("invalid index");
            let view = this._createChildView(item);
            this._renderChildView(view);
            this._attachChildView(frag, view, i);
        }

        container.appendChild(frag);
    }



    protected _renderChildView(view: V) {
        view.render();
    }

    protected _attachChildView(container: Node, view: V, index: number) {
        if (index >= this._childViews.length) {
            container.appendChild(view.el!);
            this._childViews.push(view);
        } else {
            let after = this._childViews[index];
            this._childViews.splice(index, 0, view);
            container.insertBefore(view.el!, after.el!);
        }

        if (isEventEmitter(view))
            this._proxyChildViewEvents(view);

    }


    protected _createChildView(model: M): V {
        let Vi: Constructor<V> = this.options.childView || this.childView || (View as any);

        let el = Invoker.get(Vi);
        (<any>el).data = model;
        el.options.attachId = true;

        return el;

    }

    protected _destroyChildView(view: V) {
        let index = this._childViews.indexOf(view);
        this._childViews.splice(index, 1);
        let container = this._getChildViewContainer();
        container.removeChild(view.el!);
        view.destroy();
    }

    private _modelAdded(item: M, index: number) {
        if (!this.el) return;
        let view = this._createChildView(item);
        this._renderChildView(view);
        this._attachChildView(this._getChildViewContainer(), view, index);
    }

    private _modelRemoved(_: M, index: number) {
        if (!this.el) return;
        let view = this._childViews[index];
        this._destroyChildView(view);
    }

    protected _addModelEvents() {
        if (isEventEmitter(this.collection)) {
            this.collection.on(ModelEvents.Add, this._modelAdded, this);
            this.collection.on(ModelEvents.Remove, this._modelRemoved, this);
            this.collection.on(ModelEvents.Reset, this.render, this);
            this.collection.on(ModelEvents.Sort, this.render, this);
        }
    }

    protected _removeModelEvents() {
        if (isEventEmitter(this.collection)) {
            this.collection.off(void 0, void 0, this);
        }
    }

    private _getChildViewContainer() {
        let sel = this.options.childViewContainer || this.childViewContainer
        if (!sel) return this.el!;
        let el = this.el!.querySelector(sel);
        if (!el) throw new Error(`tag not found: ${sel}`);
        return el!;
    }

    private _proxyChildViewEvents(view: IEventEmitter) {
        const fn = (eventName: string, ...args: any[]) => {
            eventName = this.options.eventProxyName + ':' + eventName;
            triggerMethodOn(this, eventName, ...[view].concat(args));
        }

        view.on('*', fn);
    }

    destroy() {
        this._removeChildViews();
        super.destroy();
    }

}

export class CollectionView<M, V extends View & IViewElement> extends BaseCollectionView<Element, ICollection<M>, M, V> {

}