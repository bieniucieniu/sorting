import { step } from "../utils/types";

export const insertionSort = (array: number[]): step[] => {
    let steps: step[] = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
            steps.push({
                type: "compare",
                target: [j, j - 1]
            });
            steps.push({
                type: "swap",
                target: [j, j - 1]
            });
            
            [array[j], array[j - 1]] = [array[j - 1], array[j]];

        }
    }
    return steps;
}
