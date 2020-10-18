module.exports = function check(str, bracketsConfig) {
  let openConfigs = [];
  let closeConfigs = [];

  bracketsConfig.forEach(item => {
    openConfigs.push(item[0]);
    closeConfigs.push(item[1]);
  });

  let result = [];
  
  for (let i = 0; i < str.length; i++) {
    let j;

    if (closeConfigs.includes(str[i]) && result.length > 0) {
      j = closeConfigs.indexOf(str[i]);
      if (result[result.length - 1] == openConfigs[j]) {
        result.pop();
      } else {
        result.push(str[i]);
      }
    } else if (openConfigs.includes(str[i])) {
      result.push(str[i]);
    } else {
      return false
    }
  }
  return result.length === 0
}
