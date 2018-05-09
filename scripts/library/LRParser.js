function lrParser(tokens, table, prods)
{
  var tree = {};
  var stack = [{ s: "0", ptr: tree }];
  var i = 0;

  while(i < tokens.length && stack.length > 0)
  {
    let token = tokens[i];
    let state = stack[stack.length - 1];

    let row = table[state.s];
    if(row === undefined)
    {
      alert("Error: No row for state " + state.s + " in table");
      return tree;
    }

    let entry = row[token.type];
    if(entry === undefined)
    {
      alert("Error: No entry for token " + token.type + " in row " + state.s);
      return tree;
    }

    if(entry === "accept")
    {
      stack.pop();
      return stack.pop().ptr;
    }

    if(entry[0] === "S")
    {
      let node = { type: token.type, value: token.value, sub: [] };
      stack.push({ s: token.type, ptr: node });
      stack.push({ s: entry.slice(1) });
      i++;
      continue;
    }

    if(entry[0] === "R")
    {
      let prod = prods[entry.slice(1)];
      if(prod === undefined)
      {
        alert("No production of index " + entry[1]);
        console.log("Token:", token, "\nState:", state);
        return tree;
      }

      let node = { type: prod.left, sub: [] };
      for(let j = 0; j < prod.right; j++)
      {
        stack.pop();
        node.sub.unshift(stack.pop().ptr);
      }

      state = stack[stack.length - 1];
      row = table[state.s];
      entry = row[prod.left];

      stack.push({ s: prod.left, ptr: node });
      stack.push({ s: entry });
      continue;
    }

    alert("Error in table entry " + entry + " for row " + state.s + " for token " + token.type);
    return tree;
  }
}