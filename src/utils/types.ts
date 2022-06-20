
export type CanvasObject = {
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,

}

export type ArrayObject = {  
    array: number[],
    steps: step[],
}

export type sortingAnimationProperty = {
    delay: number,
    swapColor: string,  
    compareColor: string,
}


export type ArrayStylingProperty = {
    bgColor: string,
    fgColor: string,
    gap: number,
    rise: number,
}

export type step = {
    type: "compare" | "swap",
    target: number[],
    value?: number,
}