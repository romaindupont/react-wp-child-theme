import Noeud from '../../../../assets/json/helmetid';

const Varnish = (varnishHelmet, aerationHelmet, nodesConfiguration, setLoader, standardValue) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if(nodes.SKU === 'helmetDesign_groove') {
			localIdToRemove.push(nodes.localId);
		}
		if(nodes.SKU === 'helmetDesign_noGroove') {
			localIdToRemove.push(nodes.localId);
		}
		if(nodes.SKU === 'helmet_noGroove') {
			 localIdToRemove.push(nodes.localId);
		}
		if(nodes.SKU === 'helmet_groove') {
			localIdToRemove.push(nodes.localId);
		}
		if(nodes.SKU === 'helmetCoating_groove') {
			localIdToRemove.push(nodes.localId);
		}
		if(nodes.SKU === 'helmetCoating_noGroove') {
			localIdToRemove.push(nodes.localId);
		}
	}) 
	if (varnishHelmet && aerationHelmet) {
		console.log('aeration + vernis')
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].helmet.helmetGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].helmet.helmetGroove.SKU
							},
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].helmet.helmetDesignGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].helmet.helmetDesignGroove.SKU
							},
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].helmet.helmetCoatingGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].helmet.helmetCoatingGroove.SKU
							},
						],
					localIdsToRemove :
						localIdToRemove
				}, "*");
				localIdToRemove = [];
		}
		if (varnishHelmet && !aerationHelmet) {
			console.log('pas daeration + vernis')
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].helmet.helmetNoGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].helmet.helmetNoGroove.SKU
							},
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].helmet.helmetDesignNoGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].helmet.helmetDesignNoGroove.SKU
							},
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].helmet.helmetCoatingNoGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].helmet.helmetCoatingNoGroove.SKU
							},
						],
					localIdsToRemove :
						localIdToRemove
				}, "*");
				localIdToRemove = [];
		}
		if (!varnishHelmet && !aerationHelmet) {
			console.log('pas daeration + pas de vernis')
			if (standardValue.Helmet_design === '' || standardValue.Helmet_design === 'plain'){
				console.log('pas daeration + pas de vernis et design plain')
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].helmet.helmetNoGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].helmet.helmetNoGroove.SKU
							}
						],
					localIdsToRemove :
						localIdToRemove
				}, "*");
				localIdToRemove = [];}
				else {
					console.log('pas daeration + pas de vernis et design')
					viewerIframe.postMessage(
						{
							action : "updateProductNodesInstances",
							nodesToAdd :
								[
									{
										parentLocalId: 1,
										localId: parseInt(`${Noeud[0].helmet.helmetNoGroove.localId}` + Date.now()),
										matrix: [1, 0, 0, 0,
										0, 1, 0, 0,
										0, 0, 1, 0,
										0, 0, 0, 1],
										SKU: Noeud[0].helmet.helmetNoGroove.SKU
									},
									{
										parentLocalId: 1,
										localId: parseInt(`${Noeud[0].helmet.helmetDesignNoGroove.localId}` + Date.now()),
										matrix: [1, 0, 0, 0,
										0, 1, 0, 0,
										0, 0, 1, 0,
										0, 0, 0, 1],
										SKU: Noeud[0].helmet.helmetDesignNoGroove.SKU
									}

								],
							localIdsToRemove :
								localIdToRemove
						}, "*");
						localIdToRemove = [];
				}
		}
		if (!varnishHelmet && aerationHelmet) {
			console.log('aeration + pas de vernis')
			if (standardValue.Helmet_design === '' || standardValue.Helmet_design === 'plain'){
				console.log('aeration + pas de vernis et design plain')
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].helmet.helmetGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].helmet.helmetGroove.SKU
							}
						],
					localIdsToRemove :
						localIdToRemove
				}, "*");
				localIdToRemove = [];
			}
		
		else {
			console.log('aeration + pas de vernis et design')
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].helmet.helmetGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].helmet.helmetGroove.SKU
							},
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].helmet.helmetDesignGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].helmet.helmetDesignGroove.SKU
							}
						],
					localIdsToRemove :
						localIdToRemove
				}, "*");
				localIdToRemove = [];
		}
	}
	}

export default Varnish;