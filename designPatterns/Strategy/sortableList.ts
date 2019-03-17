import {ISortStrategy} from './sortStrategy'
import {StandardSortStrategy} from './standardSortStrategy'
export  class SortableList<T>{
    private _items: Array<T> = new Array<T>();
    constructor(items: Array<T>) {
        this.sortStrategy = new StandardSortStrategy<T>();
        this._items = this._items.concat(items);
    }

    public add(items: Array<T>) {
        this._items = this._items.concat(items);
    }

    public get items(): Array<T> {
        return this._items;
    }

    public sortStrategy: ISortStrategy<T>;
    protected comparer: (left: T, right: T) => number = (left: T, right: T) => { return (left < right) ? -1 : 1; };

    public sort() {
        this.sortStrategy.sort(this._items, this.comparer);
    }
}