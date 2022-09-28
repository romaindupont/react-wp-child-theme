import Noeud from '../../../../assets/json/helmetid';

const Varnish = (varnishHelmet, aerationHelmet, nodesConfiguration, setLoader, standardValue) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if (nodes.SKU === 'helmetDesign_groove') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'helmetDesign_noGroove') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'helmet_noGroove') {
			 localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'helmet_groove') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'helmetCoating_groove') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'helmetCoating_noGroove') {
			localIdToRemove.push(nodes.localId);
		}
	}) 
	if (varnishHelmet && aerationHelmet) {
		if (standardValue.Helmet_design === '' || standardValue.Helmet_design === 'plain') {
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
								localId: parseInt(`${Noeud[0].helmet.helmetCoatingGroove.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].helmet.helmetCoatingGroove.SKU
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
								}	
							]
						}, '*');
					setLoader(true);
				}, '2000');
		}
	}
		if (varnishHelmet && !aerationHelmet) {
			if (standardValue.Helmet_design === '' || standardValue.Helmet_design === 'plain') {
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
									localId: parseInt(`${Noeud[0].helmet.helmetCoatingNoGroove.localId}` + Date.now()),
									matrix: [1, 0, 0, 0,
									0, 1, 0, 0,
									0, 0, 1, 0,
									0, 0, 0, 1],
									SKU: Noeud[0].helmet.helmetCoatingNoGroove.SKU
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
								}				
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
			
		}
		if (!varnishHelmet && !aerationHelmet) {	
			if (standardValue.Helmet_design === '' || standardValue.Helmet_design === 'plain') {
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
									}				
								]
							}, '*');
						setLoader(true);
					}, '2000');
				}
		}
		if (!varnishHelmet && aerationHelmet) {
			if (standardValue.Helmet_design === '' || standardValue.Helmet_design === 'plain') {
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
							}					
						]
					}, '*');
				setLoader(true);
			}, '2000');
		}
	}
}

export default Varnish;