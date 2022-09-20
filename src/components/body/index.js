const { useEffect } = wp.element;
import Noeud from '../../../assets/json/helmetid';
import Aeration from './Helmet/aeration';
import ScrewFunction from './Helmet/screw';
import Pattern from './Helmet/pattern';
import MainColor from './Helmet/mainColor';
import Varnish from './Helmet/varnish';
import Logo from './Helmet/logo';
import Interior from './Helmet/interior';
import Trim from './Helmet/trim';
import MetalParts from './Helmet/metalParts';
import Zippers from './Helmet/zippers';
import BackNumber from './Helmet/backNumber';
import LeftNumber from './Helmet/leftNumber';
import RightNumber from './Helmet/rightNumber';
import Engraving from './Helmet/engraving';
import RearText from './Helmet/rearText';

import AerationChin from './Chinguard/aeration';
import PatternChin from './Chinguard/pattern';
import MainColorChin from './Chinguard/mainColor';
import VarnishChin from './Chinguard/varnish';
import TrimChin from './Chinguard/trim';

import VisorChoice from './Visor/VisorChoice';

const Body = ({
	aerationHelmet, 
	screwPosition, 
	standardValue, 
	varnishHelmet, 
	backNumberWindow,
	leftNumberWindow,
	rightNumberWindow,
	backEngraving,
	aerationChin,
	varnishChin,
	setScreenshotsWait,
	setLoader
}) => {
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
								configurationName :`${standardValue.Logo}|${standardValue.Logo_color}`,
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
								configurationName : `${standardValue.Rear_text_certification}|${standardValue.Rear_text_size}`,
								groupName : 'Rear_text'
							},	
						]
					}, '*');
		}
	}
	let viewerEventListener =  function(event){
		console.log(event.data.action, event, event.data.callAction )
		if(event.data && event.data.action == 'onStateChange'){
			if(event.data.state.loadingProgress === 1){
				setTimeout(()=>setLoader(true) , '2000')
			}
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
						Noeud[0].screw.screwsSideChinguard,
						Noeud[0].screw.screwsTopVisor, 
						Noeud[0].visor.visorPeak,
						Noeud[0].visor.visorPeakCoating
					],
					localIdsToRemove :
					[]
				}, 
				"*"
				);

				window.addEventListener('message', firstConfiguration, false);
			}
		}
		if(event.data && event.data.action == 'onScreenshots'){
			setScreenshotsWait({
				wait: true,
				arrayScreen : [
					event.data.screenshots[0],
					event.data.screenshots[1],
					event.data.screenshots[2],
					event.data.screenshots[3]
				]
			})
			
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
		helmetAereationListener()
	}, [aerationHelmet]);
	useEffect(() => {
		ScrewFunction(screwPosition)
	}, [screwPosition]);
	useEffect(() => {
		Pattern(standardValue, aerationHelmet)
	}, [standardValue.Helmet_design_type,standardValue.Helmet_design,standardValue.Helmet_color]);
	useEffect(() => {
		MainColor(standardValue)
	}, [standardValue.Helmet_color, standardValue.Helmet_color_type]);
	useEffect(() => {
		Varnish(varnishHelmet, aerationHelmet)
	}, [varnishHelmet]);
	useEffect(() => {
		Logo(standardValue)
	}, [standardValue.Logo_color, standardValue.Logo]);
	useEffect(() => {
		Interior(standardValue)
	}, [standardValue.Interior]);
	useEffect(() => {
		Trim(standardValue)
	}, [standardValue.Helmet_trim]);
	useEffect(() => {
		MetalParts(standardValue)
	}, [standardValue.Metal_pieces]);
	useEffect(() => {
		Zippers(standardValue)
	}, [standardValue.flap]);
	useEffect(() => {
		BackNumber(backNumberWindow)
	}, [backNumberWindow]);
	useEffect(() => {
		LeftNumber(leftNumberWindow)
	}, [leftNumberWindow]);
	useEffect(() => {
		RightNumber(rightNumberWindow)
	}, [rightNumberWindow]);
	useEffect(() => {
		Engraving(backEngraving)
	}, [backEngraving]);
	useEffect(() => {
		RearText(standardValue)
	}, [standardValue.Rear_text_certification, standardValue.Rear_text_size]);
	useEffect(() => {
		AerationChin(aerationChin)
	}, [aerationChin]);
	useEffect(() => {
		PatternChin(standardValue, aerationChin)
	}, [standardValue.Chinguard_design_type,standardValue.Chinguard_design,standardValue.Chinguard_color]);
	useEffect(() => {
		MainColorChin(standardValue)
	}, [standardValue.Chinguard_color,standardValue.Chinguard_color_type]);
	useEffect(() => {
		VarnishChin(varnishChin, aerationChin)
	}, [varnishChin]);
	useEffect(() => {
		TrimChin(standardValue)
	}, [standardValue.Chinguard_trim]);
	useEffect(() => {
		VisorChoice(standardValue)
	}, [standardValue.Visor_peak_color,standardValue.Visor_peak_type,standardValue.Visor_color,,standardValue.Visor_type]);
		return (
		<main className="configurator" id="configurator">
			<iframe
				id="emersyaIframe"
				/* src="https://emersya.com/showcase/W3C2GS773F" */
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
