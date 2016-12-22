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
  var Tree = function (val) {
    this.value = val,
    this.children = [];
  };
  Tree.prototype.addChild = function (val) {
    var child = new Tree(val);
    this.children.push(child);
  };
  var masterTree = new Tree(new Board({n: n}));
  //create a for loop to the iterate over each column in the first row with length of n
  for (var i = 0; i < n; i++) {
  //create an instance of Board object
    var board = new Board({n: n}); //pass an array or object
    //set index of first row to 1
    board.attributes[0][i] = 1;
    // Hanyen: store board object in Tree.value
    masterTree.addChild(board);

    //create a loop that will increment the row value up

      //loop  that will set next index to 1
        // run helper function (any row conflict and any col conflict) to see if there is a conflict
          //if there is not a conlict add as a child to tree
          //if there is a conflict, return that index to zero
  }

  

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
