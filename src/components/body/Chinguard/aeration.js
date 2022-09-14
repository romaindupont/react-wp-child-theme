import Noeud from '../../../../assets/json/helmetid';

const AerationChin = (aerationChin) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	if(!aerationChin) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
				[
					Noeud[0].chinguard.chinguardNoGroove,
					Noeud[0].chinguard.chinguardCoatingNoGroove,
				],
				localIdsToRemove :
					[
						Noeud[0].chinguard.chinguardGroove.localId,
						Noeud[0].chinguard.chinguardCoatingGroove.localId,
					]
			}, "*");
	}
	if(aerationChin) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
				[
					Noeud[0].chinguard.chinguardGroove,
					Noeud[0].chinguard.chinguardCoatingGroove,
				],
				localIdsToRemove :
					[	
						Noeud[0].chinguard.chinguardNoGroove.localId,
						Noeud[0].chinguard.chinguardCoatingNoGroove.localId,
					]
			}, "*");
	}
}

export default AerationChin;