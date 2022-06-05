let delay: number;

export const setDelay = (newDelay: number) => {
    if (newDelay < 0) {
        throw new Error('Delay must be greater than 0');
    }
    delay = newDelay;
}
export const sleep = () => {
    return new Promise(resolve => setTimeout(resolve, delay));
}