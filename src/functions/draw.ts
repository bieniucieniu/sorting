import {CanvasObject, step} from "../utils/types";

export const draw = (steps: step[], canvas: CanvasObject) => {
    let ctx = canvas.ctx;
    let width = canvas.canvas.width;
    let height = canvas.canvas.height;
    let barWidth = canvas.width / array.length;
    let barHeight = canvas.height / array.length;

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = columnColor;
    for(let i = istart; i <= iend; i++) {
        ctx.fillRect(barWidth * i, canvas.height - array[i] * barHeight, barWidth, array[i] * barHeight);
    }
}