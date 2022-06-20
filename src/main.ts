import { drawArray , sortingAnimation, stopAnimation, calculateSteps } from "./functions";
import {range, shuffle, sleep} from "./utils";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
const bodyStyles = window.getComputedStyle(document.querySelector(".main-content") as HTMLElement ,null) as CSSStyleDeclaration;

canvas.width = canvas.parentElement?.clientWidth || 300;
canvas.height = canvas.parentElement?.clientHeight || 300;

let array = shuffle(range(30));


let canvasObj = {
    canvas,
    ctx,
}

let arrayObj = {
    array: [...array],
    steps: calculateSteps(array),
}

let stylingProp = {
    bgColor: bodyStyles.getPropertyValue('background-color'),
    fgColor: '#000000',
    gap: 5,
    rise: 10
}

let animationProp = {
    delay: 400,
    swapColor: "red",
    compareColor: "green"
} 

drawArray(canvasObj, arrayObj, stylingProp);

window.addEventListener("resize", () => {
    canvas.width = canvas.parentElement?.clientWidth || 300;
    canvas.height = canvas.parentElement?.clientHeight || 300;

    drawArray(canvasObj, arrayObj, stylingProp);
});


let currentAlgorithmName: string;

document.querySelector

document.querySelectorAll(".btn").forEach(btn => {

    switch (btn.id) {
        case "bubble-sort":
            btn.addEventListener("click", () => {
            currentAlgorithmName = "bubbleSort";
        });
        break;
        case "insertion-sort":
            btn.addEventListener("click", () => {
            currentAlgorithmName = "insertionSort";
        });
        break;
        case "merge-sort":
            btn.addEventListener("click", () => {
            currentAlgorithmName = "mergeSort";
        });
        break;
        case "quick-sort":
            btn.addEventListener("click", () => {
            currentAlgorithmName = "quickSort";
        });
        break;
        case "reset":
            btn.addEventListener("click", async () => {
                console.log(currentAlgorithmName);

                stopAnimation();
                array = shuffle(range(30));
                arrayObj = {
                    array: [...array],
                    steps: calculateSteps(array, currentAlgorithmName),
                }
                await sleep(animationProp.delay);
                drawArray(canvasObj, arrayObj, stylingProp);
            });
            break;
        case "start":
            btn.addEventListener("click",  () => {
                sortingAnimation(canvasObj, arrayObj, stylingProp, animationProp);
            });
            break;
        default:
            break;
    }
            
});