import { step } from "../utils/types";


const partition = async (array: number[], start: number, end: number, steps: step[]): Promise<number> => {
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


const quicksortHelper = async (array: number[], start: number, end: number, steps: step[]): Promise<step[]> => {
    if (start >= end) return steps;

    let p = await partition(array, start, end, steps);
    await quicksortHelper(array, start, p - 1, steps);
    await quicksortHelper(array, p + 1, end, steps);
    return steps;
}

export const quicksort = async (array: number[]): Promise<step[]> => {
    let steps: step[] = [];
    return await quicksortHelper(array, 0, array.length - 1, steps);
}