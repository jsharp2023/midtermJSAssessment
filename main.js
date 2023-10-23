// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
//1.
function ageToAbilities(age){
    if (age < 16){
        return "You can't drive."
    }else if(age <=17){
        return 'You can drive but not vote.'
    }else if(age <= 24){
        return 'You can vote but not rent a car.'
    }else if(age >= 25){
        return 'You can do pretty much anything.'
    }
}

//2.
function oddIndices(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      if(i % 2 !== 0){
        newArr.push(arr[i]);
      }
    }
    return newArr
}

//3.
function numOddValues (num){
    let count = 0;
    for(let i = 0; i < num.length; i++){
      if(num[i] % 2 !== 0){
        count++;
      }
    }
    return count;
    }

    //4...
    function averageStringLength(arr){
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
          sum += arr[i].length;
        }
        return sum / arr.length;
        
      }

      //5.
      function firstPunctuationIndex(str) {
        for(let i = 0; i < str.length; i++) {
          if(str[i] === '.' || str[i] === '!' || str[i] === '?') {
            return i;
          }
            
        }
        return -1;
      }
      

    //6....
    function getPlace (highScore, score){
        let place = 0
        for(let i = 0; i < highScore.length; i++){
          if(score > highScore[i]){
            place++
          }
    
      }
    }

    

    //7.
    function addToObj (person, key, value){
        if (typeof key !== 'string'){
          return 'Function must be called with a valid key.'
        }
        person[key] = value
        return person
      }


      //8.
      function duplicateElements(arr) {
        const uniqueElements = new Set(arr);
        const result = [];
        for (const element of uniqueElements) {
          if (arr.filter((e) => e === element).length > 1) {
            result.push(element);
          }
        }
        return result;
      }
      
  



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

if (typeof addToObj === 'undefined') {
    addToObj = undefined;
}

if (typeof duplicateElements === 'undefined') {
    duplicateElements = undefined
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace,
    addToObj,
    duplicateElements
};
