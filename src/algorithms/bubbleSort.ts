import { step } from "../utils/types";


export const bubbleSort = (array: number[]): step[] => {
    let steps: step[] = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            steps.push({
                type: "compare",
                target: [j, j + 1]
            });

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                steps.push({
                    type: "swap",
                    target: [j, j + 1]
                });
            }
        }
    }
    return steps;
}
