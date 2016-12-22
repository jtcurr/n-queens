/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  //make a master array to hold solutions
  let masterArray = [];
  //each recursive call will create a new sub array with all postions of rooks
  var subArray = [];
  for (var i = 0; i < n; i++) {
    var pushArr = [];
    for (var j = 0; j < n; j++) {
      pushArr.push(0);
    }
    subArray.push(pushArr);
  }
  var recurFunc = function() {

  };
  //loop through master array to see if any arrays pass all the tests
    //if they do then push into master array;
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // check if solution pass our test
  
  return solution;
  
  
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //build a full decission tree
  //use helper functions to eliminate nodes that don't pass nRooks test
  //count the number of passed test

  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
