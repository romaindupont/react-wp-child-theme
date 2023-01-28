import Noeud from '../../../../assets/json/helmetid';

const Engraving = async (backEngraving, nodesConfiguration,setLoader, standardValue) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if (nodes.SKU === 'custom_backEngravingECE') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'custom_backEngravingDOT') {
			localIdToRemove.push(nodes.localId);
		}
/* 		if (nodes.SKU === 'helmet_carbonWindowECE') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'helmet_carbonWindowDOT') {
			localIdToRemove.push(nodes.localId);
		} */
	}) 
	if (backEngraving) {
		if (standardValue.Rear_text_certification === 'DOT') {
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
							}
						],
					localIdsToRemove :
						localIdToRemove
				}, "*");
			localIdToRemove = [];
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
							}
						],
					localIdsToRemove :
						localIdToRemove
				}, "*");
			localIdToRemove = [];
		}
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