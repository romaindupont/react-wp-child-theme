import Noeud from '../../../../assets/json/helmetid';

const BackNumber = (backNumberWindow, nodesConfiguration) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if (nodes.SKU === 'custom_numberingBack') {
			localIdToRemove.push(nodes.localId);
		}
	}) 
	if (backNumberWindow) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[	
						{
						parentLocalId: 1,
						localId: parseInt(`${Noeud[0].custom.numberingBack.localId}` + Date.now()),
						matrix: [1, 0, 0, 0,
						0, 1, 0, 0,
						0, 0, 1, 0,
						0, 0, 0, 1],
						SKU: Noeud[0].custom.numberingBack.SKU
					}
				],
				localIdsToRemove :
					localIdToRemove
			}, "*");
		localIdToRemove = [];
	}
	if (!backNumberWindow) {
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

export default BackNumber;