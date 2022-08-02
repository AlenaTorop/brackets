module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {

    for (let j = 0; j < bracketsConfig.length; j++) {
      let closeBrackets = bracketsConfig[j][1];
      let openBrackets = bracketsConfig[j][0];

    if (stack.length === 0) {
        if (str[i] === openBrackets) {
            stack.push(str[i]);
        } else {
            if (str[i] === closeBrackets) {
                return false;
            }
        }
    } else {
        if (str[i] === closeBrackets) {
          let topElement = stack[stack.length - 1];
            if (topElement === openBrackets) {
                stack.pop();
            } else {
                if (openBrackets === closeBrackets) {
                    stack.push(str[i]);
                }
                else { 
                  return false; 
                }
            }
        }
        else {
            if (str[i] === openBrackets) {
                stack.push(str[i]);
            }
        }
    }

    }
    }
    return stack.length === 0;
    }
    
    
    
