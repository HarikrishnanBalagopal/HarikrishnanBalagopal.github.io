class GdbGuiView extends React.Component
{
	constructor(props)
	{
		super(props);
	}
	render()
	{
		return (
				<div className="project-details">
                    <h1>Web based GUI for GDB written in Elm</h1>
                    	A Graphical User Interface Front End for the GBU Debugger.<br/>
                    	Written in Elm, the code can be compiled to JS using "elm-make" or "elm-app build".
                    	The resulting JS can be embedded into any html div element.
                    	For more details on building visit <a href="https://github.com/elm-lang/elm-make">Elm Make</a>
                    	and <a href="https://github.com/halfzebra/create-elm-app">Elm App</a>.<br/>
                        <a href="https://github.com/HarikrishnanBalagopal/gdb-gui">Github Repository</a>
                </div>
                );
	}
}