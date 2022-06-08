import { CanvasObject, DrawZoneProperty, ColorProperty } from "../utils/types";


export const draw = (canvasObject: CanvasObject, drawZoneProperty?: DrawZoneProperty, colorProperty?: ColorProperty) => {
    const { array, canvas, ctx } = canvasObject;
    const { istart, iend } = drawZoneProperty || {
        istart: 0,
        iend: array.length,
        };
    const { bgColor, columnColor } = colorProperty || {
        bgColor: '#ffffff00',
        columnColor: '#000000',
        };

    let barWidth = canvas.width / array.length;
    let barHeight = canvas.height / array.length;

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = columnColor;
    for(let i = istart; i <= iend; i++) {
        ctx.fillRect(barWidth * i, canvas.height - array[i] * barHeight, barWidth, array[i] * barHeight);
    }
}