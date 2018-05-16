class FooterView extends React.Component
{
	constructor(props)
	{
		super(props);
	}
	render()
	{
		return (
			    <div className="footer">
                    <h1>Some Awesome JS demos</h1>
                    	<ul>
                    		<li><a href="http://madebyevan.com/webgl-path-tracing/">WebGL path tracing demo</a></li>
                    		<li><a href="http://aem1k.com/">JavaScript Hacks and Creative Coding</a></li>
                    		<li><a href="http://aem1k.com/world/">Spinning Globe Quine</a></li>
                    		<li><a href="https://youtu.be/RTxtiLp1C8Y">Martin Kleppe: 1024+ Seconds of JS Wizardry -- JSConf EU 2013</a></li>
                    	</ul>
                </div>
               );
	}
}