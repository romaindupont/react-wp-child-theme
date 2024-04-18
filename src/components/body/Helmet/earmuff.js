import Noeud from '../../../../assets/json/helmetBikeid';

const Earmuff = (earmuffHelmet, nodesConfiguration) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if (nodes.SKU === 'no_earmuff') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'earmuff_layer1') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'earmuff_layer2') {
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
						localId: parseInt(`${Noeud[0].earmuff.earmuffLayer1.localId}` + Date.now()),
						matrix: [1, 0, 0, 0,
						0, 1, 0, 0,
						0, 0, 1, 0,
						0, 0, 0, 1],
						SKU: Noeud[0].earmuff.earmuffLayer1.SKU
					}
				],
				localIdsToRemove :
					localIdToRemove
			}, "*");
		localIdToRemove = [];
	}
	if (!earmuffHelmet) {
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