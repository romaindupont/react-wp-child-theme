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
			setTimeout(() => {
				viewerIframe.postMessage({
					action : 'setMaterialsGroups',
					values : 
						[
							{
								configurationName : `${standardValue.Chinguard_color_type}|${standardValue.Chinguard_color}`,
								groupName : 'Chinguard_color'
							},
								{
								configurationName : `${standardValue.Chinguard_design}|${standardValue.Chinguard_design_type}|${standardValue.Chinguard_design_color}`,
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
		if (varnishChin && !aerationChin) {
			setTimeout(() => {
				viewerIframe.postMessage({
					action : 'setMaterialsGroups',
					values : 
						[
							{
								configurationName : `${standardValue.Chinguard_color_type}|${standardValue.Chinguard_color}`,
								groupName : 'Chinguard_color'
							},
								{
								configurationName : `${standardValue.Chinguard_design}|${standardValue.Chinguard_design_type}|${standardValue.Chinguard_design_color}`,
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
		if (!varnishChin && !aerationChin) {
			if (standardValue.Chinguard_design === '' || standardValue.Chinguard_design === 'plain') {
					setTimeout(() => {
						viewerIframe.postMessage({
							action : 'setMaterialsGroups',
							values : 
								[
									{
										configurationName : `${standardValue.Chinguard_color_type}|${standardValue.Chinguard_color}`,
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
									configurationName : `${standardValue.Chinguard_color_type}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
								},
									{
									configurationName : `${standardValue.Chinguard_design}|${standardValue.Chinguard_design_type}|${standardValue.Chinguard_design_color}`,
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
									configurationName : `${standardValue.Chinguard_color_type}|${standardValue.Chinguard_color}`,
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
									configurationName : `${standardValue.Chinguard_color_type}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
								},
									{
									configurationName : `${standardValue.Chinguard_design}|${standardValue.Chinguard_design_type}|${standardValue.Chinguard_design_color}`,
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
		console.log(standardValue.Chinguard_trim);
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
	
			setTimeout(() => {
				viewerIframe.postMessage({
					action : 'setMaterialsGroups',
					values : 
						[
							{
								configurationName : `${standardValue.Chinguard_color_type}|${standardValue.Chinguard_color}`,
								groupName : 'Chinguard_color'
							},
								{
								configurationName : `${standardValue.Chinguard_design}|${standardValue.Chinguard_design_type}|${standardValue.Chinguard_design_color}`,
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
		if (varnishChin && !aerationChin) {
			setTimeout(() => {
				viewerIframe.postMessage({
					action : 'setMaterialsGroups',
					values : 
						[
							{
								configurationName : `${standardValue.Chinguard_color_type}|${standardValue.Chinguard_color}`,
								groupName : 'Chinguard_color'
							},
								{
								configurationName : `${standardValue.Chinguard_design}|${standardValue.Chinguard_design_type}|${standardValue.Chinguard_design_color}`,
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
		if (!varnishChin && !aerationChin) {
			if (standardValue.Chinguard_design === '' || standardValue.Chinguard_design === 'plain') {
					setTimeout(() => {
						viewerIframe.postMessage({
							action : 'setMaterialsGroups',
							values : 
								[
									{
										configurationName : `${standardValue.Chinguard_color_type}|${standardValue.Chinguard_color}`,
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
									configurationName : `${standardValue.Chinguard_color_type}|${standardValue.Chinguard_color}`,
									groupName : 'Chinguard_color'
								},
								{
									configurationName : `${standardValue.Chinguard_design}|${standardValue.Chinguard_design_type}|${standardValue.Chinguard_design_color}`,
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
									configurationName : `${standardValue.Chinguard_color_type}|${standardValue.Chinguard_color}`,
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
									configurationName : `${standardValue.Chinguard_color_type}|${standardValue.Chinguard_color}`,
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
		}
	}
}

export default TrimChin;