const { useEffect } = wp.element;
import Noeud from '../../../assets/json/helmetid';
import Aeration from './Helmet/aeration';
import ScrewFunction from './Helmet/screw';
import Pattern from './Helmet/pattern';
import MainColor from './Helmet/mainColor';
import Varnish from './Helmet/varnish';

const Body = ({aerationHelmet, screwPosition, standardValue, varnishHelmet}) => {
	let viewerIframe = null;
	let viewerActive = false;
	let helmetAereationListener = (e) => {
		viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
		Aeration(viewerIframe, aerationHelmet) 
		viewerIframe.postMessage({
			action : 'getCurrentMaterials'
		}, '*');
	}
	let firstConfiguration = (e) => {
		if(e.data && e.data.action == 'onSuccess' && e.data.callAction == 'updateProductNodesInstances'){
			
				viewerIframe.postMessage({
					action : 'setMaterialsGroups',
					values : 
						[
							{
								configurationName : `${standardValue.Helmet_color_type}|${standardValue.Helmet_color}`,
								groupName : 'Helmet_color'
							},
							{
								configurationName : standardValue.Metal_pieces,
								groupName : 'Metal_pieces'
							},
							{
								configurationName :standardValue.Logo,
								groupName : 'Logo'
							},
							{
								configurationName : standardValue.Interior,
								groupName : 'Interior'
							},
							{
								configurationName : standardValue.Helmet_trim,
								groupName : 'Helmet_trim'
							},
							{
								configurationName : standardValue.Rear_text,
								groupName : 'Rear_text'
							},
							
						]
					}, '*');
				
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
						/* Noeud[0].helmet.helmetDesignNoGroove, */
						/* Noeud[0].helmet.helmetDesignGroove ,*/
						Noeud[0].screw.screwsSideChinguard,
						/* Noeud[0].screw.screwsSideNoChinguard,*/
						Noeud[0].screw.screwsTopVisor, 
						/* Noeud[0].screw.screwsTopNoVisor, */
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
		/* viewerIframe.addEventListener('onStateChange', helmetAereationListener, false); */
	}, false);
 	useEffect(() => {
		helmetAereationListener()
	}, [aerationHelmet, ]);
	useEffect(() => {
		ScrewFunction(screwPosition)
	}, [screwPosition]);
	useEffect(() => {
		Pattern(standardValue, aerationHelmet)
	}, [standardValue.Helmet_design_color, standardValue.Helmet_design_type,standardValue.Helmet_design,standardValue.Helmet_color, standardValue.Helmet_color_type]);
	useEffect(() => {
		MainColor(standardValue)
	}, [standardValue.Helmet_color, standardValue.Helmet_color_type]);
	useEffect(() => {
		Varnish(varnishHelmet, aerationHelmet)
	}, [varnishHelmet]);
	return (
		<main className="configurator" id="configurator">
			<iframe
				id="emersyaIframe"
				src="https://emersya.com/showcase/W3C2GS773F"
				frameBorder="0"
				width="100%"
				height="100%"
				allow="camera;gyroscope;accelerometer;magnetometer"
				webkitallowfullscreen="true"
				mozallowfullscreen="true"
				allowFullScreen={true}
				style={{display:"block", background: "#f2f2f2"}}
			></iframe>
		</main>
	)
}

export default Body;
