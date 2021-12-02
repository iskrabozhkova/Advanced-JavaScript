function tag(staticParts, ...dynamicParts){
    return staticParts.map((str,index) => {
        if(dynamicParts.length -index > 0){
            return `${str}<<${dynamicParts[dynamicParts.length - index - 1]}>>`
        }
    })
}

const value = 248;
const result = tag`${value}neshto -> ${value}`
console.log(result);

