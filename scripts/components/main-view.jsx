class MainView extends React.Component
{
	constructor(props)
	{
		super(props);
	}
	componentDidMount()
	{
		const modal = document.querySelector('#new-website-modal');
		const modal_overlay = document.querySelector('#new-website-modal-overlay');
		const modal_close_button = document.querySelector('.modal-close-button');

		modal_overlay.classList.remove('hidden');
		modal.classList.remove('hidden');
		modal_close_button.addEventListener('click', () => {
			modal_overlay.classList.add('hidden');
			modal.classList.add('hidden');
		});
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
				<Route component={FooterView} />
			</div>
		);
	}
}