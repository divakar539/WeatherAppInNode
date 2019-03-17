export interface ISortStrategy<T> {
    sort<T>(items: Array<T>, comparer: (left: T, right: T) => number);
}