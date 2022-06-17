
export type CanvasObject ={
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
}

export type DrawZoneProperty = {
    istart: number,
    iend: number,
}

export type ColorProperty = {
    bgColor: string,
    columnColor: string,
}

export type step = {
    type: "compare" | "swap",
    target: number[],
    value?: number,
}