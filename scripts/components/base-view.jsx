class BaseView extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		const NavLink = ReactRouterDOM.NavLink;

		return (
			<div className="base-view">
				<div className="banner"><h1>Harikrishnan Balagopal : Programmer</h1></div>
				<nav className="navigation">
					<ol>
						<li><a href="/s2_symbolic_fuzzing.pdf">Research</a></li>
						<li><NavLink to="/parser-generator-demo">Parser Generator Library</NavLink></li>
						<li><NavLink to="/forum">Forum</NavLink></li>
						<li><NavLink to="/shop">Shop</NavLink></li>
						<li><NavLink to="/audio-visualizer">Audio Visualizer Chrome Extension</NavLink></li>
						<li><NavLink to="/gdb-gui">GUI written in Elm for GDB</NavLink></li>
					</ol>
				</nav>
			</div>);
	}
}