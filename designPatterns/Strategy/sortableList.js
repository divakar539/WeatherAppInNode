"use strict";
exports.__esModule = true;
var standardSortStrategy_1 = require("./standardSortStrategy");
var SortableList = /** @class */ (function () {
    function SortableList(items) {
        this._items = new Array();
        this.comparer = function (left, right) { return (left < right) ? -1 : 1; };
        this.sortStrategy = new standardSortStrategy_1.StandardSortStrategy();
        this._items = this._items.concat(items);
    }
    SortableList.prototype.add = function (items) {
        this._items = this._items.concat(items);
    };
    Object.defineProperty(SortableList.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    SortableList.prototype.sort = function () {
        this.sortStrategy.sort(this._items, this.comparer);
    };
    return SortableList;
}());
exports.SortableList = SortableList;
