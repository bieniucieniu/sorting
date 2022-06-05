import {CanvasObject, ColorProperty} from '../utils/types';
import { draw } from './draw';
import { sleep } from './sleep';



const quicksortHelper = async (canvasObject: CanvasObject, left: number, right: number, colorProperty?: ColorProperty, accentColorPorperty?: ColorProperty) => {
    const {array} = canvasObject;
    let i = left;
    let j = right;
    while (i <= j) {
        while (i <= j && array[i] <= array[j]) {
            i++;
            draw(canvasObject, undefined, colorProperty);
            draw(canvasObject, {istart: i, iend: j}, accentColorPorperty);
            await sleep();
        }
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        draw(canvasObject, undefined, colorProperty);
        draw(canvasObject, {istart: i, iend: j}, accentColorPorperty);
        await sleep();
        while (i <= j && array[i] <= array[j]) {
            j--;
            draw(canvasObject, undefined, colorProperty);
            draw(canvasObject, {istart: i, iend: j}, accentColorPorperty);
            await sleep();
        }
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        draw(canvasObject, undefined, colorProperty);
        draw(canvasObject, {istart: i, iend: j}, accentColorPorperty);
        await sleep();
    }
    if (left < j) {
        await quicksortHelper(canvasObject, left, j, colorProperty, accentColorPorperty);
    }
    if (i < right) {
        await quicksortHelper(canvasObject, i, right, colorProperty, accentColorPorperty);
    }
}

export const quicksort = async (canvasObject: CanvasObject, colorProperty?: ColorProperty, accentColorPorperty?: ColorProperty) => {
    const {array} = canvasObject;
    await quicksortHelper(canvasObject, 0, array.length - 1, colorProperty, accentColorPorperty);
}
