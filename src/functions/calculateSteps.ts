import { bubbleSort, insertionSort, mergeSort, quickSort } from "../algorithms";
import { step, ArrayObject } from "../utils";

export const calculateSteps = (array: number[], sortingName?: string): ArrayObject=> {
    let steps: step[] = [];

    switch (sortingName) {
        case "BubbleSort":
            steps = bubbleSort([...array]);
            break;
        case "InsertionSort":
            steps = insertionSort([...array]);
            break;
        case "QuickSort":
            steps = quickSort([...array]);
            break;
        case "MergeSort":
            steps = mergeSort([...array]);
            break;
        default:
            steps = bubbleSort([...array]);
    }

    const arrayObj = {
        array: [...array],
        steps: steps,
    }
    return arrayObj;
}