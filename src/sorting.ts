export {}

const mainCanvas = document.getElementById('canvas')! as HTMLCanvasElement;
let context = mainCanvas.getContext('2d')!;


let arrayLength = 20;
let delay = 100;
let barGap = 2;
mainCanvas.width = mainCanvas.parentElement?.clientWidth || 600;
mainCanvas.height = mainCanvas.parentElement?.clientHeight || 600;
let barWidth = mainCanvas.width / arrayLength;
let barHeight = mainCanvas.height / (arrayLength+1);

