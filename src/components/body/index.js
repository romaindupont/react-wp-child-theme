const Body = () => {
	return (
		<main className="configurator" id="configurator">
			<iframe id="emersyaIframe" src="https://emersya.com/testEmbedJsApp/RD7SRIAYV4?test_mode=true" frameBorder="0"
width="100%" height="100%" allow="camera;gyroscope;accelerometer;magnetometer" webkitallowfullscreen="true"
mozallowfullscreen="true" allowFullScreen={true} style={{display:"block", background: "#f2f2f2"}}></iframe>
		</main>
	)
}

export default Body;