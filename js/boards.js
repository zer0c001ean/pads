var boards = [
  {
    name: 'memedrums',
    pads: [
      [0, '2', 40],
      [1, 's'],
      [3, 'b'],
      // [4, 'd'],
      [18, 't'],
      [5, 'y', 48],
      [28, 'u', 51],
      [2, 'i', 45],
      [19, 'm', 52],
      [20, 'n', 38],
      // [21, 'o'],
      // [22, 'p'],
      [25, 'v'],
      [26, 'space', 49],
      // [27, '3'],
      [29, '5', 57],
      [31, '6', 46],
      // [32, '7'],
      [33, '8', 37],
      [34, '9', 34],
      [35, '0', 42],
      [36, 'a'],
      [37, 'c', 36],
      [38, 'd'],
    ]
  },
  {
    name: 'middledub',
    pads: [
      [8, 's'],
      [6, 'u'],
      [7, 'i'],
      [9, 't'],
      [10, 'c'],
      [11, 'v'],
      [12, 'w'],
      [13, 'x'],
      [14, 'y'],
      [15, 'z'],
      [16, 'a'],
      [17, 'b'],
    ]
  },
];

var boardsByName = {};
boards.forEach(function(board){
  boardsByName[board.name] = board;
});
