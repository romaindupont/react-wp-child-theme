import Noeud from '../../../../assets/json/helmetid';

const VisorChoice = (standardValue, nodesConfiguration, setLoader, tabsChoice) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if (nodes.SKU === 'visor_peak') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'visor_peakCoating') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'visor_shortShield') {
			 localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'visor_longShield') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'visor_elements') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'visor_standardFrame') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'visor_lightFrame') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'screwsTop_visor') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'screwsTop_noVisor') {
			localIdToRemove.push(nodes.localId);
		}
	}) 
	if (tabsChoice.visor) {
		switch (standardValue.Visor_type) {
			case 'peak_visor':
				viewerIframe.postMessage(
					{
						action : "updateProductNodesInstances",
						nodesToAdd :
							[
								{
									parentLocalId: 1,
									localId: parseInt(`${Noeud[0].visor.visorPeak.localId}` + Date.now()),
									matrix: [1, 0, 0, 0,
									0, 1, 0, 0,
									0, 0, 1, 0,
									0, 0, 0, 1],
									SKU: Noeud[0].visor.visorPeak.SKU
								},
								{
									parentLocalId: 1,
									localId: parseInt(`${Noeud[0].visor.visorElements.localId}` + Date.now()),
									matrix: [1, 0, 0, 0,
									0, 1, 0, 0,
									0, 0, 1, 0,
									0, 0, 0, 1],
									SKU: Noeud[0].visor.visorElements.SKU
								},
								{
									parentLocalId: 1,
									localId: parseInt(`${Noeud[0].screw.screwsTopVisor.localId}` + Date.now()),
									matrix: [1, 0, 0, 0,
									0, 1, 0, 0,
									0, 0, 1, 0,
									0, 0, 0, 1],
									SKU: Noeud[0].screw.screwsTopVisor.SKU
								}
							],
						localIdsToRemove :
							localIdToRemove
					}, "*");
					localIdToRemove = [];
					setLoader(false);
			break;
			case 'short_visor':
				if (standardValue.Visor_frame === 'full') {
					viewerIframe.postMessage(
						{
							action : "updateProductNodesInstances",
							nodesToAdd :
								[
									{
										parentLocalId: 1,
										localId: parseInt(`${Noeud[0].visor.visorShortShield.localId}` + Date.now()),
										matrix: [1, 0, 0, 0,
										0, 1, 0, 0,
										0, 0, 1, 0,
										0, 0, 0, 1],
										SKU: Noeud[0].visor.visorShortShield.SKU
									},
									{
										parentLocalId: 1,
										localId: parseInt(`${Noeud[0].visor.visorElements.localId}` + Date.now()),
										matrix: [1, 0, 0, 0,
										0, 1, 0, 0,
										0, 0, 1, 0,
										0, 0, 0, 1],
										SKU: Noeud[0].visor.visorElements.SKU
									},
									{
										parentLocalId: 1,
										localId: parseInt(`${Noeud[0].visor.visorStandardFrame.localId}` + Date.now()),
										matrix: [1, 0, 0, 0,
										0, 1, 0, 0,
										0, 0, 1, 0,
										0, 0, 0, 1],
										SKU: Noeud[0].visor.visorStandardFrame.SKU
									},
									{
										parentLocalId: 1,
										localId: parseInt(`${Noeud[0].screw.screwsTopVisor.localId}` + Date.now()),
										matrix: [1, 0, 0, 0,
										0, 1, 0, 0,
										0, 0, 1, 0,
										0, 0, 0, 1],
										SKU: Noeud[0].screw.screwsTopVisor.SKU
									}
								],
							localIdsToRemove :
								localIdToRemove
						}, "*");
					localIdToRemove = [];
					setLoader(false);
				}
				else {
					viewerIframe.postMessage(
						{
							action : "updateProductNodesInstances",
							nodesToAdd :
								[
									{
										parentLocalId: 1,
										localId: parseInt(`${Noeud[0].visor.visorShortShield.localId}` + Date.now()),
										matrix: [1, 0, 0, 0,
										0, 1, 0, 0,
										0, 0, 1, 0,
										0, 0, 0, 1],
										SKU: Noeud[0].visor.visorShortShield.SKU
									},
									{
										parentLocalId: 1,
										localId: parseInt(`${Noeud[0].visor.visorElements.localId}` + Date.now()),
										matrix: [1, 0, 0, 0,
										0, 1, 0, 0,
										0, 0, 1, 0,
										0, 0, 0, 1],
										SKU: Noeud[0].visor.visorElements.SKU
									},
									{
										parentLocalId: 1,
										localId: parseInt(`${Noeud[0].visor.visorLightFrame.localId}` + Date.now()),
										matrix: [1, 0, 0, 0,
										0, 1, 0, 0,
										0, 0, 1, 0,
										0, 0, 0, 1],
										SKU: Noeud[0].visor.visorLightFrame.SKU
									},
									{
										parentLocalId: 1,
										localId: parseInt(`${Noeud[0].screw.screwsTopVisor.localId}` + Date.now()),
										matrix: [1, 0, 0, 0,
										0, 1, 0, 0,
										0, 0, 1, 0,
										0, 0, 0, 1],
										SKU: Noeud[0].screw.screwsTopVisor.SKU
									}
								],
							localIdsToRemove :
								localIdToRemove
						}, "*");
					localIdToRemove = [];
					setLoader(false);
				}
			break;
			case 'long_visor':
				if (standardValue.Visor_frame === 'full') {
					viewerIframe.postMessage(
						{
							action : "updateProductNodesInstances",
							nodesToAdd :
								[
									{
										parentLocalId: 1,
										localId: parseInt(`${Noeud[0].visor.visorLongShield.localId}` + Date.now()),
										matrix: [1, 0, 0, 0,
										0, 1, 0, 0,
										0, 0, 1, 0,
										0, 0, 0, 1],
										SKU: Noeud[0].visor.visorLongShield.SKU
									},
									{
										parentLocalId: 1,
										localId: parseInt(`${Noeud[0].visor.visorElements.localId}` + Date.now()),
										matrix: [1, 0, 0, 0,
										0, 1, 0, 0,
										0, 0, 1, 0,
										0, 0, 0, 1],
										SKU: Noeud[0].visor.visorElements.SKU
									},
									{
										parentLocalId: 1,
										localId: parseInt(`${Noeud[0].visor.visorStandardFrame.localId}` + Date.now()),
										matrix: [1, 0, 0, 0,
										0, 1, 0, 0,
										0, 0, 1, 0,
										0, 0, 0, 1],
										SKU: Noeud[0].visor.visorStandardFrame.SKU
									},
									{
										parentLocalId: 1,
										localId: parseInt(`${Noeud[0].screw.screwsTopVisor.localId}` + Date.now()),
										matrix: [1, 0, 0, 0,
										0, 1, 0, 0,
										0, 0, 1, 0,
										0, 0, 0, 1],
										SKU: Noeud[0].screw.screwsTopVisor.SKU
									}
								],
							localIdsToRemove :
								localIdToRemove
						}, "*");
					localIdToRemove = [];
					setLoader(false);
				}
				else {
					viewerIframe.postMessage(
						{
							action : "updateProductNodesInstances",
							nodesToAdd :
								[
									{
										parentLocalId: 1,
										localId: parseInt(`${Noeud[0].visor.visorLongShield.localId}` + Date.now()),
										matrix: [1, 0, 0, 0,
										0, 1, 0, 0,
										0, 0, 1, 0,
										0, 0, 0, 1],
										SKU: Noeud[0].visor.visorLongShield.SKU
									},
									{
										parentLocalId: 1,
										localId: parseInt(`${Noeud[0].visor.visorElements.localId}` + Date.now()),
										matrix: [1, 0, 0, 0,
										0, 1, 0, 0,
										0, 0, 1, 0,
										0, 0, 0, 1],
										SKU: Noeud[0].visor.visorElements.SKU
									},
									{
										parentLocalId: 1,
										localId: parseInt(`${Noeud[0].visor.visorLightFrame.localId}` + Date.now()),
										matrix: [1, 0, 0, 0,
										0, 1, 0, 0,
										0, 0, 1, 0,
										0, 0, 0, 1],
										SKU: Noeud[0].visor.visorLightFrame.SKU
									},
									{
										parentLocalId: 1,
										localId: parseInt(`${Noeud[0].screw.screwsTopVisor.localId}` + Date.now()),
										matrix: [1, 0, 0, 0,
										0, 1, 0, 0,
										0, 0, 1, 0,
										0, 0, 0, 1],
										SKU: Noeud[0].screw.screwsTopVisor.SKU
									}
								],
							localIdsToRemove :
								localIdToRemove
						}, "*");
					localIdToRemove = [];
					setLoader(false);
				}
			break;
			default:
			console.log('no default theme')
		}
		setTimeout(() => {
			viewerIframe.postMessage({
				action : 'setMaterialsGroups',
				values : 
					[
						{
							configurationName : `${standardValue.Visor_peak_type}|${standardValue.Visor_peak_color}`,
							groupName : 'Peak_color'
						},
						{
							configurationName : `${standardValue.Visor_color}`,
							groupName : 'Visor_color'
						}		
					]
			}, '*');
		setLoader(true);
		}, '2000');
	}
	else {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[],
				localIdsToRemove :
					localIdToRemove
			}, "*");
		localIdToRemove = [];
	}
}

export default VisorChoice;

