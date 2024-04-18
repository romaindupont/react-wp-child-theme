import Noeud from '../../../../assets/json/helmetid';

const ScrewFunction = (screwPosition, nodesConfiguration, withChin, withVisor) => {
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
	if (withChin && !withVisor) {// chin et pas de visiere
		if (screwPosition === 'none') {
				// on enleve que le top
				viewerIframe.postMessage(
					{
						action : "updateProductNodesInstances",
						nodesToAdd :
							[
								{
									parentLocalId: 1,
									localId: parseInt(`${Noeud[0].screw.screwsSideChinguard.localId}` + Date.now()),
									matrix: [1, 0, 0, 0,
									0, 1, 0, 0,
									0, 0, 1, 0,
									0, 0, 0, 1],
									SKU: Noeud[0].screw.screwsSideChinguard.SKU
								},
								{
									parentLocalId: 1,
									localId: parseInt(`${Noeud[0].screw.screwsBaseChinguard.localId}` + Date.now()),
									matrix: [1, 0, 0, 0,
									0, 1, 0, 0,
									0, 0, 1, 0,
									0, 0, 0, 1],
									SKU: Noeud[0].screw.screwsBaseChinguard.SKU
								}
							],
						localIdsToRemove :
							localIdToRemove
					}, "*");
				localIdToRemove=[];
		}
		if (screwPosition === 'bottom') {
			// on enleve rien et on a les screw avec chin
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].screw.screwsSideChinguard.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].screw.screwsSideChinguard.SKU
							},
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].screw.screwsBaseChinguard.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].screw.screwsBaseChinguard.SKU
							}
						],
					localIdsToRemove :
						localIdToRemove
				}, "*");
			localIdToRemove=[];
		}
		if (screwPosition === 'top') {
			//on ajoute le top que sans visor
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].screw.screwsSideChinguard.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].screw.screwsSideChinguard.SKU
							},
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].screw.screwsTopNoVisor.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].screw.screwsTopNoVisor.SKU
							},
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].screw.screwsBaseChinguard.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].screw.screwsBaseChinguard.SKU
							}
						],
					localIdsToRemove :
						localIdToRemove
				}, "*");
			localIdToRemove=[];
		}
		if (screwPosition === 'all') {
			// impossible on propose pas
		}
	}
	if (!withChin && withVisor) {// sans chin mais avec visiere
		if (screwPosition === 'none') {
			// on enleve que le bottom
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].screw.screwsTopVisor.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].screw.screwsTopVisor.SKU
							}
						],
					localIdsToRemove :
						localIdToRemove
				}, "*");
			localIdToRemove=[];
		}
		if (screwPosition === 'bottom') {
			// on ajoute que le screw bottom sans chin
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].screw.screwsTopVisor.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].screw.screwsTopVisor.SKU
							},
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
								localId: parseInt(`${Noeud[0].screw.screwsBaseChinguard.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].screw.screwsBaseChinguard.SKU
							}
						],
					localIdsToRemove :
						localIdToRemove
				}, "*");
			localIdToRemove=[];
		}
		if (screwPosition === 'top') {
			// on enleve rien screw avec visor
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].screw.screwsTopVisor.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].screw.screwsTopVisor.SKU
							}
						],
					localIdsToRemove :
						localIdToRemove
				}, "*");
			localIdToRemove=[];
		}
		if (screwPosition === 'all') {
			//  impossible on propose pas
		}
	}
	if (withChin && withVisor) {// avec chin et avec visiere

		if (screwPosition === 'none') {
			// impossible on propse pas
		}
		if (screwPosition === 'bottom') {
			// impossible on propse pas
		}
		if (screwPosition === 'top') {
			// impossible on propse pas
		}
		if (screwPosition === 'all') {
			// impossible on propose pas
		}
	}
	if (!withChin && !withVisor) { // sans chin et sans vicor

		if (screwPosition === 'none') {
			// on enleve tout
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
			// on ajoute que le bottom sans chin
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
			// on ajoute que le top sans visiere
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
			// on ajoute tout
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
}

export default ScrewFunction;