function lexer2(string)
{
  const tokens = [];
  const lines = string.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  
  for(let line of lines)
  {
    let words = line.split(' ').map(word => word.trim()).filter(word => word.length > 0);

  }

  return tokens;
}

function lexer(s)
{
  var tokens = [];
  var i = 0;
  while (i < s.length) {
    ch = s[i];
    if (/\s/.test(ch)) {
      i++;
      continue;
    }
    if (/[()]/.test(ch)) {
      tokens.push({ type: ch, value: ch });
      i++;
      continue;
    }
    if (/[a-z+\-_*=<>?!]/.test(ch)) {
      var token = "";
      do {
        token += s[i];
        i++;
      } while (i < s.length && /[a-z0-9+\-_*=<>?!]/.test(s[i]));
      tokens.push({ type: "identifier", value: token });
      continue;
    }
    if (/[0-9]/.test(ch)) {
      var token = "";
      do {
        token += s[i];
        i++;
      } while (i < s.length && /[0-9.]/.test(s[i]));
      tokens.push({ type: "number", value: parseFloat(token) });
      continue;
    }
    if (ch === '"') {
      var token = "";
      while (++i < s.length && s[i] !== '"') token += s[i];
      tokens.push({ type: "string", value: token });
      i++;
      continue;
    }
    i++;
  }
  tokens.push({ type: "$", value: "$" });
  return tokens;
}