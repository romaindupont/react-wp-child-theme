import Noeud from '../../../../assets/json/helmetid';

const Varnish = (varnishHelmet, aerationHelmet) => {
	let viewerIframe = null;
	viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	console.log(varnishHelmet, aerationHelmet)
	if (varnishHelmet && aerationHelmet) {
			console.log('vernis avec aeration')
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
					[
						Noeud[0].helmet.helmetCoatingGroove
					],
					localIdsToRemove :
					[
						Noeud[0].helmet.helmetCoatingNoGroove.localId
					]
				}, "*");
		}
		if (varnishHelmet && !aerationHelmet) {
			console.log('vernis sans aeration')
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
			console.log('mat')
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