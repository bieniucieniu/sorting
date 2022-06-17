import { step } from "../utils/types";

const merge = async (array: number[], start: number, mid: number, end: number, steps: step[]) => {
    let size = end - start + 1;
    let left = array.slice(start, mid + 1);
    let right = array.slice(mid + 1, end + 1);


    for(let i = 0; i < size; i++) {

        if(left[0] && right[0]) {
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
        }else if(left[0]){
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


const mergesortHelper = async (array: number[], start: number, end: number, steps: step[]) => {
   
    if (start >= end) return steps;
    let mid = Math.floor((start + end) / 2);
    await mergesortHelper(array, start, mid, steps);

    await mergesortHelper(array, mid + 1, end, steps);

    await merge(array, start, mid, end, steps);
    return steps;
}

export const mergesort = async (array: number[]): Promise<step[]> => {
    let steps: step[] = [];
    await mergesortHelper(array, 0, array.length - 1, steps);
    return steps;
}