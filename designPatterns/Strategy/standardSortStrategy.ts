import {ISortStrategy} from './sortStrategy'

export class StandardSortStrategy<T> implements ISortStrategy<T> {
    public sort<T>(items: Array<T>, comparer: (left: T, right: T) => number) {
        items = items.sort(comparer);
    }
}