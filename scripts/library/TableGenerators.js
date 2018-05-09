function follow({prod_tree, firsts, follows, token})
{
  if(follows[token] !== undefined)return follows[token];

  follows[token] = [];

  for(let productions of Object.values(prod_tree))
  {
    for(let production of productions)
    {
      const productionEnd = production.pr.length - 1;
      for(let [position, terminalOrVariable] of Object.entries(production.pr))
      {
        if(terminalOrVariable !== token)continue;
        if(position < productionEnd)
          first({prod_tree, firsts, follows, token: production.pr[position + 1]})
          .map(f => arrayInsertIfNotPresent(follows[token], f));
        else
          follow({prod_tree, firsts, follows, token: production.pl})
          .map(f => arrayInsertIfNotPresent(follows[token], f));
      }
    }  
  }
  
  return follows[token];
}

function first({prod_tree, firsts, follows, token})
{
  if(isTerminal(token))return [token]; // TODO: Same check twice, in mod_first

  if(firsts[token] !== undefined)return firsts[token];

  firsts[token] = [];

  for(let prod of prod_tree[token])
  {
    if(prod.pr.length > 0)
      first({prod_tree, firsts, follows, token: prod.pr[0]})
      .map(f => arrayInsertIfNotPresent(firsts[token], f));
    else
      follow({prod_tree, firsts, follows, token: prod.pl})
      .map(f => arrayInsertIfNotPresent(firsts[token], f));
  }

  return firsts[token];
}

function modifiedFirst({prod_tree, firsts, follows, mod_firsts, token})
{
  if(isTerminal(token))return [token];

  if(mod_firsts[token] !== undefined)return mod_firsts[token];

  mod_firsts[token] = [];

  for(let prod of prod_tree[token])
  {
    if(prod.pr.length > 0)
      first({prod_tree, firsts, follows, token: prod.pr[0]}).map(f => arrayInsertIfNotPresent(mod_firsts[token], f));
    else
      arrayInsertIfNotPresent(mod_firsts[token], "epsilon");
  }

  return mod_firsts[token];
}

function computeNewItems({item, prod_tree, firsts, follows, mod_firsts})
{
  if(item.dot >= item.prod.pr.length)return []; //final item

  var token = item.prod.pr[item.dot]; //token to close
  if(isTerminal(token))return [];

  let lookAheads = [];

  if(item.dot === item.prod.pr.length - 1)lookAheads = item.la.slice();
  else
  {
    const productionRHS = item.prod.pr;
    let idx = item.dot + 1;
    let containsEpsilon = true;
    while(containsEpsilon && idx < productionRHS.length)
    {
      containsEpsilon = false;
      const newLookAheads = modifiedFirst({prod_tree, firsts, follows, mod_firsts, token: productionRHS[idx++]});
      for(let f of newLookAheads)
      {
        if(f === "epsilon")containsEpsilon = true;
        else arrayInsertIfNotPresent(lookAheads, f);
      }
    }
    if(containsEpsilon)item.la.map(lookAhead => arrayInsertIfNotPresent(lookAheads, lookAhead));
  }
  return prod_tree[token].map(production => nitem(production, lookAheads));
}

function closeItems({items, prod_tree, firsts, follows, mod_firsts})
{
  return items
  .map(item => computeNewItems({item, prod_tree, firsts, follows, mod_firsts}))
  .filter(newItems => newItems.length > 0)
  .reduce((accumulator, newItems) => accumulator.concat(newItems), []);
}

function computeTransitions(state)
{
  var transitions = {};
  
  for(let item of state.items)
  {
    if(item.dot === item.prod.pr.length)continue;

    let token = item.prod.pr[item.dot];
  
    if(transitions[token] === undefined)transitions[token] = [];
    transitions[token].push({...item, dot: item.dot + 1});
  }
  
  return transitions;
}

// prod_tree : {variable: [prod1, prod2, prod3, ...]}
// firsts : {variable: [terminals]} computes follow in case of epsilon
// follows : {variable: [terminals]}
// mod_firsts : {variable: [terminals]} just adds "epsilon" instead of follow in case of epsilon

function computeLR1States(prod_tree) 
{
  var firsts = {};
  var follows = {};
  var mod_firsts = {};
  
  const states = [];
  const stack = [];

  var new_sn = 1;
  var currState = { sn: 0, items: [], transitions: {} };
  var itemsToAdd = [nitem(prod_tree["S'"][0], ["$"])];
  var addedItems = stateAddAbsentItems(currState, itemsToAdd);

  while(addedItems.length > 0)
  {
    itemsToAdd = closeItems({items: addedItems, prod_tree, firsts, follows, mod_firsts});
    addedItems = stateAddAbsentItems(currState, itemsToAdd);
  }
  
  states.push(currState);
  stack.push(currState);
  
  while(stack.length > 0)
  {
    currState = stack.pop();
 
    const transitions = computeTransitions(currState);
    for(let [transition, addedItems] of Object.entries(transitions))
    {
      let newState = { sn: new_sn, items: addedItems, transitions: {} };
      while(addedItems.length > 0)
      {
        itemsToAdd = closeItems({items: addedItems, prod_tree, firsts, follows, mod_firsts});
        addedItems = stateAddAbsentItems(newState, itemsToAdd);
      }
 
      const result = states.find(state => compareItemArray(state.items, newState.items));
 
      if(result === undefined)
      {
        states.push(newState);
        stack.push(newState);
        currState.transitions[transition] = newState;
        new_sn++;
      }
      else currState.transitions[transition] = result;
    }
  }
  return states;
}

function generateLR1Table({states, productionsArray})
{
  const table = {};

  for(let state of states)
  {
    table[state.sn] = {};
 
    keyValues = Object.entries(state.transitions)
    for(let [transition, newState] of keyValues)
    {
      const prefix = /[A-Z]/.test(transition) ? "" : "S";
      tableInsert(table, state.sn, transition, prefix + newState.sn);
    }
 
    for(let item of state.items)
    {
      if(item.dot !== item.prod.pr.length)continue;
      let idx = productionsArray.findIndex(prod => compareProds(item.prod, prod));
      for(let l of item.la)tableInsert(table, state.sn, l, "R" + idx);
    }
  }

  return table;
}