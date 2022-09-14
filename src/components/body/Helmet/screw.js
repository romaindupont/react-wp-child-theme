import Noeud from '../../../../assets/json/helmetid';

const ScrewFunction = (screwPosition) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	if(screwPosition === 'none') {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
				[
				
				],
				localIdsToRemove :
				[
					Noeud[0].screw.screwsBaseChinguard.localId,
					Noeud[0].screw.screwsSideChinguard.localId,
					Noeud[0].screw.screwsSideNoChinguard.localId,
					Noeud[0].screw.screwsTopVisor.localId,
					Noeud[0].screw.screwsTopNoVisor.localId
				]
			}, "*");
	}
 	if(screwPosition === 'bottom') {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
				[
					Noeud[0].screw.screwsBaseChinguard,
					Noeud[0].screw.screwsSideChinguard,
					Noeud[0].screw.screwsSideNoChinguard,
				],
				localIdsToRemove :
					[	
						/* Noeud[0].screw.screwsSideNoChinguard.localId, */
						Noeud[0].screw.screwsTopVisor.localId,
						Noeud[0].screw.screwsTopNoVisor.localId,
					]
			}, "*");
	}
	if(screwPosition === 'top') {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
				[
					
				],
				localIdsToRemove :
					[
					
					]
			}, "*");
	}
	if(screwPosition === 'all') {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
				[
					Noeud[0].screw.screwsBaseChinguard,
					Noeud[0].screw.screwsSideChinguard,
					Noeud[0].screw.screwsSideNoChinguard,
					Noeud[0].screw.screwsTopVisor,
					Noeud[0].screw.screwsTopNoVisor
				],
				localIdsToRemove :
					[
						
					]
			}, "*"); 
	}
}

export default ScrewFunction;