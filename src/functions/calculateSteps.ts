import { bubbleSort, insertionSort, mergeSort, quickSort } from "../algorithms";

export const calculateSteps = (Array: number[], sortingName?: string) => {
    switch (sortingName) {
        case "bubbleSort" || "BubbleSort"|| "bubble-sort":
            return bubbleSort(Array);
        case "insertionSort" || "InsertionSort" || "insertion-sort":
            return insertionSort(Array);
        case "quickSort" || "QuickSort" || "quick-sort":
            return quickSort(Array);
        case "mergeSort" || "MergeSort" || "merge-sort":
            return mergeSort(Array);
        default:
            return bubbleSort(Array);
    }
}