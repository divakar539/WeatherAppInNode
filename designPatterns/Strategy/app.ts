import {SortableList} from "./sortableList";
import {MergeSortStrategy} from './mergeSortStrategy';
import {InsertionSortStrategy} from './insertionSortStrategy';
import {StandardSortStrategy} from './standardSortStrategy';

class SortableNumberList extends SortableList<number>{
        constructor(items: Array<number>) {
            super(items);
        }
    }

        var randomNumbers = new Array<number>();
        var lenght = 50;
        while (lenght--) {
            randomNumbers.push(Math.round(Math.random() * 1000));
        }

        var sortableList1 = new SortableNumberList(randomNumbers);
        sortableList1.sort();
        console.log("Sorted using the standard sort strategie:");
        console.log(sortableList1.items.join("|"));

        var sortableList2 = new SortableNumberList(randomNumbers);
        sortableList2.sortStrategy = new MergeSortStrategy<number>();
        sortableList2.sort();
        console.log("Sorted using the merge sort strategie:");
        console.log(sortableList2.items.join("|"));

        var sortableList3 = new SortableNumberList(randomNumbers);
        sortableList3.sortStrategy = new InsertionSortStrategy<number>();
        sortableList3.sort();
        console.log("Sorted using the insertion sort strategie:");
        console.log(sortableList3.items.join("|"));