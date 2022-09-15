import Noeud from '../../../../assets/json/helmetid';

const VarnishChin = (varnishChin, aerationChin) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	if (varnishChin && aerationChin) {
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
					[
						Noeud[0].chinguard.chinguardCoatingGroove,
					],
					localIdsToRemove :
					[
						Noeud[0].chinguard.chinguardCoatingNoGroove.localId
					]
				}, "*");
		}
		if (varnishChin && !aerationChin) {
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
					[
						Noeud[0].chinguard.chinguardCoatingNoGroove
					],
					localIdsToRemove :
					[	
						Noeud[0].chinguard.chinguardCoatingGroove.localId
					]
				}, "*");
		}
		if (!varnishChin) {
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
					[],
					localIdsToRemove :
					[	
						Noeud[0].chinguard.chinguardCoatingGroove.localId,
						Noeud[0].chinguard.chinguardCoatingNoGroove.localId
					]
				}, "*");
		}
	}

export default VarnishChin;