import Noeud from '../../../../assets/json/helmetid';

const Aeration = (viewerIframe, aerationHelmet) => {
	if(!aerationHelmet) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
				[
					Noeud[0].helmet.helmetNoGroove,
					Noeud[0].helmet.helmetCoatingNoGroove
				],
				localIdsToRemove :
					[
						Noeud[0].helmet.helmetGroove.localId,
						Noeud[0].helmet.helmetCoatingGroove.localId
					]
			}, "*");
	}
	if(aerationHelmet) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
				[
					Noeud[0].helmet.helmetGroove,
					Noeud[0].helmet.helmetCoatingGroove
				],
				localIdsToRemove :
					[	
						Noeud[0].helmet.helmetNoGroove.localId,
						Noeud[0].helmet.helmetCoatingNoGroove.localId
					]
			}, "*");
	}
}

export default Aeration;