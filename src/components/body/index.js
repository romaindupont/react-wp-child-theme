const { useEffect } = wp.element;

const Body = () => {
	let viewerIframe = null;
	let viewerActive = false;
	let viewerEventListener =  function(event){
		if(event.data && event.data.action == 'onStateChange'){
			if(event.data.state.viewerState == 'loaded' || event.data.state.viewerState == 'fallbackloaded'){
				viewerActive = true;
				viewerIframe.postMessage({
					action : 'setSceneryBackgroundColor',
					color : '#f2f2f2'},'*');
				viewerIframe.postMessage(
						{
						action : "updateProductNodesInstances",
						nodesToAdd :
						[
							{
								parentLocalId: 1,
								localId: 2,
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: "helmet_noGroove"
							},
				/* 		 	{
								parentLocalId: 1,
								localId: 3,
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: "helmet_groove"
							},  */
				 			{
								parentLocalId: 1,
								localId: 4,
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: "helmet_elements"
							},
							/*{
								parentLocalId: 1,
								localId: 5,
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: "helmetDesign_groove"
							}, */
/* 							{
								parentLocalId: 1,
								localId: 6,
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: "helmetDesign_noGroove"
							}, */
/* 							{
								parentLocalId: 1,
								localId: 7,
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: "helmetCoating_groove"
							}, */
							/* {
								parentLocalId: 1,
								localId: 8,
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: "helmetCoating_noGroove"
							}, */
/* 							{
								parentLocalId: 1,
								localId: 9,
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: "helmetTrim_rubber"
							}, */
				/* 			{
								parentLocalId: 1,
								localId: 10,
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: "helmetTrim_leather"
							}, */
				/* 			{
								parentLocalId: 1,
								localId: 11,
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: "pullingFlap_nylon"
							}, */
	/* 						{
								parentLocalId: 1,
								localId: 12,
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: "pullingFlap_leather"
							}, */
						],
						localIdsToRemove :
						[]
						},
						"*"
						);
			}
		}
		viewerIframe.postMessage(
			{
			action : "getCurrentProductNodesConfiguration",
			},
			"*"
			) ;
		if(event.data && event.data.action == 'onError'){
			
		}
	};
	window.addEventListener('load', function(event) {
		viewerIframe = document.getElementById('emersyaIframe').contentWindow;  
		window.removeEventListener('message', viewerEventListener ,false);
		viewerIframe.postMessage({ 
			action : "registerCallback" 
		}, '*');
		window.addEventListener('message', viewerEventListener, false);
		viewerIframe.postMessage({
			action : 'getViewerState'
		}, '*');
/* 		window.addEventListener("message", function(event){
			
			switch(event.data.action){
				case "onSavedConfiguration": {
					console.log(event)
				}
			case "onCurrentProductNodesConfigurationGet": {
				console.log("on passe ici?")
			let productNodes = [];
			event.data.productNodes.forEach(el => productNodes.push(el.localId))
			console.log("dev log, not in prod :", productNodes)
			break;}}}) */	
	}, false);
	useEffect(() => {
		
	}, []);
	return (
		<main className="configurator" id="configurator">
			<iframe id="emersyaIframe" src="https://emersya.com/showcase/W3C2GS773F" frameBorder="0"
width="100%" height="100%" allow="camera;gyroscope;accelerometer;magnetometer" webkitallowfullscreen="true"
mozallowfullscreen="true" allowFullScreen={true} style={{display:"block", background: "#f2f2f2"}}></iframe>
		</main>
	)
}
/* https://emersya.com/showcase/W3C2GS773F https://emersya.com/testEmbedJsApp/RD7SRIAYV4?test_mode=true  DT0STRJNW1*/
export default Body;