import Noeud from '../../../../assets/json/helmetid';

const Engraving = async (backEngraving, nodesConfiguration, setLoader) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if(nodes.SKU === 'custom_backEngraving') {
			localIdToRemove.push(nodes.localId);
		}
	}) 
	if(backEngraving) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
						{
							parentLocalId: 1,
							localId: parseInt(`${Noeud[0].custom.rearEngraving.localId}` + Date.now()),
							matrix: [1, 0, 0, 0,
							0, 1, 0, 0,
							0, 0, 1, 0,
							0, 0, 0, 1],
							SKU: Noeud[0].custom.rearEngraving.SKU
						},
					],
				localIdsToRemove :
					localIdToRemove
			}, "*");
	}

	if(!backEngraving) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
				[
				],
				localIdsToRemove :
					localIdToRemove
			}, "*");
	}
}

export default Engraving;