//TO DO:

function validate(problem){
    var parts = problem.split('=').map(a => a.trim());

    var exexcuteOperation = ({operator, index}, partArr) => {
        var left = partArr[index - 1];
        var right = partArr[index + 1];
        var result = 0;

        switch (operator){
            case '+': res = left + right;
            break;
            case '-': res = left - right;
            break;
            case '*': res = left * right;
            break;
            case '/': res = left / right;
            break;
        }
        return result;
    }
    //find the result of current part
    var operations = ['+', '-', '*', '/'];
    function findResult(part){
        var partParts = part.split(' ');
        //find the indexes of every operator
        var operations = partParts.reduce((acc, curr, currIndex) => {
            if(!operations.includes(curr))
            return [...acc, {opeartor: curr,
                            index: currIndex}]
        },[])
        //check in operations for * or /
        var operationToExecute = operations.find(({op}) => ['*', '/'].includes(op))
        var result = exexcuteOperation(operationToExecute, partParts);
        var final = [part.split('').slice(0, operationToExecute.index -1), operationToExecute.opeartor, part.split('').slice(operationToExecute.index +2)].join(' ');
        return final;
    }
    const {good, bad} = parts.reduce((acc, curr, currIndex) => {
        //if we are at the end
        if(currIndex === parts.length - 1){
            return acc;
        }
        var result = findResult(curr);
        if(result === parts[currIndex + 1]){
            acc.good += 1;
        }else{
            acc.bad += 1;
        }
    }, {good: 0, bad: 0})

    return `${good}/${bad}+${good}`
}

//const {good, bad} = )