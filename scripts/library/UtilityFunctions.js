function compareItemArray(itemArray1, itemArray2)
{
  if (itemArray1.length !== itemArray2.length)return false;
  return itemArray1.every((i1, idx) => compareItems(i1, itemArray2[idx]));
}

function compareItems(i1, i2)
{
  return i1.dot === i2.dot && compareArrayOfStrings(i1.la, i2.la) && compareProds(i1.prod, i2.prod);
}

function compareProds(p1, p2)
{
  return p1.pl === p2.pl && compareArrayOfStrings(p1.pr, p2.pr);
}

function compareArrayOfStrings(a1, a2)
{
  if(a1.length !== a2.length)return false;
  return a1.every((s1, i) => s1 === a2[i]);
}

function nitem(production, lookAheads)
{
  return { prod: production, dot: 0, la: lookAheads };
}

function tableInsert(table, row, column, entry)
{
  if(table[row][column] !== undefined)
  {
    alert(`S/R conflict on row: ${row}, column: ${column}: ${entry}`);
    return;
  }
  if(entry === "R0")entry = "accept";
  table[row][column] = entry;
}

function isTerminal(token)
{
  return !/[A-Z]/.test(token[0]);
}

function arrayInsertIfNotPresent(array, string)
{
  if(!array.includes(string))array.push(string);
}

function stateAddAbsentItems(state, itemsToAdd)
{
  var itemsAdded = [];

  for(let itemToAdd of itemsToAdd)
  {
    if(state.items.every(existingItem => !compareItems(existingItem, itemToAdd)))
    {
      state.items.push(itemToAdd);
      itemsAdded.push(itemToAdd);
    }
  }

  return itemsAdded;
}