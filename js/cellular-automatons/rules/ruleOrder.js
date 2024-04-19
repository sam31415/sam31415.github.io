export function ruleOrder(rule) {
    if (rule.includes("Secondary") || rule.includes("Variable")){
        return 2;
    } else if (rule.includes("Tertiary")){
        return 3;
    }
    return 1;
}