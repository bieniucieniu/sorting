export const range = (n: number) => {
    return Array.from({ length: n }, (_v, k) => k+1); 
}