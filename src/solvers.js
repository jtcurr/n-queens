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
  //hardcode all combination of nRook board layout
  //use our helper functions to pick the correct ones
  //push one correct board to solution

  //declare a new array 
  // [[0, 1], [1, 0]]
  // [[1, 0], [0, 1]]
  var solution = [];
  if (n === 1) {
    solution = [[1]];
  } 
  if (n === 2) {
    solution = [[0, 1], [1, 0]];
  }
  // var board = {
  //   0: [0, 1], 
  //   1: [1, 0]};
  // };

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
