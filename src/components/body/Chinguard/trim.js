import Noeud from '../../../../assets/json/helmetid';

const TrimChin = (standardValue, nodesConfiguration, setLoader, varnishChin, aerationChin) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow;
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if (nodes.SKU === 'chinguardTrim_rubber') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'chinguardTrim_leather') {
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
	if (standardValue.Chinguard_trim.includes('rubber')) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
						{
							parentLocalId: 1,
							localId: parseInt(`${Noeud[0].chinguard.chinguardTrimRubber.localId}` + Date.now()),
							matrix: [1, 0, 0, 0,
							0, 1, 0, 0,
							0, 0, 1, 0,
							0, 0, 0, 1],
							SKU: Noeud[0].chinguard.chinguardTrimRubber.SKU
						}
					],
				localIdsToRemove :
					localIdToRemove
			}, "*");
		localIdToRemove = [];
		setLoader(false);
		if (varnishChin && aerationChin) {
			if (standardValue.Chinguard_design === '' || standardValue.Chinguard_design === 'plain') {
				setTimeout(() => {
					viewerIframe.postMessage({
						action : 'setMaterialsGroups',
						values : 
							[
								{
									configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
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
									configurationName : standardValue.Chinguard_trim,
									groupName : 'Chinguard_trim'
								}	
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
			else {
				setTimeout(() => {
					viewerIframe.postMessage({
						action : 'setMaterialsGroups',
						values : 
							[
								{
									configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
								},
									{
									configurationName : `${standardValue.Chinguard_design}|${typeDesignChin}|${standardValue.Chinguard_design_color}`,
									groupName : 'Chinguard_design_color'
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
									configurationName : standardValue.Chinguard_trim,
									groupName : 'Chinguard_trim'
								}	
							]
					}, '*');
					setLoader(true);
				}, '2000');
			}
		}
		if (varnishChin && !aerationChin) {
			if (standardValue.Chinguard_design === '' || standardValue.Chinguard_design === 'plain') {
				setTimeout(() => {
					viewerIframe.postMessage({
						action : 'setMaterialsGroups',
						values : 
							[
								{
									configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
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
									configurationName : standardValue.Chinguard_trim,
									groupName : 'Chinguard_trim'
								}		
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
			else {
				setTimeout(() => {
					viewerIframe.postMessage({
						action : 'setMaterialsGroups',
						values : 
							[
								{
									configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
								},
									{
									configurationName : `${standardValue.Chinguard_design}|${typeDesignChin}|${standardValue.Chinguard_design_color}`,
									groupName : 'Chinguard_design_color'
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
									configurationName : standardValue.Chinguard_trim,
									groupName : 'Chinguard_trim'
								}		
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
		}
		if (!varnishChin && !aerationChin) {
			if (standardValue.Chinguard_design === '' || standardValue.Chinguard_design === 'plain') {
					setTimeout(() => {
						viewerIframe.postMessage({
							action : 'setMaterialsGroups',
							values : 
								[
									{
										configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
										groupName : 'Chinguard_color'
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
										configurationName : standardValue.Chinguard_trim,
										groupName : 'Chinguard_trim'
									}				
								]
							}, '*');
						setLoader(true);
					}, '2000');
			}
			else {
				setTimeout(() => {
					viewerIframe.postMessage({
						action : 'setMaterialsGroups',
						values : 
							[
								{
									configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
								},
									{
									configurationName : `${standardValue.Chinguard_design}|${typeDesignChin}|${standardValue.Chinguard_design_color}`,
									groupName : 'Chinguard_design_color'
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
									configurationName : standardValue.Chinguard_trim,
									groupName : 'Chinguard_trim'
								}				
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
		}
		if (!varnishChin && aerationChin) {
			if (standardValue.Chinguard_design === '' || standardValue.Chinguard_design === 'plain'){
				setTimeout(() => {
					viewerIframe.postMessage({
						action : 'setMaterialsGroups',
						values : 
							[
								{
									configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
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
									configurationName : standardValue.Chinguard_trim,
									groupName : 'Chinguard_trim'
								}					
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
			else {
				setTimeout(() => {
					viewerIframe.postMessage({
						action : 'setMaterialsGroups',
						values : 
							[
								{
									configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
								},
									{
									configurationName : `${standardValue.Chinguard_design}|${typeDesignChin}|${standardValue.Chinguard_design_color}`,
									groupName : 'Chinguard_design_color'
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
									configurationName : standardValue.Chinguard_trim,
									groupName : 'Chinguard_trim'
								}			
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
		}
	}
	if (standardValue.Chinguard_trim.includes('leather')) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
						{
							parentLocalId: 1,
							localId: parseInt(`${Noeud[0].chinguard.chinguardTrimLeather.localId}` + Date.now()),
							matrix: [1, 0, 0, 0,
							0, 1, 0, 0,
							0, 0, 1, 0,
							0, 0, 0, 1],
							SKU: Noeud[0].chinguard.chinguardTrimLeather.SKU
						}
					],
				localIdsToRemove :
					localIdToRemove
			}, "*");
			localIdToRemove = [];
		setLoader(false);
		if (varnishChin && aerationChin) {
			if (standardValue.Chinguard_design === '' || standardValue.Chinguard_design === 'plain') {
				setTimeout(() => {
					viewerIframe.postMessage({
						action : 'setMaterialsGroups',
						values : 
							[
								{
									configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
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
									configurationName : standardValue.Chinguard_trim,
									groupName : 'Chinguard_trim'
								}	
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
			else {
				setTimeout(() => {
					viewerIframe.postMessage({
						action : 'setMaterialsGroups',
						values : 
							[
								{
									configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
								},
									{
									configurationName : `${standardValue.Chinguard_design}|${typeDesignChin}|${standardValue.Chinguard_design_color}`,
									groupName : 'Chinguard_design_color'
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
									configurationName : standardValue.Chinguard_trim,
									groupName : 'Chinguard_trim'
								}	
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
		}
		if (varnishChin && !aerationChin) {
			if (standardValue.Chinguard_design === '' || standardValue.Chinguard_design === 'plain') {
				setTimeout(() => {
					viewerIframe.postMessage({
						action : 'setMaterialsGroups',
						values : 
							[
								{
									configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
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
									configurationName : standardValue.Chinguard_trim,
									groupName : 'Chinguard_trim'
								}		
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
			else {
				setTimeout(() => {
					viewerIframe.postMessage({
						action : 'setMaterialsGroups',
						values : 
							[
								{
									configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
								},
									{
									configurationName : `${standardValue.Chinguard_design}|${typeDesignChin}|${standardValue.Chinguard_design_color}`,
									groupName : 'Chinguard_design_color'
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
									configurationName : standardValue.Chinguard_trim,
									groupName : 'Chinguard_trim'
								}		
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
		}
		if (!varnishChin && !aerationChin) {
			if (standardValue.Chinguard_design === '' || standardValue.Chinguard_design === 'plain') {
					setTimeout(() => {
						viewerIframe.postMessage({
							action : 'setMaterialsGroups',
							values : 
								[
									{
										configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
										groupName : 'Chinguard_color'
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
										configurationName : standardValue.Chinguard_trim,
										groupName : 'Chinguard_trim'
									}				
								]
							}, '*');
						setLoader(true);
					}, '2000');
			}
			else {
				setTimeout(() => {
					viewerIframe.postMessage({
						action : 'setMaterialsGroups',
						values : 
							[
								{
									configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
								},
									{
									configurationName : `${standardValue.Chinguard_design}|${typeDesignChin}|${standardValue.Chinguard_design_color}`,
									groupName : 'Chinguard_design_color'
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
									configurationName : standardValue.Chinguard_trim,
									groupName : 'Chinguard_trim'
								}				
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
		}
		if (!varnishChin && aerationChin) {
			if (standardValue.Chinguard_design === '' || standardValue.Chinguard_design === 'plain') {
				setTimeout(() => {
					viewerIframe.postMessage({
						action : 'setMaterialsGroups',
						values : 
							[
								{
									configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
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
									configurationName : standardValue.Chinguard_trim,
									groupName : 'Chinguard_trim'
								}					
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
			else {
				setTimeout(() => {
					viewerIframe.postMessage({
						action : 'setMaterialsGroups',
						values : 
							[
								{
									configurationName : `${typeColorChin}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
								},
									{
									configurationName : `${standardValue.Chinguard_design}|${typeDesignChin}|${standardValue.Chinguard_design_color}`,
									groupName : 'Chinguard_design_color'
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
									configurationName : standardValue.Chinguard_trim,
									groupName : 'Chinguard_trim'
								}			
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
		}
	}
}

export default TrimChin;