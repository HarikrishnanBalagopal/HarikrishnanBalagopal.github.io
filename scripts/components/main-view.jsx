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
						<Route path="/shop" component={ShopView}/>
						<Route path="/forum" component={ForumView}/>
						<Route path="/parser-generator-demo" component={ParserDemoView}/>
						<Route path="/audio-visualizer" component={AudioVisualizerView}/>
						<Route path="/gdb-gui" component={GdbGuiView}/>
					</Switch>
				</div>
				<br/>
				<Route component={FooterView} />
			</div>
		);
	}
}