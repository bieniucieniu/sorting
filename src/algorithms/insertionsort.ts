import {step} from '../utils/types';

export const insertionsort = async (array: number[]): Promise<step[]> => {
    let steps: step[] = [];
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
            [array[i], array[j]] = [array[j], array[i]];
            steps.push({
                type: 'swap',
                target: [i, j],
            });
        }
    }
    return steps;
}