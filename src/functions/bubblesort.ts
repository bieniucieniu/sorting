import {CanvasObject, ColorProperty} from '../utils/types';
import { draw } from './draw';
import { sleep } from './sleep';

export const bubblesort = async (canvasObject: CanvasObject, colorProperty?: ColorProperty, accentColorPorperty?: ColorProperty) => {
    const {array} = canvasObject;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                draw(canvasObject, undefined , colorProperty);
                draw(canvasObject, {istart: j, iend: j + 1}, accentColorPorperty);
                await sleep();

                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                draw(canvasObject, undefined, colorProperty);
                draw(canvasObject, {istart: j, iend: j + 1}, accentColorPorperty);
                await sleep();
            }
        }
    }
}
