export class InsertionSortStrategy {
    sort(items, comparer) {
        var len = items.length;
        if (len < 2) {
            return;
        }
        var j = 0;
        var previous, left = items[0];
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
                }
                else {
                    j++;
                }
            }
        }
    }
}
//# sourceMappingURL=insertionSortStrategy.js.map