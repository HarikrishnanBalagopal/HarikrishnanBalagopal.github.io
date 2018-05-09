function rulesParser(d)
{
  var input = d.impo;
  var prods = {};
  var lines = input.split("\n").filter(line => line !== "");

  for(let line of lines)
  {
    let words = line.split(' ').filter(word => word !== '');

    cout(words);
    cout('-------------------------------------------');

    let variable = words.shift();
    let currps = [], currp = [];

    words.shift();
    while(words.length > 0)
    {
      let token = words.shift();
      if(token === '|')
      {
        currps.push(currp);
        currp = [];
      }
      else if(token !== 'epsilon')
        currp.push(token);
    }

    currps.push(currp);
    prods[variable] = currps;
  }

  cout(prods);

  d.prod_tree = {};
  d.prod_arr = [];

  for(let [key, value] of Object.entries(prods))
  {
    d.prod_tree[key] = value.map(prod => {let foo = {pl: key, pr: prod}; d.prod_arr.push(foo); return foo;});
  }

  cout('-------------------------------------------');
  cout('prod_tree');
  cout(d.prod_tree);
  cout('-------------------------------------------');
  cout('prod_arr');
  cout(d.prod_arr);
}