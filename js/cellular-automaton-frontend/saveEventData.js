export function saveEventData(globalData, event) {
    if (!globalData.saveEventData) {
        return;
    }
    // Extract the rule definition and button information
    // var ruleDefinition = {...globalData.metaRuleDefinition};
    // delete ruleDefinition.secondaryRule;  // Exclude the secondaryRule entry
    // delete ruleDefinition.conditions;  // Exclude the conditions entry
    // var data = {...ruleDefinition, event: event};

    // // Convert the data to CSV
    // var csv = Object.keys(data).join(',') + '\n';  // Add the column names
    // csv += Object.values(data).join(',');  // Add the data

    // // Save the CSV to a file
    // var blob = new Blob([csv], {type: 'text/csv'});
    // var url = URL.createObjectURL(blob);
    // var link = document.createElement('a');
    // link.href = url;
    // link.download = 'dataAutomata.csv';
    // link.click();

    var data = globalData.ruleClass.ruleChain[0].getName();
    var blob = new Blob([data], {type: 'text/plain'});
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'dataAutomata.txt';
    link.click();
}