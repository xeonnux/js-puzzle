// todo
const hintButton = document.getElementById('show-hint');
const hint = document.querySelector('.hint');

hintButton.addEventListener('click', (event) => {
  hint.classList.toggle('active');
});

const canMove = (tile) => {
  const tileRow = tile.parentElement.rowIndex;
  const tileCol = tile.cellIndex;
  const emptyTile = document.querySelector('.empty');
  const emptyTileRow = emptyTile.parentElement.rowIndex;
  const emptyTileCol = emptyTile.cellIndex;

  return (tileCol === emptyTileCol && tileRow === emptyTileRow + 1) ||
         (tileCol === emptyTileCol && tileRow === emptyTileRow - 1) ||
         (tileRow === emptyTileRow && tileCol === emptyTileCol + 1) ||
         (tileRow === emptyTileRow && tileCol === emptyTileCol - 1);
}

const moveTile = (element) => {
  // 1. Select empty tile
  const emptyTile = document.querySelector('.empty');
  // 2. Replace its content with the 'element' content
  emptyTile.innerHTML = element.innerHTML;
  // 3. Remove its empty class
  emptyTile.classList.remove('empty');
  // 4. Empty 'element' content
  element.innerHTML = "";
  // 5. Add empty class to 'element'
  element.classList.add('empty');
};

const checkplayerwins = () => {
  const tilesOrder = Array.from(document.querySelectorAll('td')).map(element => Number.parseInt(element.innerHTML, 10));
  console.log(tilesOrder)
  if (tilesOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
    alert("You Win!");
  }

}


// 1. Select all tiles
// 2. For each tile
//   Listen to the click event
//   If it has an empty neigbour
//   swap the tile and the empty space
// 3. Check if the player wins

const tiles = document.querySelectorAll('td');

tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    // console.log(canMove(event.currentTarget));
    // console.log(event.currentTarget);
    if (canMove(tile)) {
      //TODO: swap code
      moveTile(tile);
      checkplayerwins();
    }
  });
});
