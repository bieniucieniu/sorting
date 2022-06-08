import {CanvasObject, ColorProperty} from '../utils/types';
import { draw } from './draw';
import { sleep } from './sleep';

const merge = async (canvasObject: CanvasObject, left: number, mid: number, right: number, colorProperty?: ColorProperty, accentColorPorperty?: ColorProperty) => {
    const {array} = canvasObject;
    let i = left;
    let j = mid + 1;
    let k = left;
    while (i <= mid && j <= right) {
        if (array[i] <= array[j]) {
            draw(canvasObject, undefined, colorProperty);
            draw(canvasObject, {istart: i, iend: j}, accentColorPorperty);
            await sleep();
            
            array[k] = array[i];
            i++;
        } else {
            draw(canvasObject, undefined, colorProperty);
            draw(canvasObject, {istart: i, iend: j}, accentColorPorperty);
            await sleep();
            
            array[k] = array[j];
            j++;
        }
        k++;
    }
    while (i <= mid) {
        draw(canvasObject, undefined, colorProperty);
        draw(canvasObject, {istart: i, iend: j}, accentColorPorperty);
        await sleep();
        
        array[k] = array[i];
        i++;
        k++;
    }
    while (j <= right) {
        draw(canvasObject, undefined, colorProperty);
        draw(canvasObject, {istart: i, iend: j}, accentColorPorperty);
        await sleep();

        array[k] = array[j];
        j++;
        k++;
    }
}


const mergesortHelper = async (canvasObject: CanvasObject, left: number, right: number, colorProperty?: ColorProperty, accentColorPorperty?: ColorProperty) => {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        await mergesortHelper(canvasObject, left, mid, colorProperty, accentColorPorperty);
        await mergesortHelper(canvasObject, mid + 1, right, colorProperty, accentColorPorperty);
        await merge(canvasObject, left, mid, right, colorProperty, accentColorPorperty);
    }
}

export const mergesort = async (canvasObject: CanvasObject, colorProperty?: ColorProperty, accentColorPorperty?: ColorProperty) => {
    const {array} = canvasObject;
    await mergesortHelper(canvasObject, 0, array.length - 1, colorProperty, accentColorPorperty);
}
