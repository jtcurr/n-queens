107 lines (92 sloc)  3.8 KB
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
  //create a solution array
  if (n === 1) {
    return [[1]];
  }
  if (n === 2) {
    return [[1, 0], [0, 1]];
  }
  var masterArray = [];
  //create a for loop to the iterate over each column in the first row with length of n
    //CREATE an instance of Board object
  var board = new Board({n: n}); //pass an array or object
  for (var i = 0; i < n; i++) {
    //create a loop that will increment the row value up
    for (var key in board.attributes) {
      if (isNaN(parseInt(key)) === false ) {
      //loop through current row
        for (var x = i; x < n; x++) {
        // set next index to 1
          board.attributes[key][x] = 1;

          if (board.hasAnyRowConflicts() === false && board.hasAnyColConflicts() === false) {
          //if the board is conflict free, complete or not, push it to the master array
          // copy the current board into a string to prevent overwriting
            var replica = JSON.stringify(board.attributes);
            console.log(replica);
            masterArray.push(replica);
          }
        // run helper function (any row conflict and any col conflict) to see if there is a conflict
          if (board.hasAnyRowConflicts() === true || board.hasAnyColConflicts() === true) { //if there is a conflict, return that index to zero
            board.attributes[key][x] = 0;
          }
        }  
      } 
    }    
  }

  //unstringify each object in master array
  for (var q = 0; q < masterArray.length; q++) {
    console.log(masterArray[q]);
    JSON.parse(masterArray[q]);
  }
  //console.log(masterArray);
  //loop through each element in master array to find wrong number of 1's
  for (var j = 0; j < masterArray.length; j++) {
    var counter = 0;
    //if a board does not have n 1's, pop it from the array
    for (var row in masterArray[j]) {
      for (var m = 0; m < masterArray[j][row].length; m++) {
        if (masterArray[j][row][m] === 1) {
          counter++;
        }
      }
    }
    if (counter < n) {
      masterArray.splice(j, 1);
    }
  }
  //console.log(masterArray);
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(masterArray[0]));
  // check if solution pass our test
  
  return masterArray[0];
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
