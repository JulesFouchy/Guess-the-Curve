import { evaluate } from 'mathjs'

const evalF = (f: string, x: number): number => {
    return evaluate(f, {x})
}

const isZero = (x: number): boolean => {
    return Math.abs(x) < 0.04
}

const isZeroFunction = (f: string): boolean => {
    let atLestOnePointIsNotAnError = false
    for (let x = -1; x < 1; x += 0.01) {
        try {
            const fx = evalF(f, x)
            if (Number.isFinite(fx) // don't break when we encounter NaN or Infinity because of some division by 0
                && !isZero(fx)) {
                return false
            }
            atLestOnePointIsNotAnError = true
        }
        catch {}
    }
    return atLestOnePointIsNotAnError
}

export default (f: string, g: string): boolean => {
    let diff = `(${f}) - (${g})`
    // @ts-expect-error
    diff = diff.replaceAll("ln", "log")
    try {
        return isZeroFunction(diff)
    }
    catch {
        return false
    }
}