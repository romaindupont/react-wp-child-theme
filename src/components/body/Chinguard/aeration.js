import Noeud from '../../../../assets/json/helmetid';

const AerationChin = (aerationChin, nodesConfiguration, setLoader, standardValue) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if (nodes.SKU === 'chinguard_groove') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'chinguard_noGroove') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'chinguardDesign_groove') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'chinguardDesign_noGroove') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'chinguardCoating_groove') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'chinguardCoating_groove') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'chinguardCoating_noGroove') {
			localIdToRemove.push(nodes.localId);
		}
	}) 
	if (!aerationChin) {
		if (standardValue.Chinguard_design === 'plain' || standardValue.Chinguard_design === '') {
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].chinguard.chinguardNoGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].chinguard.chinguardNoGroove.SKU
							},
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].chinguard.chinguardCoatingNoGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].chinguard.chinguardCoatingNoGroove.SKU
							}
						],
					localIdsToRemove :
						localIdToRemove
				}, "*");
			localIdToRemove = [];
			setLoader(false);
			setTimeout(() => {
				viewerIframe.postMessage({
					action : 'setMaterialsGroups',
					values : 
						[{
							configurationName : `${standardValue.Helmet_color_type}|${standardValue.Helmet_color}`,
							groupName : 'Helmet_color'
						},								
						{
							configurationName : standardValue.Interior,
							groupName : 'Interior'
						},
						{
							configurationName : standardValue.Metal_pieces,
							groupName : 'Metal_pieces'
						},
							{
								configurationName : `${standardValue.Chinguard_color_type}|${standardValue.Chinguard_color}`,
								groupName : 'Chinguard_color'
							}				
						]
				}, '*');
				setLoader(true);
			}, '2000');
		}
		else {
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].chinguard.chinguardNoGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].chinguard.chinguardNoGroove.SKU
							},
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].chinguard.chinguardDesignNoGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].chinguard.chinguardDesignNoGroove.SKU
							},
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].chinguard.chinguardCoatingNoGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].chinguard.chinguardCoatingNoGroove.SKU
							}
						],
					localIdsToRemove :
						localIdToRemove
				}, "*");
			localIdToRemove = [];
			setLoader(false);
			setTimeout(() => {
				viewerIframe.postMessage({
					action : 'setMaterialsGroups',
					values : 
						[
						{
							configurationName : `${standardValue.Helmet_color_type}|${standardValue.Helmet_color}`,
							groupName : 'Helmet_color'
						},
						{
							configurationName : `${standardValue.Helmet_design}|${standardValue.Helmet_design_type}|${standardValue.Helmet_design_color}`,
							groupName : 'Helmet_design_color'
						},
						{
							configurationName : standardValue.Interior,
							groupName : 'Interior'
						},
						{
							configurationName : standardValue.Metal_pieces,
							groupName : 'Metal_pieces'
						},
						{
							configurationName : `${standardValue.Chinguard_color_type}|${standardValue.Chinguard_color}`,
							groupName : 'Chinguard_color'
						},
						{
							configurationName : `${standardValue.Chinguard_design}|${standardValue.Chinguard_design_type}|${standardValue.Chinguard_design_color}`,
							groupName : 'Chinguard_design_color'
						}						
					]
				}, '*');
				setLoader(true);
			}, '2000');
		}
	}
	if (aerationChin) {
		if (standardValue.Chinguard_design === 'plain' || standardValue.Chinguard_design === '') {
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].chinguard.chinguardGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].chinguard.chinguardGroove.SKU
							},
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].chinguard.chinguardCoatingGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].chinguard.chinguardCoatingGroove.SKU
							}
						],
					localIdsToRemove :
						localIdToRemove
				}, "*");
			localIdToRemove = [];
			setLoader(false);
			setTimeout(() => {
				viewerIframe.postMessage({
					action : 'setMaterialsGroups',
					values : 
						[
							{
								configurationName : `${standardValue.Helmet_color_type}|${standardValue.Helmet_color}`,
								groupName : 'Helmet_color'
							},
							{
								configurationName : standardValue.Interior,
								groupName : 'Interior'
							},
							{
								configurationName : standardValue.Metal_pieces,
								groupName : 'Metal_pieces'
							},
							{
								configurationName : `${standardValue.Chinguard_color_type}|${standardValue.Chinguard_color}`,
								groupName : 'Chinguard_color'
							}
						],
				}, '*');
				setLoader(true);
			}, '2000');
		}
		else {
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].chinguard.chinguardGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].chinguard.chinguardGroove.SKU
							},
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].chinguard.chinguardDesignGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].chinguard.chinguardDesignGroove.SKU
							},
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].chinguard.chinguardCoatingGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].chinguard.chinguardCoatingGroove.SKU
							}
						],
					localIdsToRemove :
						localIdToRemove
				}, "*");
			localIdToRemove = [];
			setLoader(false);
			setTimeout(() => {
				viewerIframe.postMessage({
					action : 'setMaterialsGroups',
					values : 
						[
							{
								configurationName : `${standardValue.Helmet_color_type}|${standardValue.Helmet_color}`,
								groupName : 'Helmet_color'
							},
							{
								configurationName : `${standardValue.Helmet_design}|${standardValue.Helmet_design_type}|${standardValue.Helmet_design_color}`,
								groupName : 'Helmet_design_color'
							},
							{
								configurationName : standardValue.Interior,
								groupName : 'Interior'
							},
							{
								configurationName : standardValue.Metal_pieces,
								groupName : 'Metal_pieces'
							},
							{
								configurationName : `${standardValue.Chinguard_color_type}|${standardValue.Chinguard_color}`,
								groupName : 'Chinguard_color'
							},
							{
								configurationName : `${standardValue.Chinguard_design}|${standardValue.Chinguard_design_type}|${standardValue.Chinguard_design_color}`,
								groupName : 'Chinguard_design_color'
							}
						]
					}, '*');
				setLoader(true);
			}, '2000');
		}
	}
}

export default AerationChin;