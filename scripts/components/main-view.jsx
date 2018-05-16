class MainView extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
	
		const Switch = ReactRouterDOM.Switch;
		const Route = ReactRouterDOM.Route;

		return (
			<div className="main-view">
				<Route component={BaseView} />
				<div className="details">
					<Switch>
						<Route path="/parser-generator-demo" component={ParserDemoView}/>
					</Switch>
				</div>
			</div>
		);
	}
}