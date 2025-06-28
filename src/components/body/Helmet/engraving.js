import Noeud from '../../../../assets/json/helmetBikeid';

const Engraving = async (backEngraving, nodesConfiguration,setLoader, standardValue) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let localIdToRemove = [];

	nodesConfiguration.find((nodes) => { 
		if (nodes.SKU === 'custom_backEngraving') {
			localIdToRemove.push(nodes.localId);
		}
	}) 
	
	if (backEngraving) {
					viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].custom.customBackEngraving.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].custom.customBackEngraving.SKU
							}
						],
					localIdsToRemove :
						localIdToRemove
				}, "*");
			localIdToRemove = [];
	}
	if (!backEngraving) {
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

export default Engraving;