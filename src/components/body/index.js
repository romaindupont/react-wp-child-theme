const { useEffect } = wp.element;

const Body = () => {


	useEffect(() => {
		const viewerIframe = document.getElementById("emersyaIframe").contentDocument.defaultView;
		viewerIframe.postMessage({ 
			action : "registerCallback" 
			}, { 
				action : "addProductNodesInstances", 
				parentLocalId: 1, 
				localId:  {helmetLocalId : 2}, 
				matrix: [1, 0, 0, 0, 
					0, 1, 0, 0, 
					0, 0, 1, 0, 
					0, 0, 0, 1]
					, 
				SKU: "helmetDesign_groove"
				} /* ,  { 
					action : "addProductNodesInstances", 
					parentLocalId: 1, 
					localId: 1, 
					matrix: [1, 0, 0, 0, 
						0, 1, 0, 0, 
						0, 0, 1, 0, 
						0, 0, 0, 1]
						, 
					SKU: "helmetDesign_groove"
					}, */ /*{ 
						action : "addProductNodesInstances", 
						parentLocalId: 1, 
						localId: 1, 
						matrix: [1, 0, 0, 0, 
							0, 1, 0, 0, 
							0, 0, 1, 0, 
							0, 0, 0, 1]
							, 
						SKU: "helmetCoating_groove"
						}, */);

						window.addEventListener("message", function(event){ 
							if(event && event.data && event.data.action == "onStateChange"){ 
							// Les données sont accessibles dans event.data object  
							console.log(event)
							} 
							}, false);		 
	}, []);
	return (
		<main className="configurator" id="configurator">
			<iframe id="emersyaIframe" src="https://emersya.com/showcase/W3C2GS773F" frameBorder="0"
width="100%" height="100%" allow="camera;gyroscope;accelerometer;magnetometer" webkitallowfullscreen="true"
mozallowfullscreen="true" allowFullScreen={true} style={{display:"block", background: "#f2f2f2"}}></iframe>
		</main>
	)
}
/* https://emersya.com/showcase/W3C2GS773F https://emersya.com/testEmbedJsApp/RD7SRIAYV4?test_mode=true*/
export default Body;