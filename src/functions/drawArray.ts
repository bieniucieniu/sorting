import {CanvasObject, ArrayObject , ArrayStylingProperty} from "../utils/types";

export const drawArray = async (canvasObject: CanvasObject, arrayObject: ArrayObject ,stylingProperty?: ArrayStylingProperty) => {
    const {canvas, ctx} = canvasObject;
    const {array} = arrayObject;
    const {bgColor, fgColor, gap, rise} = stylingProperty || {bgColor: "white", fgColor: "black", gap: 10, rise: 10};
    let barWidth = canvas.width / array.length;
    let barHeight = canvas.height/ array.length;

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < array.length; i++) {
        ctx.fillStyle = fgColor;
        ctx.fillRect(i * barWidth + gap/2, canvas.height, barWidth - gap, -barHeight * array[i] - rise);
    }
}