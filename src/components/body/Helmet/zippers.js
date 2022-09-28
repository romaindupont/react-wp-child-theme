import Noeud from '../../../../assets/json/helmetid';

const Zippers = (standardValue, nodesConfiguration, setLoader, aerationHelmet, varnishHelmet) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if (nodes.SKU === 'pullingFlap_nylon') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'pullingFlap_leather') {
			localIdToRemove.push(nodes.localId);
		}
	}) 
	if (standardValue.flap === 'nylon') {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
						{
							parentLocalId: 1,
							localId: parseInt(`${Noeud[0].flap.pullingFlapNylon.localId}` + Date.now()),
							matrix: [1, 0, 0, 0,
							0, 1, 0, 0,
							0, 0, 1, 0,
							0, 0, 0, 1],
							SKU: Noeud[0].flap.pullingFlapNylon.SKU
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
	if (standardValue.flap === 'leather') {
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].flap.pullingFlapLeather.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].flap.pullingFlapLeather.SKU
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
}

export default Zippers;
