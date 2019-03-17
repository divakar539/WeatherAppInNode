import {ISortStrategy} from './sortStrategy'

export class InsertionSortStrategy<T> implements ISortStrategy<T> {
    public sort<T>(items: Array<T>, comparer: (left: T, right: T) => number) {
        var len = items.length;
        if (len < 2) {
            return;
        }

        var j = 0;
        var previous: T, left: T = items[0];

        for (var i = 1; i < len; i++) {
            previous = left;
            left = items[i];

            j = (comparer(previous, left) <= 0) ? ++j : 0;

            while (j < i) {
                var right = items[j];
                if (comparer(left, right) < 0) {
                    items.splice(i, 1);
                    items.splice(j, 0, left);
                    break;
                } else {
                    j++;
                }
            }
        }
    }
}