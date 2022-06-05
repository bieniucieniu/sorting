import { CanvasObject, DrawZoneProperty, ColorProperty } from "../utils/types";


export const draw = (canvasObject: CanvasObject, drawZoneProperty?: DrawZoneProperty, colorProperty?: ColorProperty) => {
    const { array, canvas, ctx } = canvasObject;
    const { istart, iend } = drawZoneProperty || {
        istart: 0,
        iend: array.length,
        };
    const { bgColor, columnColor } = colorProperty || {
        bgColor: '#fff',
        columnColor: '#000',
        };

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = columnColor;
    for (let i = istart; i < iend; i++) {
        const x = i * 10;
        const y = array[i] * 10;
        ctx.fillRect(x, y, 10, 10);
    }
}