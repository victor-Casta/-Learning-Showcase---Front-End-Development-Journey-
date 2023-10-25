export type Sizes = 'S' | 'M' | 'L' | 'XL'; 
export type product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
}