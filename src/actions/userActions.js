export function setName(name) {
    return {
        type: 'SET_NAME',
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(name)
            },1000)
        })
    }
}

export function setAge(age) {
    return {
        type: 'SET_AGE',
        payload: age
    }
}