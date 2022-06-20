import { step } from "../utils/types";

const merge = (array: number[], start: number, mid: number, end: number, steps: step[]) => {
    let size = end - start + 1;
    let left = array.slice(start, mid + 1);
    let right = array.slice(mid + 1, end + 1);


    for(let i = 0; i < size; i++) {


        if(left.length && right.length) {
            steps.push({
                type: "compare",
                target: [start + i, mid + i + 1]
            });
            if (left[0] > right[0]) {
                steps.push({
                    type: "swap",
                    target: [start + i],
                    value: right[0]
                });
                array[start + i] = right.shift()!;

            }else{
                steps.push({
                    type: "swap",
                    target: [start + i],
                    value: left[0]
                });
                array[start + i] = left.shift()!;
            }
        }else if(!isNaN(left[0])){
            steps.push({
                type: "swap",
                target: [start + i],
                value: left[0]
            });
            array[start + i] = left.shift()!;
        }else{
            steps.push({
                type: "swap",
                target: [start + i],
                value: right[0]
            });
            array[start + i] = right.shift()!;
        }
    }
}


const mergeSortHelper = (array: number[], start: number, end: number, steps: step[]) => {
   
    if (start >= end) return steps;

    let mid = Math.floor((start + end) / 2);
    mergeSortHelper(array, start, mid, steps);

    mergeSortHelper(array, mid + 1, end, steps);

    merge(array, start, mid, end, steps);
    return steps;
}

export const mergeSort = (array: number[]): step[] => {
    let steps: step[] = [];
    mergeSortHelper(array, 0, array.length-1, steps);
    return steps;
}