import { StandardSortStrategy } from './standardSortStrategy';
export class SortableList {
    constructor(items) {
        this._items = new Array();
        this.comparer = (left, right) => { return (left < right) ? -1 : 1; };
        this.sortStrategy = new StandardSortStrategy();
        this._items = this._items.concat(items);
    }
    add(items) {
        this._items = this._items.concat(items);
    }
    get items() {
        return this._items;
    }
    sort() {
        this.sortStrategy.sort(this._items, this.comparer);
    }
}
//# sourceMappingURL=sortableList.js.map