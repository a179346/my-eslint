const fs = require('fs');

const files = fs.readdirSync(__dirname);

for (const file of files) {
  if (!file.includes('.json')) continue;
  const content = require('./' + file);
  const rules = content.rules;
  const newRules = {};
  const ruleNames = Object.keys(rules).sort();
  for (const ruleName of ruleNames) {
    newRules[ruleName] = rules[ruleName];
  }
  content.rules = newRules;
  fs.writeFileSync('New-' + file, JSON.stringify(content, undefined, 4));
}