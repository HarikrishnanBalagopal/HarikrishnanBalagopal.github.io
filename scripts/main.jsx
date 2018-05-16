const context = {};

const HashRouter = ReactRouterDOM.HashRouter;

//initialize(context);
ReactDOM.render(
	<HashRouter>
		<MainView />
	</HashRouter>,
	select('#app')
);