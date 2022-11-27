const { useEffect, useRef } = wp.element;
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

import ChinguardAction from './Chinguard/chinguard';
import AerationChin from './Chinguard/aeration';
import PatternChin from './Chinguard/pattern';
import MainColorChin from './Chinguard/mainColor';
import VarnishChin from './Chinguard/varnish';
import TrimChin from './Chinguard/trim';

import VisorChoice from './Visor/VisorChoice';
import {MakeAnObjectToOrder} from '../../../utils/ObjectOrder';

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
	setLoader,
	nodesConfiguration,
	setNodesConfiguration,
	tabsChoice,
	downMenu,
	setMaterialVariation,
	withChin,
	typeChoice,
	withVisor,
	backNumberInput,
	leftNumberInput,
	rightNumberInput,
	engravingInput,
}) => {
	let viewerIframe = null;
	let viewerActive = false;
	const notInitialRender = useRef(false);
	const notInitialRenderTwo = useRef(false);
	const notInitialRenderThree = useRef(false);
	const notInitialRenderFour = useRef(false);
	const notInitialRenderFive = useRef(false);
	const notInitialRenderSix = useRef(false);
	const notInitialRenderSeven = useRef(false);
	const notInitialRenderHeight = useRef(false);
	const notInitialRenderNine = useRef(false);
	const notInitialRenderTen = useRef(false);
	const notInitialRenderEleven = useRef(false);
	const notInitialRenderTwelve = useRef(false);
	let helmetAereationListener = (e) => {
		viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
		Aeration(viewerIframe, aerationHelmet, nodesConfiguration, setLoader, standardValue) 
		viewerIframe.postMessage({
			action : 'getCurrentMaterials'
		}, '*');
	}
	let viewerEventListener =  function(event){
		console.log(event.data.action, event, event.data.callAction )
		if(event.data && event.data.action == 'onStateChange'){
			if(event.data.state.viewerState == 'loaded' || event.data.state.viewerState == 'fallbackloaded'){
				setLoader(false)
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
							Noeud[0].screw.screwsSideNoChinguard,
							Noeud[0].screw.screwsTopNoVisor, 
						],
					localIdsToRemove :
						[]
				}, 
				"*"
				);
				setTimeout(() => {
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
							/* {
								configurationName :`${standardValue.Logo}|${standardValue.Logo_color}`,
								groupName : 'Logo'
							}, */
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
				setLoader(true);
				}, '2000');
				viewerIframe.postMessage({action : 'play'},'*');
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
			});
			let configuration = MakeAnObjectToOrder(
				standardValue,
				aerationHelmet,
				varnishHelmet,
				backNumberWindow,
				backNumberInput,
				rightNumberWindow,
				rightNumberInput,
				leftNumberWindow,
				leftNumberInput,
				backEngraving,
				engravingInput,
				screwPosition,
				withChin,
				aerationChin,
				varnishChin,
				withVisor
			);
			 let newConfig = JSON.parse(configuration);
			 setTimeout(()=> {
				setMaterialVariation({
					newConfig
				});
			 }, 10000)
		}
		if(event.data && event.data.action == 'onCurrentProductNodesConfigurationGet'){
			setNodesConfiguration(event.data.productNodes)
			viewerIframe.postMessage({
				action : 'getCurrentMaterials'
			}, '*');
		}
		if(event.data && event.data.action == 'onSuccess' && event.data.callAction == 'updateProductNodesInstances'){
			viewerIframe.postMessage(
				{
				action : "getCurrentProductNodesConfiguration",
				}, "*");
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
		if (notInitialRender.current) {
			helmetAereationListener();
		} else {
			notInitialRender.current = true;
		}
	}, [aerationHelmet]);
	useEffect(() => {
		if (notInitialRender.current) {
			ScrewFunction(screwPosition, nodesConfiguration);
		} else {
			notInitialRender.current = true;
		}
	}, [screwPosition]);
	 useEffect(() => {
		if (notInitialRender.current) {
			Pattern(standardValue, aerationHelmet, nodesConfiguration, setLoader);
		} else {
			notInitialRender.current = true;
		}
	}, [standardValue.Helmet_design_type,standardValue.Helmet_design,standardValue.Helmet_color,standardValue.Helmet_design_color,standardValue.Helmet_color_type]);
	useEffect(() => {
		if (notInitialRender.current) {
			MainColor(standardValue);
		} else {
			notInitialRender.current = true;
		}
	}, [standardValue.Helmet_color, standardValue.Helmet_color_type]);
	useEffect(() => {
		if (notInitialRenderTwo.current) {
			Varnish(varnishHelmet, aerationHelmet, nodesConfiguration, setLoader, standardValue);
		} else {
			notInitialRenderTwo.current = true;
		}
	}, [varnishHelmet]);
 	useEffect(() => {
		if (notInitialRenderThree.current) {
			Logo(standardValue);
		} else {
			notInitialRenderThree.current = true;
		}
	}, [standardValue.Logo_color, standardValue.Logo]);
	useEffect(() => {
		if (notInitialRenderFour.current) {
			Interior(standardValue, setLoader);
		} else {
			notInitialRenderFour.current = true;
		}
	}, [standardValue.Interior]);
	useEffect(() => {
		if (notInitialRenderFive.current) {
			Trim(standardValue, nodesConfiguration, setLoader, aerationHelmet, varnishHelmet);
		} else {
			notInitialRenderFive.current = true;
		}
	}, [standardValue.Helmet_trim]);
	useEffect(() => {
		if (notInitialRender.current) {
			MetalParts(standardValue);
		} else {
			notInitialRender.current = true;
		}
	}, [standardValue.Metal_pieces]);
	useEffect(() => {
		if (notInitialRenderSix.current) {
			Zippers(standardValue, nodesConfiguration, setLoader, aerationHelmet, varnishHelmet);
		} else {
			notInitialRenderSix.current = true;
		}
	}, [standardValue.flap]);
	useEffect(() => {
		if (notInitialRender.current) {
			BackNumber(backNumberWindow, nodesConfiguration, setLoader);
		} else {
			notInitialRender.current = true;
		}
	}, [backNumberWindow]);
	useEffect(() => {
		if (notInitialRender.current) {
			LeftNumber(leftNumberWindow, nodesConfiguration, setLoader);
		} else {
			notInitialRender.current = true;
		}
	}, [leftNumberWindow]);
	useEffect(() => {
		if (notInitialRender.current) {
			RightNumber(rightNumberWindow, nodesConfiguration, setLoader);
		} else {
			notInitialRender.current = true;
		}
	}, [rightNumberWindow]);
