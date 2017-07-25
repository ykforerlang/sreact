/**
 * Created by apple on 2017/7/24.
 */
export function diffObject(leftObj, rightObj) {
    const onlyInLeft = {}
    const bothLeft = {}
    const bothRight = {}
    const onlyInRight = {}

    for(let key in leftObj) {
        if(rightObj[key] === undefined) {
            onlyInLeft[key] = leftObj[key]
        } else {
            bothLeft[key] = leftObj[key]
            bothRight[key] = rightObj[key]
        }
    }

    for(let key in rightObj) {
        if(leftObj[key] === undefined) {
            onlyInRight[key] = rightObj[key]
        }
    }

    return {
        onlyInRight,
        onlyInLeft,
        bothIn: {
            left: bothLeft,
            right: bothRight
        }
    }
}