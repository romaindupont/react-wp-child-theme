import Noeud from '../../../../assets/json/helmetid';

const RearText = (standardValue, nodesConfiguration, setLoader) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if (nodes.SKU === 'helmet_carbonWindowECE') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'helmet_carbonWindowDOT') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'custom_backEngravingECE') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'custom_backEngravingDOT') {
			localIdToRemove.push(nodes.localId);
		}
	}) 
	if(standardValue.Rear_text_certification === 'DOT') {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
						{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].custom.rearEngravingDOT.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].custom.rearEngravingDOT.SKU
							},
						{
							parentLocalId: 1,
							localId: parseInt(`${Noeud[0].custom.helmetCarbonWindowDOT.localId}` + Date.now()),
							matrix: [1, 0, 0, 0,
							0, 1, 0, 0,
							0, 0, 1, 0,
							0, 0, 0, 1],
							SKU: Noeud[0].custom.helmetCarbonWindowDOT.SKU
						}
					],
				localIdsToRemove :
					localIdToRemove
			}, "*");
		localIdToRemove = [];
		setLoader(false);
			setTimeout(() => {
				viewerIframe.postMessage({
					action : 'setMaterialsGroups',
					values : 
						[
							{
								configurationName : `${standardValue.Rear_text_certification}|${standardValue.Rear_text_size}`,
								groupName : 'Rear_text'
							}
						]
				}, '*');
				setLoader(true);
			}, 2000)
	} else {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
						{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].custom.rearEngravingECE.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].custom.rearEngravingECE.SKU
							},
						{
							parentLocalId: 1,
							localId: parseInt(`${Noeud[0].custom.helmetCarbonWindowECE.localId}` + Date.now()),
							matrix: [1, 0, 0, 0,
							0, 1, 0, 0,
							0, 0, 1, 0,
							0, 0, 0, 1],
							SKU: Noeud[0].custom.helmetCarbonWindowECE.SKU
						}
					],
				localIdsToRemove :
					localIdToRemove
			}, "*");
		localIdToRemove = [];
		setLoader(false);
			setTimeout(() => {
				viewerIframe.postMessage({
					action : 'setMaterialsGroups',
					values : 
						[
							{
								configurationName : `${standardValue.Rear_text_certification}|${standardValue.Rear_text_size}`,
								groupName : 'Rear_text'
							}
						]
				}, '*');
				setLoader(true);
		}, 2000)
	}
}

export default RearText;