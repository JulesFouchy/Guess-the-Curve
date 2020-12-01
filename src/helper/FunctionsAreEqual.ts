import { evaluate } from 'mathjs'

const evalF = (f: string, x: number): number => {
    return evaluate(f, {x})
}

const isZero = (x: number): boolean => {
    return Math.abs(x) < 0.00000001
}

const isZeroFunction = (f: string): boolean => {
    for (let x = -1; x < 1; x += 0.01) {
        if (!isZero(evalF(f, x))) {
            return false
        }
    }
    return true
}

export default (f: string, g: string): boolean => {
    return isZeroFunction(`(${f}) - (${g})`)
}