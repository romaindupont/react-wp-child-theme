import Noeud from '../../../../assets/json/helmetid';

const Aeration = (viewerIframe, aerationHelmet) => {
	if(!aerationHelmet) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
				[
					Noeud[0].helmet.helmetNoGroove,
					Noeud[0].helmet.helmetCoatingNoGroove,
					/* Noeud[0].helmet.helmetDesignNoGroove */
				],
				localIdsToRemove :
					[
						Noeud[0].helmet.helmetGroove.localId,
						Noeud[0].helmet.helmetCoatingGroove.localId,
						/* Noeud[0].helmet.helmetDesignGroove.localId */
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
					Noeud[0].helmet.helmetCoatingGroove,
					/* Noeud[0].helmet.helmetDesignGroove */
				],
				localIdsToRemove :
					[	
						Noeud[0].helmet.helmetNoGroove.localId,
						Noeud[0].helmet.helmetCoatingNoGroove.localId,
						/* Noeud[0].helmet.helmetDesignNoGroove.localId */
					]
			}, "*");
	}
}

export default Aeration;