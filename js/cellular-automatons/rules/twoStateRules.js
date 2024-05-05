function extractLists(ruleString) {
    // Split the string into birth and survival parts
    const [birthPart, survivalPart] = ruleString.split('S');

    // Extract the numbers from the birth and survival parts
    const birthList = birthPart.slice(1).split('').map(Number);
    const survivalList = survivalPart.split('').map(Number);

    return [birthList, survivalList];
}

export function twoStateRuleStringToFunction(ruleString) {
    // Extract the birth and survival lists from the rule string
    const [birthList, survivalList] = extractLists(ruleString);

    // Return a function that implements the rule
    return function(cellValue, newCellValue, neighbours) {
        // Phase boundaries (original B2/S124, experimenting)
        // See also https://english.rejbrand.se/rejbrand/article.asp?ItemIndex=423
        var newCellValue = 0;
        if (cellValue % 4 == 1 || cellValue % 4 == 3) {
            if (survivalList.includes(neighbours)) {
                newCellValue = 1;
            } else {
                newCellValue = 2;
            }
        } else if (cellValue % 4 == 0 || cellValue % 4 == 2) {
            if (birthList.includes(neighbours)){
                newCellValue = 3;
            } else {
                newCellValue = 0;
            }
        }
        return newCellValue;
    }
}

export function twoStateNoZeroRuleStringToFunction(ruleString) {
    // Extract the birth and survival lists from the rule string
    const [birthList, survivalList] = extractLists(ruleString);

    // Return a function that implements the rule
    return function(cellValue, newCellValue, neighbours) {
        // Phase boundaries (original B2/S124, experimenting)
        // See also https://english.rejbrand.se/rejbrand/article.asp?ItemIndex=423
        //var newCellValue = 0;
        if (cellValue % 4 == 1 || cellValue % 4 == 3) {
            if (survivalList.includes(neighbours)) {
                newCellValue = 1;
            } else {
                newCellValue = 2;
            }
        } else if (cellValue % 4 == 0 || cellValue % 4 == 2) {
            if (birthList.includes(neighbours)){
                newCellValue = 3;
            }
        }
        return newCellValue;
    }
}

export function twoStatePlusDeadRuleStringToFunction(ruleString, neighbourIndex = null) {
    // Extract the birth and survival lists from the rule string
    const [birthList, survivalList] = extractLists(ruleString);

    if (neighbourIndex == null) {
        // Return a function that implements the rule
        return function(cellValue, newCellValue, neighbours) {
            // Phase boundaries (original B2/S124, experimenting)
            // See also https://english.rejbrand.se/rejbrand/article.asp?ItemIndex=423
            //var newCellValue = 0;
            if (cellValue % 4 == 1 || cellValue % 4 == 3) {
                if (survivalList.includes(neighbours)) {
                    newCellValue = 1;
                } else {
                    newCellValue = 2;
                }
            } else if (cellValue % 4 == 2) {
                newCellValue = 0;
            } else if (cellValue % 4 == 0) {
                if (birthList.includes(neighbours)){
                    newCellValue = 3;
                }
            }
            return newCellValue;
        }
    } else {
        // Return a function that implements the rule
        return function(cellValue, newCellValue, neighbours) {
            // Phase boundaries (original B2/S124, experimenting)
            // See also https://english.rejbrand.se/rejbrand/article.asp?ItemIndex=423
            neighbours = neighbours[neighbourIndex];
            if (cellValue % 4 == 1 || cellValue % 4 == 3) {
                if (survivalList.includes(neighbours)) {
                    newCellValue = 1;
                } else {
                    newCellValue = 2;
                }
            } else if (cellValue % 4 == 2) {
                newCellValue = 0;
            } else if (cellValue % 4 == 0) {
                if (birthList.includes(neighbours)){
                    newCellValue = 3;
                }
            }
            return newCellValue;
        }
    }
}

var goodRules = [
    //"B2S124", 
    //"B167S2567"
    //"B37S12345"
    "B3S1234", 
    ]


export function randomTwoStateRuleFunction(useDeadCells = false, onlyGoodRules = false) {
    // Generate a random rule string
    var ruleString;
    if (onlyGoodRules) {
        var randomIndex = Math.floor(Math.random() * goodRules.length);
        ruleString = goodRules[randomIndex];
    } else {
        ruleString = generateRandomRule();
    }

    // Return the rule function
    if (useDeadCells) {
        return [ruleString + "D", twoStatePlusDeadRuleStringToFunction(ruleString)];
    } {
        return [ruleString, twoStateNoZeroRuleStringToFunction(ruleString)];
        // return [ruleString, twoStateRuleStringToFunction(ruleString)];
    }
}


export function generateRandomRule() {
    // Generate two random sets of integers between 1 and 8
    var birthNumbers = generateRandomNumbers(1, 8);
    var survivalNumbers = generateRandomNumbers(1, 8);

    // Convert the sets of numbers to strings
    var birthString = birthNumbers.join('');
    var survivalString = survivalNumbers.join('');

    // Return the rule string
    return 'B' + birthString + 'S' + survivalString;
}

function generateRandomNumbers(min, max) {
    var numbers = [];
    for (var i = min; i <= max; i++) {
        // With a 50% chance, add the number to the set
        if (Math.random() < 0.5) {
            numbers.push(i);
        }
    }
    return numbers;
}

function pickRandomElement(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}