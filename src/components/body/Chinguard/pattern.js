import Noeud from '../../../../assets/json/helmetid';

const Pattern = (standardValue, aerationChin, nodesConfiguration, setLoader) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow;
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if(nodes.SKU === 'chinguard_groove') {
			localIdToRemove.push(nodes.localId);
		}
		if(nodes.SKU === 'chinguard_noGroove') {
			localIdToRemove.push(nodes.localId);
		}
		if(nodes.SKU === 'chinguardDesign_groove') {
			localIdToRemove.push(nodes.localId);
		}
		if(nodes.SKU === 'chinguardDesign_noGroove') {
			localIdToRemove.push(nodes.localId);
		}
		if(nodes.SKU === 'chinguardCoating_groove') {
			localIdToRemove.push(nodes.localId);
		}
		if(nodes.SKU === 'chinguardCoating_noGroove') {
			localIdToRemove.push(nodes.localId);
		}
	}) 
	if (aerationChin) {
		console.log('pattern aeration ouvert')
		if (standardValue.Chinguard_design === 'plain' || standardValue.Chinguard_design === '') {
			console.log('pattern aeration ouvert + design plein', standardValue)
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
						],
					localIdsToRemove :
						localIdToRemove
				}, "*");
				localIdToRemove = [];
				setLoader(false);
				setTimeout(()=> {
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
								]
							}, '*');
						setLoader(true);
					}, '2000');
			}
			else {
				console.log('pattern aeration ouvert + design', standardValue)
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
							],
						localIdsToRemove :
							localIdToRemove
					}, "*");
					localIdToRemove = [];
					setLoader(false);
						setTimeout(()=> {
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
	} else {	
	console.log('pattern aerations fermées')
	if (standardValue.Chinguard_design === 'plain' || standardValue.Chinguard_design === '') {
		console.log('pattern aerations fermées + design plein',  standardValue)
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
						}
					],
				localIdsToRemove :
					localIdToRemove
			}, "*");
			localIdToRemove = [];
			setLoader(false);
			setTimeout(()=> {
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
						]
				}, '*');
			setLoader(true);
		}, '2000');
	}
		else {
			console.log('pattern aerations fermées + design',  standardValue)
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
							}
						],
					localIdsToRemove :
						localIdToRemove
				}, "*");
				localIdToRemove = [];
				setLoader(false);
					setTimeout(()=> {
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

export default Pattern;