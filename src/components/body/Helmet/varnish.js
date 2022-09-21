import Noeud from '../../../../assets/json/helmetid';

const Varnish = (varnishHelmet, aerationHelmet) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	if (varnishHelmet && aerationHelmet) {
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							Noeud[0].helmet.helmetCoatingGroove,
						],
					localIdsToRemove :
						[
							Noeud[0].helmet.helmetCoatingNoGroove.localId
						]
				}, "*");
		}
		if (varnishHelmet && !aerationHelmet) {
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							Noeud[0].helmet.helmetCoatingNoGroove
						],
					localIdsToRemove :
						[	
							Noeud[0].helmet.helmetCoatingGroove.localId
						]
				}, "*");
		}
		if (!varnishHelmet) {
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[],
					localIdsToRemove :
						[	
							Noeud[0].helmet.helmetCoatingGroove.localId,
							Noeud[0].helmet.helmetCoatingNoGroove.localId
						]
				}, "*");
		}
	}

export default Varnish;