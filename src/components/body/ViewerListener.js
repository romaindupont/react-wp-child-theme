import Noeud from '../../../assets/json/helmetid';

const viewerEventListener =  function(event, standardValue){
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 

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
					Noeud[0].screw.screwsSideChinguard,
					Noeud[0].screw.screwsTopVisor, 
					Noeud[0].visor.visorPeak
				],
				localIdsToRemove :
				[]
			}, 
			"*"
			);

			window.addEventListener('message', firstConfiguration(standardValue), false);
		}
	}
	if(event.data && event.data.action == 'onError'){
		console.log(event)
	}
};
	export default viewerEventListener;

	let firstConfiguration = (e, standardValue) => {
		let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
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
