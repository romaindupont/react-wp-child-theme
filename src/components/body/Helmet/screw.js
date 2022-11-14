import Noeud from '../../../../assets/json/helmetid';

const ScrewFunction = (screwPosition, nodesConfiguration) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if (nodes.SKU === 'screwsSide_chinguard') {
			localIdToRemove.push(nodes.localId)
		}
		if (nodes.SKU === 'screwsTop_visor') {
			localIdToRemove.push(nodes.localId)
		}
		if (nodes.SKU === 'screwsBase_chinguard') {
			localIdToRemove.push(nodes.localId)
		}
		if (nodes.SKU === 'screwsSide_noChinguard') {
			localIdToRemove.push(nodes.localId)
		}
		if (nodes.SKU === 'screwsTop_noVisor') {
			localIdToRemove.push(nodes.localId)
		}
	})
	if (screwPosition === 'none') {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[],
				localIdsToRemove :
					localIdToRemove
			}, "*");
		localIdToRemove=[];
	}
 	if (screwPosition === 'bottom') {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
						{
							parentLocalId: 1,
							localId: parseInt(`${Noeud[0].screw.screwsSideNoChinguard.localId}` + Date.now()),
							matrix: [1, 0, 0, 0,
							0, 1, 0, 0,
							0, 0, 1, 0,
							0, 0, 0, 1],
							SKU: Noeud[0].screw.screwsSideNoChinguard.SKU
						}
					],
				localIdsToRemove :
					localIdToRemove
			}, "*");
		localIdToRemove=[];
	}
	if (screwPosition === 'top') {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
				[
					{
						parentLocalId: 1,
						localId: parseInt(`${Noeud[0].screw.screwsTopNoVisor.localId}` + Date.now()),
						matrix: [1, 0, 0, 0,
						0, 1, 0, 0,
						0, 0, 1, 0,
						0, 0, 0, 1],
						SKU: Noeud[0].screw.screwsTopNoVisor.SKU
					}
				],
				localIdsToRemove :
					localIdToRemove
			}, "*");
		localIdToRemove=[];
	}
	if (screwPosition === 'all') {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
				[
					{
						parentLocalId: 1,
						localId: parseInt(`${Noeud[0].screw.screwsSideNoChinguard.localId}` + Date.now()),
						matrix: [1, 0, 0, 0,
						0, 1, 0, 0,
						0, 0, 1, 0,
						0, 0, 0, 1],
						SKU: Noeud[0].screw.screwsSideNoChinguard.SKU
					},
					{
						parentLocalId: 1,
						localId: parseInt(`${Noeud[0].screw.screwsTopNoVisor.localId}` + Date.now()),
						matrix: [1, 0, 0, 0,
						0, 1, 0, 0,
						0, 0, 1, 0,
						0, 0, 0, 1],
						SKU: Noeud[0].screw.screwsTopNoVisor.SKU
					}
				],
				localIdsToRemove :
					localIdToRemove
			}, "*"); 
		localIdToRemove=[];
	}
}

export default ScrewFunction;