import { step } from "../utils/types";


const partition = (array: number[], start: number, end: number, steps: step[]): number => {
    let pivot = array[end];
    let i = start - 1;

    for (let j = start; j < end; j++) {
        steps.push({
            type: "compare",
            target: [j, end]
        });
        if (array[j] <= pivot) {
            i++;
            steps.push({
                type: "swap",
                target: [i, j]
            });
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    steps.push({
        type: "swap",
        target: [i + 1, end]
    });
    [array[i + 1], array[end]] = [array[end], array[i + 1]];
    return i + 1;
}


const quickSortHelper =  (array: number[], start: number, end: number, steps: step[]): step[] => {
    if (start >= end) return steps;

    let p = partition(array, start, end, steps);
    quickSortHelper(array, start, p - 1, steps);
    quickSortHelper(array, p + 1, end, steps);
    return steps;
}

export const quickSort =  (array: number[]): step[] => {
    let steps: step[] = [];
    return quickSortHelper(array, 0, array.length - 1, steps);
}