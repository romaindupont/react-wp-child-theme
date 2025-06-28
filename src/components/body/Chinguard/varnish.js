import Noeud from '../../../../assets/json/helmetBikeid';

const VarnishChin = (varnishChin, aerationChin, nodesConfiguration, setLoader, standardValue) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if (nodes.SKU === 'chinguard_layer1') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'chinguard_layer2') {
			localIdToRemove.push(nodes.localId);
		}
/* 		if (nodes.SKU === 'chinguard_layer3') {
			 localIdToRemove.push(nodes.localId);
		} */
		if (nodes.SKU === 'chinguardCoating_layer1') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'chinguardCoating_layer2') {
			localIdToRemove.push(nodes.localId);
		}
/* 		if (nodes.SKU === 'chinguardCoating_layer3') {
			localIdToRemove.push(nodes.localId);
		} */
		if (nodes.SKU === 'chinguard_elements_layer1') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'chinguard_elements_layer2') {
			localIdToRemove.push(nodes.localId);
		}
		/* if (nodes.SKU === 'chinguard_elements_layer3') {
			localIdToRemove.push(nodes.localId);
		} */
		if (nodes.SKU === 'chinguardTrim_rubber_layer1') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'chinguardTrim_leather_layer1') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'chinguardTrim_rubber_layer2') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'chinguardTrim_leather_layer2') {
			localIdToRemove.push(nodes.localId);
		}
	/* 	if (nodes.SKU === 'chinguardTrim_rubber_layer3') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'chinguardTrim_leather_layer3') {
			localIdToRemove.push(nodes.localId);
		} */
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
		let leatherOrRubber = {
			parentLocalId: 1,
			localId: parseInt(`${Noeud[0].chinguard.chinguardTrimRubberLayer2.localId}` + Date.now()),
			matrix: [1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1],
			SKU: Noeud[0].chinguard.chinguardTrimRubberLayer1.SKU
		}
		if (standardValue.Helmet_trim.includes('leather')) {
			leatherOrRubber = {
				parentLocalId: 1,
				localId: parseInt(`${Noeud[0].chinguard.chinguardTrimLeatherLayer2.localId}` + Date.now()),
				matrix: [1, 0, 0, 0,
				0, 1, 0, 0,
				0, 0, 1, 0,
				0, 0, 0, 1],
				SKU: Noeud[0].chinguard.chinguardTrimLeatherLayer2.SKU
			}
		} else {
			leatherOrRubber = {
				parentLocalId: 1,
				localId: parseInt(`${Noeud[0].chinguard.chinguardTrimRubberLayer2.localId}` + Date.now()),
				matrix: [1, 0, 0, 0,
				0, 1, 0, 0,
				0, 0, 1, 0,
				0, 0, 0, 1],
				SKU: Noeud[0].chinguard.chinguardTrimRubberLayer2.SKU
			}
		}
	if (varnishChin) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
						{
							parentLocalId: 1,
							localId: parseInt(`${Noeud[0].chinguard.chinguardElementsLayer2.localId}` + Date.now()),
							matrix: [1, 0, 0, 0,
							0, 1, 0, 0,
							0, 0, 1, 0,
							0, 0, 0, 1],
							SKU: Noeud[0].chinguard.chinguardElementsLayer2.SKU
						},
						{
							parentLocalId: 1,
							localId: parseInt(`${Noeud[0].chinguard.chinguardLayer2.localId}` + Date.now()),
							matrix: [1, 0, 0, 0,
							0, 1, 0, 0,
							0, 0, 1, 0,
							0, 0, 0, 1],
							SKU: Noeud[0].chinguard.chinguardLayer2.SKU
						},
						{
							parentLocalId: 1,
							localId: parseInt(`${Noeud[0].chinguard.chinguardCoatingLayer2.localId}` + Date.now()),
							matrix: [1, 0, 0, 0,
							0, 1, 0, 0,
							0, 0, 1, 0,
							0, 0, 0, 1],
							SKU: Noeud[0].chinguard.chinguardCoatingLayer2.SKU
						},
						{						
							parentLocalId: 1,
							localId: parseInt(`${Noeud[0].screw.backScrewsLayer2Chinguard.localId}` + Date.now()),
							matrix: [1, 0, 0, 0,
							0, 1, 0, 0,
							0, 0, 1, 0,
							0, 0, 0, 1],
							SKU: Noeud[0].screw.backScrewsLayer2Chinguard.SKU
						},
						{
							parentLocalId: 1,
							localId: parseInt(`${Noeud[0].screw.frontScrewsLayer2Chinguard.localId}` + Date.now()),
							matrix: [1, 0, 0, 0,
							0, 1, 0, 0,
							0, 0, 1, 0,
							0, 0, 0, 1],
							SKU: Noeud[0].screw.frontScrewsLayer2Chinguard.SKU
						},
						leatherOrRubber,
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
							configurationName : `${standardValue.Chinguard_design}|${typeDesignChin}|${standardValue.Chinguard_design_color}`,
							groupName : 'Chinguard_design_color'
						}			
					]
				}, '*');
			setLoader(true);
		}, '2000');
	}
	if (!varnishChin) {
		
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].chinguard.chinguardElementsLayer2.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].chinguard.chinguardElementsLayer2.SKU
							},
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].chinguard.chinguardLayer2.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].chinguard.chinguardLayer2.SKU
							},
							{						
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].screw.backScrewsLayer2Chinguard.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].screw.backScrewsLayer2Chinguard.SKU
							},
							{
								parentLocalId: 1,
								localId: parseInt(`${Noeud[0].screw.frontScrewsLayer2Chinguard.localId}` + Date.now()),
								matrix: [1, 0, 0, 0,
								0, 1, 0, 0,
								0, 0, 1, 0,
								0, 0, 0, 1],
								SKU: Noeud[0].screw.frontScrewsLayer2Chinguard.SKU
							},
							leatherOrRubber,
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
							}					
						]
					}, '*');
				setLoader(true);
			}, '2000');
	}

}

export default VarnishChin;