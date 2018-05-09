const cout = console.log;

function select(s){return document.querySelector(s);}

const productionTreeString = "{\"S'\":[{\"pl\":\"S'\",\"pr\":[\"Statements\"]}],\"Statements\":[{\"pl\":\"Statements\",\"pr\":[\"Statement\",\"Statements\"]},{\"pl\":\"Statements\",\"pr\":[]}],\"Statement\":[{\"pl\":\"Statement\",\"pr\":[\"(\",\"identifier\",\"Parameters\",\")\"]}],\"Parameters\":[{\"pl\":\"Parameters\",\"pr\":[\"Parameter\",\"Parameters\"]},{\"pl\":\"Parameters\",\"pr\":[]}],\"Parameter\":[{\"pl\":\"Parameter\",\"pr\":[\"Statement\"]},{\"pl\":\"Parameter\",\"pr\":[\"identifier\"]},{\"pl\":\"Parameter\",\"pr\":[\"number\"]},{\"pl\":\"Parameter\",\"pr\":[\"string\"]}]}";
const productionsArrayString = "[{\"pl\":\"S'\",\"pr\":[\"Statements\"]},{\"pl\":\"Statements\",\"pr\":[\"Statement\",\"Statements\"]},{\"pl\":\"Statements\",\"pr\":[]},{\"pl\":\"Statement\",\"pr\":[\"(\",\"identifier\",\"Parameters\",\")\"]},{\"pl\":\"Parameters\",\"pr\":[\"Parameter\",\"Parameters\"]},{\"pl\":\"Parameters\",\"pr\":[]},{\"pl\":\"Parameter\",\"pr\":[\"Statement\"]},{\"pl\":\"Parameter\",\"pr\":[\"identifier\"]},{\"pl\":\"Parameter\",\"pr\":[\"number\"]},{\"pl\":\"Parameter\",\"pr\":[\"string\"]}]";
const code = "(add 1 1)";

const productionsTextAreaValue =
`S' -> Statements
Statements -> Statement Statements | epsilon
Statement -> ( identifier Parameters )
Parameters -> Parameter Parameters | epsilon
Parameter -> Statement | identifier | number | string`;