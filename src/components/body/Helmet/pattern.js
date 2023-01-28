import Noeud from '../../../../assets/json/helmetid';

const Pattern =  (standardValue, aerationHelmet, nodesConfiguration, setLoader) => {
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
		if (nodes.SKU === 'logo_standard') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'logo_higher') {
			localIdToRemove.push(nodes.localId);
		}
	}) 
	let typeColorChin = standardValue.Chinguard_color_type;
		if (standardValue.Chinguard_color_type === 'gilding') {
			typeColorChin = 'metallic'
		}
		else {
			typeColorChin = standardValue.Chinguard_color_type;
		}
		let typeColorHelmet = standardValue.Helmet_color_type;
		if (standardValue.Helmet_color_type === 'gilding') {
			typeColorHelmet = 'metallic'
		}
		else {
			typeColorHelmet = standardValue.Helmet_color_type;
		}
	let typeDesignHelmet = standardValue.Helmet_design_type;
	if (standardValue.Helmet_design_type === 'gilding') {
		typeDesignHelmet = 'metallic'
	}
	else {
		typeDesignHelmet = standardValue.Helmet_design_type;
	}
	let typeDesignChin = standardValue.Chinguard_design_type;
	if (standardValue.Chinguard_design_type === 'gilding') {
		typeDesignChin = 'metallic'
	}
	else {
		typeDesignChin = standardValue.Chinguard_design_type;
	}
	if (aerationHelmet) {
		if (standardValue.Helmet_design === 'plain' || standardValue.Helmet_design === '') {
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
								localId: parseInt(`${Noeud[0].helmet.helmetLogoStandard.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].helmet.helmetLogoStandard.SKU
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
								configurationName : `${typeColorHelmet}|${standardValue.Helmet_color}`,
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
								configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
								groupName : 'Chinguard_color'
							},
							{
								configurationName :`${standardValue.Logo}|${standardValue.Logo_color}`,
								groupName : 'Logo'
							}
						]
					}, '*');
				setLoader(true);
			}, '2000');
		}
			else {
				if (standardValue.Helmet_design === 'star'){
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
									localId: parseInt(`${Noeud[0].helmet.helmetLogoHigher.localId}` + Date.now()),
									matrix: [1, 0, 0, 0,
									0, 1, 0, 0,
									0, 0, 1, 0,
									0, 0, 0, 1],
									SKU: Noeud[0].helmet.helmetLogoHigher.SKU
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
									configurationName : `${typeColorHelmet}|${standardValue.Helmet_color}`,
									groupName : 'Helmet_color'
								},
								{
									configurationName : `${standardValue.Helmet_design}|${typeDesignHelmet}|${standardValue.Helmet_design_color}`,
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
									configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
								},
								{
									configurationName :`${standardValue.Logo}|${standardValue.Logo_color}`,
									groupName : 'Logo'
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
									localId: parseInt(`${Noeud[0].helmet.helmetLogoStandard.localId}` + Date.now()),
									matrix: [1, 0, 0, 0,
									0, 1, 0, 0,
									0, 0, 1, 0,
									0, 0, 0, 1],
									SKU: Noeud[0].helmet.helmetLogoStandard.SKU
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
									configurationName : `${typeColorHelmet}|${standardValue.Helmet_color}`,
									groupName : 'Helmet_color'
								},
								{
									configurationName : `${standardValue.Helmet_design}|${typeDesignHelmet}|${standardValue.Helmet_design_color}`,
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
									configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
								},
								{
									configurationName :`${standardValue.Logo}|${standardValue.Logo_color}`,
									groupName : 'Logo'
								}
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
				}
} else {	
	if (standardValue.Helmet_design === 'plain' || standardValue.Helmet_design === '') {
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
							localId: parseInt(`${Noeud[0].helmet.helmetLogoStandard.localId}` + Date.now()),
							matrix: [1, 0, 0, 0,
							0, 1, 0, 0,
							0, 0, 1, 0,
							0, 0, 0, 1],
							SKU: Noeud[0].helmet.helmetLogoStandard.SKU
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
							configurationName : `${typeColorHelmet}|${standardValue.Helmet_color}`,
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
							configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
							groupName : 'Chinguard_color'
						},
						{
							configurationName :`${standardValue.Logo}|${standardValue.Logo_color}`,
							groupName : 'Logo'
						}
					]
			}, '*');
			setLoader(true);
		}, '2000');
	}
		else {
			if(standardValue.Helmet_design === 'star') {
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
								localId: parseInt(`${Noeud[0].helmet.helmetLogoHigher.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].helmet.helmetLogoHigher.SKU
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
								configurationName : `${typeColorHelmet}|${standardValue.Helmet_color}`,
								groupName : 'Helmet_color'
							},
							{
								configurationName : `${standardValue.Helmet_design}|${typeDesignHelmet}|${standardValue.Helmet_design_color}`,
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
								configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
								groupName : 'Chinguard_color'
							},
							{
								configurationName :`${standardValue.Logo}|${standardValue.Logo_color}`,
								groupName : 'Logo'
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
									localId: parseInt(`${Noeud[0].helmet.helmetLogoStandard.localId}` + Date.now()),
									matrix: [1, 0, 0, 0,
									0, 1, 0, 0,
									0, 0, 1, 0,
									0, 0, 0, 1],
									SKU: Noeud[0].helmet.helmetLogoStandard.SKU
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
									configurationName : `${typeColorHelmet}|${standardValue.Helmet_color}`,
									groupName : 'Helmet_color'
								},
								{
									configurationName : `${standardValue.Helmet_design}|${typeDesignHelmet}|${standardValue.Helmet_design_color}`,
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
									configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
								},
								{
									configurationName :`${standardValue.Logo}|${standardValue.Logo_color}`,
									groupName : 'Logo'
								}
							]
					}, '*');
					setLoader(true);
				}, '2000');
			}
		}
	}
}

export default Pattern;