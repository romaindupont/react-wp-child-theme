import Noeud from '../../../../assets/json/helmetid';

const Trim = (standardValue, nodesConfiguration, setLoader, aerationHelmet, varnishHelmet) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow;
	let localIdToRemove = [];
	let typeColor = standardValue.Helmet_color_type;
		if (standardValue.Helmet_color_type === 'gilding') {
			typeColor = 'metallic'
		}
		else {
			typeColor = standardValue.Helmet_color_type;
		}
	nodesConfiguration.find((nodes) => { 
		if (nodes.SKU === 'helmetTrim_rubber') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'helmetTrim_leather') {
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
	if (standardValue.Helmet_trim.includes('rubber')) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
						{
							parentLocalId: 1,
							localId: parseInt(`${Noeud[0].helmet.helmetTrimRubber.localId}` + Date.now()),
							matrix: [1, 0, 0, 0,
							0, 1, 0, 0,
							0, 0, 1, 0,
							0, 0, 0, 1],
							SKU: Noeud[0].helmet.helmetTrimRubber.SKU
						}
					],
				localIdsToRemove :
					localIdToRemove
			}, "*");
		localIdToRemove = [];
		setLoader(false);
		if (varnishHelmet && aerationHelmet) {
			if (standardValue.Helmet_design === '' || standardValue.Helmet_design === 'plain') {
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
									configurationName : standardValue.Helmet_trim,
									groupName : 'Helmet_trim'
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
									configurationName : standardValue.Helmet_trim,
									groupName : 'Helmet_trim'
								}	
							]
					}, '*');
					setLoader(true);
				}, '2000');
			}
		}
		if (varnishHelmet && !aerationHelmet) {
			if (standardValue.Helmet_design === '' || standardValue.Helmet_design === 'plain') {
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
									configurationName : standardValue.Helmet_trim,
									groupName : 'Helmet_trim'
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
									configurationName : standardValue.Helmet_trim,
									groupName : 'Helmet_trim'
								}		
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
		}
		if (!varnishHelmet && !aerationHelmet) {
			if (standardValue.Helmet_design === '' || standardValue.Helmet_design === 'plain') {
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
										configurationName : standardValue.Helmet_trim,
										groupName : 'Helmet_trim'
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
									configurationName : standardValue.Helmet_trim,
									groupName : 'Helmet_trim'
								}				
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
		}
		if (!varnishHelmet && aerationHelmet) {
			if (standardValue.Helmet_design === '' || standardValue.Helmet_design === 'plain'){
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
									configurationName : standardValue.Helmet_trim,
									groupName : 'Helmet_trim'
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
									configurationName : standardValue.Helmet_trim,
									groupName : 'Helmet_trim'
								}			
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
		}
	}
	if (standardValue.Helmet_trim.includes('leather')) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
						{
							parentLocalId: 1,
							localId: parseInt(`${Noeud[0].helmet.helmetTrimLeather.localId}` + Date.now()),
							matrix: [1, 0, 0, 0,
							0, 1, 0, 0,
							0, 0, 1, 0,
							0, 0, 0, 1],
							SKU: Noeud[0].helmet.helmetTrimLeather.SKU
						}
					],
				localIdsToRemove :
					localIdToRemove
			}, "*");
			localIdToRemove = [];
		setLoader(false);
		if (varnishHelmet && aerationHelmet) {
			if (standardValue.Helmet_design === '' || standardValue.Helmet_design === 'plain') {
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
									configurationName : standardValue.Helmet_trim,
									groupName : 'Helmet_trim'
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
									configurationName : standardValue.Helmet_trim,
									groupName : 'Helmet_trim'
								}	
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
		}
		if (varnishHelmet && !aerationHelmet) {
			if (standardValue.Helmet_design === '' || standardValue.Helmet_design === 'plain') {
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
									configurationName : standardValue.Helmet_trim,
									groupName : 'Helmet_trim'
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
									configurationName : standardValue.Helmet_trim,
									groupName : 'Helmet_trim'
								}		
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
		}
		if (!varnishHelmet && !aerationHelmet) {
			if (standardValue.Helmet_design === '' || standardValue.Helmet_design === 'plain') {
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
										configurationName : standardValue.Helmet_trim,
										groupName : 'Helmet_trim'
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
									configurationName : standardValue.Helmet_trim,
									groupName : 'Helmet_trim'
								}				
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
		}
		if (!varnishHelmet && aerationHelmet) {
			if (standardValue.Helmet_design === '' || standardValue.Helmet_design === 'plain') {
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
									configurationName : standardValue.Helmet_trim,
									groupName : 'Helmet_trim'
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
									configurationName : standardValue.Helmet_trim,
									groupName : 'Helmet_trim'
								}			
							]
						}, '*');
					setLoader(true);
				}, '2000');
			}
		}
	}
}

export default Trim;