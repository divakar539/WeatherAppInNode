export class MergeSortStrategy {
    sort(items, comparer) {
        if (items.length < 2) {
            return items;
        }
        var sortedArrays = items.map((value) => { return [value]; });
        var leftArray, rightArray;
        while (sortedArrays.length > 1) {
            leftArray = sortedArrays.shift();
            rightArray = sortedArrays.shift();
            var result = new Array();
            var left = leftArray.shift();
            var right = rightArray.shift();
            do {
                if (comparer(left, right) <= 0) {
                    result.push(left);
                    left = leftArray.shift();
                }
                else {
                    result.push(right);
                    right = rightArray.shift();
                }
            } while (left !== undefined && right !== undefined);
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
//# sourceMappingURL=mergeSortStrategy.js.map