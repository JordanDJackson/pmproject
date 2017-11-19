module.exports = function getSortStuff(sortByType,sortByVal) {
    console.log("I am working in here!!");
    var monOptions= {};
    switch (sortByVal) {
      case 'Highest first':
        monOptions['sortBy'] = 'total';
        monOptions['value'] = -1;
        break;
      case 'Lowest first':
        monOptions['sortBy'] = 'total';
        monOptions['value'] = 1;
        break;
      default:
        break;
    }
    return monOptions;

}
