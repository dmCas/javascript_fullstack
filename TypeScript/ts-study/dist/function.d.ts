declare const add: (a: number, ...rest: number[]) => number;
interface Directions {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
declare function assigned(all: number): Directions;
declare function assigned(topAndBottom: number, leftAndRight: number): Directions;
declare function assigned(top: number, left: number, bottom: number, right: number): Directions;
