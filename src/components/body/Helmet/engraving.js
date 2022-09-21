import Noeud from '../../../../assets/json/helmetid';

const Engraving = async (backEngraving) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	if(backEngraving) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
						Noeud[0].custom.rearEngraving
					],
				localIdsToRemove :
					[

					]
			}, "*");
	}

	/* if(!backEngraving) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
				[
				],
				localIdsToRemove :
					[	
						Noeud[0].custom.rearEngraving.localId
					]
			}, "*");
	} */
}

export default Engraving;