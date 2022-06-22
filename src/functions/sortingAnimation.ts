import { CanvasObject, ArrayObject,  ArrayStylingProperty, sortingAnimationProperty} from "../utils/types"
import { drawArray } from "./drawArray";
import { sleep } from "../utils/sleep";

let run = false;

export const stopAnimation = () => {
    run = false;
}

export const sortingAnimation = async (canvasObject: CanvasObject, arrayObject: ArrayObject, stylingProperty?: ArrayStylingProperty, sortingAnimationProperty?: sortingAnimationProperty): Promise<number[] | undefined> => {
    if(run) return;
    
    run = true;

    let {canvas, ctx} = canvasObject;
    let {steps} = arrayObject;
    let {gap, rise} = stylingProperty || {gap: 5, rise: 0};
    let { swapColor, compareColor} = sortingAnimationProperty || { swapColor: "red", compareColor: "blue"};
    
    let array = [...arrayObject.array];

    let barWidth = canvas.width / array.length;
    let barHeight = (canvas.height-rise)/ array.length;

    for (let i = 0; i < steps.length && run; i++) {
        
        if (steps[i].type === "compare" && run) {
            drawArray(canvasObject, {array, steps}, stylingProperty);

            ctx.fillStyle = compareColor;
            ctx.fillRect(steps[i].target[0] * barWidth + gap/2, canvas.height, barWidth - gap, -barHeight * array[steps[i].target[0]] - rise);
            ctx.fillRect(steps[i].target[1] * barWidth + gap/2, canvas.height, barWidth - gap, -barHeight * array[steps[i].target[1]] - rise);
            await sleep(sortingAnimationProperty?.delay || 100 || 100);
            continue;
        }

        
        if (steps[i].type === "swap" && run) {
            

            if(!isNaN(steps[i].value!)) {
                drawArray(canvasObject, {array, steps}, stylingProperty);
                ctx.fillStyle = swapColor;
                ctx.fillRect(steps[i].target[0] * barWidth + gap/2, canvas.height, barWidth - gap, -barHeight * array[steps[i].target[0]] - rise);
                await sleep(sortingAnimationProperty?.delay || 100);
                
                array[steps[i].target[0]] = steps[i].value!;

                drawArray(canvasObject, {array, steps}, stylingProperty);
                ctx.fillStyle = swapColor;
                ctx.fillRect(steps[i].target[0] * barWidth + gap/2, canvas.height, barWidth - gap, -barHeight * array[steps[i].target[0]] - rise);
                await sleep(sortingAnimationProperty?.delay || 100);

            } else {
                drawArray(canvasObject, {array, steps}, stylingProperty);
                ctx.fillStyle = swapColor;
                ctx.fillRect(steps[i].target[0] * barWidth + gap/2, canvas.height, barWidth - gap, -barHeight * array[steps[i].target[0]] - rise);
                ctx.fillRect(steps[i].target[1] * barWidth + gap/2, canvas.height, barWidth - gap, -barHeight * array[steps[i].target[1]] - rise);
                await sleep(sortingAnimationProperty?.delay || 100);

                [array[steps[i].target[0]], array[steps[i].target[1]]] = [array[steps[i].target[1]], array[steps[i].target[0]]];

                drawArray(canvasObject, {array, steps}, stylingProperty);
                ctx.fillStyle = swapColor;
                ctx.fillRect(steps[i].target[0] * barWidth + gap/2, canvas.height, barWidth - gap, -barHeight * array[steps[i].target[0]] - rise);
                ctx.fillRect(steps[i].target[1] * barWidth + gap/2, canvas.height, barWidth - gap, -barHeight * array[steps[i].target[1]] - rise);
                await sleep(sortingAnimationProperty?.delay || 100);

            }

        }

        
    }

    if(run) drawArray(canvasObject, {array, steps}, stylingProperty);
   
    run = false;
    return array;
}