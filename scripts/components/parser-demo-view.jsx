class ParserDemoView extends React.Component
{
	constructor(props)
	{
		super(props);

        this.state = {
            lexerRules: '',
            parserRules: productionsTextAreaValue,
            input: code,
            output: 'haha'
        };
        this.data = {};
        this.data.table = {};

        this.handleLexerChange = this.handleLexerChange.bind(this);
        this.handleParserChange = this.handleParserChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOutputClear = this.handleOutputClear.bind(this);
        this.handleParse = this.handleParse.bind(this);
        this.handleGenerateLexer = this.handleGenerateLexer.bind(this);
        this.handleGenerateParser = this.handleGenerateParser.bind(this);

        //this.handleGenerateParser('setup');
	}

    handleLexerChange(e)
    {
        this.setState({lexerRules: e.target.value});
    }

    handleParserChange(e)
    {
        this.setState({parserRules: e.target.value});
    }

    handleInputChange(e)
    {
        this.setState({input: e.target.value});
    }

    handleOutputClear(e)
    {
        this.setState({output: ''});
    }

    handleParse(e)
    {
        const tokens = lexer(this.state.input);

        cout("Tokens:");
        cout(tokens);

        const prods = this.data.productionsArray.map(prod => ({ left: prod.pl, right: prod.pr.length }));
        const ast = lrParser(tokens, this.data.table, prods);

        cout('parsed!!!:');
        cout(ast);

        this.setState((ps, props) => ({output: JSON.stringify(ast)}));
    }

    handleGenerateLexer(e)
    {
        cout('generating new lexer');
    }

    handleGenerateParser(e)
    {
        cout('generating new parser');
        const foo = {impo: this.state.parserRules};
        rulesParser(foo);
        this.data.productionTree = foo.prod_tree;
        this.data.productionsArray = foo.prod_arr;

        this.data.states = computeLR1States(this.data.productionTree);

        cout("States!!!!!!!!:");
        cout(this.data.states);

        this.data.table = generateLR1Table({states: this.data.states, productionsArray: this.data.productionsArray});
    }

	render()
	{
		return (
			<div className="parser-demo-view">
                <div className="project-details">
                    <h1>Demo for Parser Generator library in JS</h1>
                        A demo of <a target="_blank" href="https://github.com/HarikrishnanBalagopal/parser-generator">Parser Generator Library</a> for generating CLR(1) parsing table.<br/><br/>
                        Instructions:
                        <ol>
                            <li>Click "Gen Lexer" to generate the lexer object.</li>
                            <li>Input the context free grammar producton rules in the bottom left "PARSER" rules area.</li>
                            <li>Click "Gen Parser" to generate the CLR(1) parsing table for that grammar.</li>
                            <li>Input some code to be parsed in the "INPUT" column.</li>
                            <li>Click "PARSE" to generate the Abstract Syntax Tree by parsing the code, Output will be displayed in the "OUTPUT" column.</li>
                        </ol>
                </div>
        		<div className="lexer">
            		<div className="controls">
                        <span>LEXER</span>
                        <input id="lex-file" type="file" />
                        <button onClick={this.handleGenerateLexer}>GEN LEXER</button>
                    </div>
            		<div className="rules"><textarea onChange={this.handleLexerChange} value={this.state.lexerRules}></textarea></div>
        		</div>
        		<div className="parser">
        		    <div className="controls">
                        <span>PARSER</span>
                        <input id="lex-file" type="file" />
                        <button onClick={this.handleGenerateParser}>GEN PARSER</button>
                    </div>
        		    <div className="rules"><textarea onChange={this.handleParserChange} value={this.state.parserRules}></textarea></div>
                </div>
        		<div className="input">
        		    <div className="controls">
                        <span>INPUT</span>
                        <input id="lex-file" type="file" />
                        <button onClick={this.handleParse}>PARSE</button>
                    </div>
        		    <div className="code"><textarea onChange={this.handleInputChange} value={this.state.input}></textarea></div>
        		</div>
        		<div className="output">
                    <div className="controls">
                        <span>OUTPUT</span>
                        <button onClick={this.handleOutputClear} title="Trash Output"><i className="fa fa-trash"></i></button>
                    </div>
        		    <div className="console"><textarea value={this.state.output} readOnly></textarea></div>
        		</div>
    		</div>
			);
	}
}