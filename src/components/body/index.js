const { useEffect } = wp.element;
import Noeud from '../../../assets/json/helmetid';

const Body = ({aerationHelmet}) => {
	let viewerIframe = null;
	let viewerActive = false;
	let essai = (e) => {
		console.log(aerationHelmet)
		if(!aerationHelmet) {
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
					[
						Noeud[0].helmet.helmetNoGroove
					],
					localIdsToRemove :
						[Noeud[0].helmet.helmetNoGroove]
				}, 
				"*"
				);
		}
	}
	let firstConfiguration = (e) => {
		if(e.data && e.data.action == 'onSuccess' && e.data.callAction == 'updateProductNodesInstances'){
			viewerIframe.postMessage({
				action : 'setMaterialsGroups',
				values : 
					[
						{
							configurationName : 'plain|black',
							groupName : 'Helmet_color'
						},
						{
							configurationName : 'titanium',
							groupName : 'Metal_pieces'
						},
						{
							configurationName : 'V_Text|white',
							groupName : 'Logo'
						},
						{
							configurationName : 'suede|blue',
							groupName : 'Interior'
						},
						/* {
							configurationName : 'rubber|white',
							groupName : 'Helmet_trim'
						}, */
						{
							configurationName : 'ECE|M',
							groupName : 'Rear_text'
						},
					]
			}, '*');
			window.addEventListener('message', essai, false);
		}
	}
	let viewerEventListener =  function(event){
		console.log(event.data.action, event, event.data.callAction)
	
		if(event.data && event.data.action == 'onStateChange'){
			if(event.data.state.viewerState == 'loaded' || event.data.state.viewerState == 'fallbackloaded'){
				viewerActive = true;
				viewerIframe.postMessage({
					action : 'setSceneryBackgroundColor',
					color : '#f2f2f2'
				},'*');
					
				viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
					[
						Noeud[0].helmet.helmetGroove,
						Noeud[0].helmet.helmetElements,
						Noeud[0].helmet.helmetCoatingGroove,
						Noeud[0].helmet.helmetTrimRubber,
						Noeud[0].flap.pullingFlapNylon,
						Noeud[0].screw.screwsBaseHelmet,
						Noeud[0].screw.screwsBaseChinguard,
						Noeud[0].screw.screwsSideChinguard,
						Noeud[0].screw.screwsTopVisor,
						Noeud[0].visor.visorPeak
						/* Noeud[0].custom.rearEngraving */
					],
					localIdsToRemove :
						[]
				}, 
				"*"
				);
				window.addEventListener('message', firstConfiguration, false);
			}
		}
		if(event.data && event.data.action == 'onError'){
			console.log(event)
		}
	};
	window.addEventListener('load', function() {
		viewerIframe = document.getElementById('emersyaIframe').contentWindow;  
		window.removeEventListener('message', viewerEventListener, false);
		viewerIframe.postMessage({ 
			action : "registerCallback" 
		}, '*');
		window.addEventListener('message', viewerEventListener, false);
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

export default Body;