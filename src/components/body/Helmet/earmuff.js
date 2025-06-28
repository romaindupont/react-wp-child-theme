import Noeud from '../../../../assets/json/helmetBikeid';

const Earmuff = (earmuffHelmet, nodesConfiguration, setLoader, earmuffInput) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if (nodes.SKU === 'no_earmuff') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'earmuff') {
			localIdToRemove.push(nodes.localId);
		}
	}) 
	if (earmuffHelmet) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[	
						{
						parentLocalId: 1,
						localId: parseInt(`${Noeud[0].earmuff.earmuffLayer.localId}` + Date.now()),
						matrix: [1, 0, 0, 0,
						0, 1, 0, 0,
						0, 0, 1, 0,
						0, 0, 0, 1],
						SKU: Noeud[0].earmuff.earmuffLayer.SKU
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
								configurationName : earmuffInput.earmuffInsideStyle,
								groupName : 'earmuff_inside'
							},
							{
								configurationName : earmuffInput.earmuffOutsideStyle,
								groupName : 'earmuff_finish'
							},
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
					[	
						{
						parentLocalId: 1,
						localId: parseInt(`${Noeud[0].earmuff.noEarmuff.localId}` + Date.now()),
						matrix: [1, 0, 0, 0,
						0, 1, 0, 0,
						0, 0, 1, 0,
						0, 0, 0, 1],
						SKU: Noeud[0].earmuff.noEarmuff.SKU
					}
				],
				localIdsToRemove :
					localIdToRemove
			}, "*");
		localIdToRemove = [];
	}
	
}

export default Earmuff;