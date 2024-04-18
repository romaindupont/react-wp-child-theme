import Noeud from '../../../../assets/json/helmetid';

const LeftNumber = (leftNumberWindow, nodesConfiguration) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow;
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if (nodes.SKU === 'custom_numberingLeft') {
			localIdToRemove.push(nodes.localId);
		}
	}) 
	if (leftNumberWindow) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
						{
							parentLocalId: 1,
							localId: parseInt(`${Noeud[0].custom.numberingLeft.localId}` + Date.now()),
							matrix: [1, 0, 0, 0,
							0, 1, 0, 0,
							0, 0, 1, 0,
							0, 0, 0, 1],
							SKU: Noeud[0].custom.numberingLeft.SKU
						}
					],
				localIdsToRemove :
					localIdToRemove
			}, "*");
		localIdToRemove = [];
	}
	if (!leftNumberWindow) {
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

export default LeftNumber;
