import Noeud from '../../../../assets/json/helmetid';

const Zippers = (standardValue) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	if(standardValue.flap === 'nylon') {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
				[
					Noeud[0].flap.pullingFlapNylon
				],
				localIdsToRemove :
					[
						Noeud[0].flap.pullingFlapLeather.localId
					]
			}, "*");
	}
	if(standardValue.flap === 'leather') {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
				[
					Noeud[0].flap.pullingFlapLeather
				],
				localIdsToRemove :
					[	
						Noeud[0].flap.pullingFlapNylon.localId
					]
			}, "*");
	}
}

export default Zippers;


