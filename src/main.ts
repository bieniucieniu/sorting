import {
    drawArray,
    sortingAnimation,
    stopAnimation,
    calculateSteps,
} from "./functions";
import { CurrentAlgorithm, range, shuffle, sleep } from "./utils";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
const bodyStyles = window.getComputedStyle(
    document.querySelector(".main-content") as HTMLElement,
    null
) as CSSStyleDeclaration;

const currentAlgorithm: CurrentAlgorithm = {
    name: "bubbleSort",
    document: document.querySelector(".current-algorithm-name") as HTMLElement,
};

canvas.width = canvas.parentElement?.clientWidth || 300;
canvas.height = canvas.parentElement?.clientHeight || 300;

let array = shuffle(range(30));

let canvasObj = {
    canvas,
    ctx,
};

let arrayObj = calculateSteps(array, currentAlgorithm.name);

let stylingProp = {
    bgColor: bodyStyles.getPropertyValue("background-color"),
    fgColor: "#000000",
    gap: 5,
    rise: 10,
};

let animationProp = {
    delay: 4,
    swapColor: "red",
    compareColor: "green",
};

drawArray(canvasObj, arrayObj, stylingProp);

window.addEventListener("resize", () => {
    canvas.width = canvas.parentElement?.clientWidth || 300;
    canvas.height = canvas.parentElement?.clientHeight || 300;

    drawArray(canvasObj, arrayObj, stylingProp);
});

const reset = async () => {
    stopAnimation();
    array = shuffle(range(30));
    arrayObj = calculateSteps(array, currentAlgorithm.name);
    await sleep(animationProp.delay);
    drawArray(canvasObj, arrayObj, stylingProp);
};



document.querySelectorAll(".btn").forEach((btn) => {
    switch (btn.id) {
        case "bubble-sort":
            btn.addEventListener("click", () => {
                currentAlgorithm.name = "BubbleSort";
                currentAlgorithm.document.innerHTML = currentAlgorithm.name;
                reset();
            });
            break;
        case "insertion-sort":
            btn.addEventListener("click", () => {
                currentAlgorithm.name = "InsertionSort";
                currentAlgorithm.document.innerHTML = currentAlgorithm.name;
                reset();
            });
            break;
        case "merge-sort":
            btn.addEventListener("click", () => {
                currentAlgorithm.name = "MergeSort";
                currentAlgorithm.document.innerHTML = currentAlgorithm.name;
                reset();
            });
            break;
        case "quick-sort":
            btn.addEventListener("click", () => {
                currentAlgorithm.name = "QuickSort";
                currentAlgorithm.document.innerHTML = currentAlgorithm.name;
                reset();
            });
            break;
        case "reset":
            btn.addEventListener("click", async () => {
                reset();
            });
            break;
        case "start":
            btn.addEventListener("click", () => {
                sortingAnimation(
                    canvasObj,
                    arrayObj,
                    stylingProp,
                    animationProp
                );
            });
            break;
        default:
            break;
    }
});
