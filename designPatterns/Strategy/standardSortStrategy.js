"use strict";
exports.__esModule = true;
var StandardSortStrategy = /** @class */ (function () {
    function StandardSortStrategy() {
    }
    StandardSortStrategy.prototype.sort = function (items, comparer) {
        items = items.sort(comparer);
    };
    return StandardSortStrategy;
}());
exports.StandardSortStrategy = StandardSortStrategy;
