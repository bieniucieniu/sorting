import {CanvasObject, ColorProperty} from '../utils/types';
import { draw } from './draw';
import { sleep } from './sleep';

export const insertionsort = async (canvasObject: CanvasObject, colorProperty?: ColorProperty, accentColorPorperty?: ColorProperty) => {
    const {array} = canvasObject;
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
            draw(canvasObject, undefined, colorProperty);
            draw(canvasObject, {istart: j, iend: j - 1}, accentColorPorperty);
            await sleep();

            let temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;

            draw(canvasObject, undefined, colorProperty);
            draw(canvasObject, {istart: j, iend: j - 1}, accentColorPorperty);
            await sleep();
        }
    }
}