import Noeud from '../../../../assets/json/helmetid';

const RightNumber = (rightNumberWindow, nodesConfiguration) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if (nodes.SKU === 'custom_numberingRight') {
			localIdToRemove.push(nodes.localId);
		}
	}) 
	if (rightNumberWindow) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[	
						{
							parentLocalId: 1,
							localId: parseInt(`${Noeud[0].custom.numberingRight.localId}` + Date.now()),
							matrix: [1, 0, 0, 0,
							0, 1, 0, 0,
							0, 0, 1, 0,
							0, 0, 0, 1],
							SKU: Noeud[0].custom.numberingRight.SKU
						}
					],
				localIdsToRemove :
					localIdToRemove
			}, "*");
		localIdToRemove = [];
	}
	if (!rightNumberWindow) {
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

export default RightNumber;