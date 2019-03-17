import {ISortStrategy} from './sortStrategy'


export class MergeSortStrategy<T> implements ISortStrategy<T> {
    public sort<T>(items: Array<T>, comparer: (left: T, right: T) => number) {
        if (items.length < 2) {
            return items;
        }

        var sortedArrays: Array<Array<T>> = items.map((value) => { return [value]; });

        var leftArray: Array<T>, rightArray: Array<T>;
        while (sortedArrays.length > 1) {
            leftArray = sortedArrays.shift();
            rightArray = sortedArrays.shift();

            var result = new Array<T>();
            var left = leftArray.shift();
            var right = rightArray.shift();

            do {
                if (comparer(left, right) <= 0) {
                    result.push(left);
                    left = leftArray.shift();
                } else {
                    result.push(right);
                    right = rightArray.shift();
                }
            } while (left !== undefined && right !== undefined)

            while (left !== undefined) {
                result.push(left);
                left = leftArray.shift();
            }

            while (right !== undefined) {
                result.push(right);
                right = rightArray.shift();
            }

            sortedArrays.push(result);
        }

        var sortedItems = sortedArrays[0];
        for (var i = 0; i < items.length; i++) {
            items[i] = sortedItems.shift();
        }
    }
}