useEffect(() => {
		if (notInitialRender.current) {
			Engraving(backEngraving, nodesConfiguration, setLoader, standardValue);
		} else {
			notInitialRender.current = true;
		}
	}, [backEngraving]);
	useEffect(() => {
		if (notInitialRender.current) {
			RearText(standardValue);
		} else {
			notInitialRender.current = true;
		}
	}, [standardValue.Rear_text_certification, standardValue.Rear_text_size]);
	useEffect(() => {
		if (notInitialRenderSeven.current) {
			ChinguardAction(aerationChin, nodesConfiguration, setLoader, standardValue, tabsChoice);
		} else {
			notInitialRenderSeven.current = true;
		}
	}, [tabsChoice]);
	useEffect(() => {
		if (notInitialRenderHeight.current) {
			AerationChin(aerationChin, nodesConfiguration, setLoader, standardValue, tabsChoice);
		} else {
			notInitialRenderHeight.current = true;
		}
	}, [aerationChin]);
	useEffect(() => {
		if (notInitialRenderHeight.current) {
			PatternChin(standardValue, aerationChin, nodesConfiguration, setLoader, tabsChoice);
		} else {
			notInitialRenderHeight.current = true;
		}
	}, [standardValue.Chinguard_design_type, standardValue.Chinguard_design, standardValue.Chinguard_color, standardValue.Chinguard_design_color, standardValue.Chinguard_color_type]);
	useEffect(() => {
		if (notInitialRenderNine.current) {
			MainColorChin(standardValue);
		} else {
			notInitialRenderNine.current = true;
		}
	}, [standardValue.Chinguard_color, standardValue.Chinguard_color_type]);
	useEffect(() => {
		if (notInitialRenderTen.current) {
			VarnishChin(varnishChin, aerationChin, nodesConfiguration, setLoader, standardValue);
		} else {
			notInitialRenderTen.current = true;
		}
	}, [varnishChin]);
	useEffect(() => {
		if (notInitialRenderEleven.current) {
			TrimChin(standardValue, nodesConfiguration, setLoader, aerationChin, varnishChin);
		} else {
			notInitialRenderEleven.current = true;
		}
	}, [standardValue.Chinguard_trim]);
	useEffect(() => {
		if (notInitialRenderTwelve.current) {
			VisorChoice(standardValue, nodesConfiguration, setLoader, tabsChoice);
		} else {
			notInitialRenderTwelve.current = true;
		}
	}, [standardValue.Visor_peak_color, standardValue.Visor_peak_type, standardValue.Visor_color, standardValue.Visor_type, standardValue.Visor_frame, tabsChoice.visor]);
 
	useEffect(() => {
		console.log(nodesConfiguration)
	}, [nodesConfiguration]);	
	return (
		<main className="configurator" id="configurator">
			<iframe
				id="emersyaIframe"
				className={downMenu ? 'openTabs' : ''}
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
