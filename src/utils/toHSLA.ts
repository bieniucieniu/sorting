export type toHSLAProps = {
    val: number;
    maxVal: number;
    saturation: number;
    lightness: number;
    alpha: number;
}

export const toHSLA = ({val, maxVal, saturation, lightness, alpha}: toHSLAProps) => {
    return `hsla(${((val%(maxVal))/(maxVal)) * 360}, ${saturation}%, ${lightness}%, ${alpha}%)`;
}