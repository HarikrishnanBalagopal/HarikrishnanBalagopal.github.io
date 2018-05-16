class AudioVisualizerView extends React.Component
{
	constructor(props)
	{
		super(props);
	}
	render()
	{
		return (
			    <div className="project-details">
                    <h1>Audio Visualizer Extension for Chrome</h1>
                    	Chrome Extension to visualize the FFT of a video's audio playing in the browser.<br/>
                        Uses the Web Audio API and paper.js to render an audio visualizer element for Youtube videos.
                        Can be made to work on other sites simply by changing the manifest.json and the target element in the .js file.<br/>
                        <a href="https://github.com/HarikrishnanBalagopal/chrome-audio-visualizer">Github Repository</a><br/>
                        <img src="https://raw.githubusercontent.com/HarikrishnanBalagopal/chrome-audio-visualizer/master/demo.gif"></img>
                </div>
                );
	}
}