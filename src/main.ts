import {
    drawArray,
    sortingAnimation,
    stopAnimation,
    calculateSteps,
} from "./functions";
import { CurrentAlgorithm, range, shuffle, sleep } from "./utils";
import "./style.css";

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

let size = 30;

let array = shuffle(range(size));

let canvasObj = {
    canvas,
    ctx,
};

let arrayObj = calculateSteps(array, currentAlgorithm.name);

let stylingProp = {
    bgColor: bodyStyles.getPropertyValue("background-color"),
    fgColor: "#000000",
    gap: canvas.width < 600 ? 1 : 5,
    rise: 10,
};

let animationProp = {
    delay: 200,
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
    if (size > 100 || canvas.width < 600) {
        stylingProp.gap = 1;
    } else {
        stylingProp.gap = 5;
    }
    stopAnimation();
    array = shuffle(range(size));
    arrayObj = calculateSteps(array, currentAlgorithm.name);
    await sleep(animationProp.delay);
    drawArray(canvasObj, arrayObj, stylingProp);
};

const sizeInput = {
    range: document.getElementById("array-size-range") as HTMLInputElement,
    number: document.getElementById("array-size-number") as HTMLInputElement,
};

sizeInput.range.addEventListener("change", (e) => {
    size = parseInt((e.target as HTMLInputElement).value);
    sizeInput.number.value = size.toString();
    reset();
});

sizeInput.number.addEventListener("change", (e) => {
    size = parseInt((e.target as HTMLInputElement).value);
    if (size > 1000) {
        size = 1000;
        sizeInput.number.value = size.toString();
    }
    sizeInput.range.value = size.toString();
    reset();
});

const delayInput = {
    range: document.getElementById("delay-range") as HTMLInputElement,
    number: document.getElementById("delay-number") as HTMLInputElement,
};

delayInput.range.addEventListener("change", (e) => {
    animationProp.delay = parseInt((e.target as HTMLInputElement).value);
    delayInput.number.value = animationProp.delay.toString();
});

delayInput.number.addEventListener("change", (e) => {
    animationProp.delay = parseInt((e.target as HTMLInputElement).value);
    delayInput.range.value = animationProp.delay.toString();
});

document.querySelectorAll("button").forEach((btn) => {
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
