import { mergesort } from "./algorithms/mergesort";
import { quicksort } from "./algorithms/quicksort";
import {range} from "./utils/range";
import {shuffle} from "./utils/shuffle";

let arr = shuffle(range(20));
console.log(arr);
console.log(await mergesort(arr));
console.log(arr);