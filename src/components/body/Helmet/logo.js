import Noeud from '../../../../assets/json/helmetid';

const Logo = (standardValue, nodesConfiguration, setLoader) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if (nodes.SKU === 'logo_standard') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'logo_higher') {
			localIdToRemove.push(nodes.localId);
		}
	}) 
	if (standardValue.Logo_color === 'none') {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
				[],
				localIdsToRemove :
					localIdToRemove
			}, "*");
		localIdToRemove = [];
	} else {
		if (standardValue.Helmet_design === 'star') {
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
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
					configurationName :`${standardValue.Logo}|${standardValue.Logo_color}`,
					groupName : 'Logo'
				}
			]
	}, '*');
	setLoader(true);
			}, '2000');

		}else {
	viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
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
					configurationName :`${standardValue.Logo}|${standardValue.Logo_color}`,
					groupName : 'Logo'
				}
			]
	}, '*');
	setLoader(true);
			}, '2000');
		}}
}

export default Logo;