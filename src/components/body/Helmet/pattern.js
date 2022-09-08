import Noeud from '../../../../assets/json/helmetid';

const Pattern = (standardValue, aerationHelmet) => {
	let viewerIframe = null;
	viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
		if (aerationHelmet) {
			if (standardValue.Helmet_design === 'plain' || standardValue.Helmet_design === '') {
				viewerIframe.postMessage(
					{
						action : "updateProductNodesInstances",
						nodesToAdd :
						[
							
						],
						localIdsToRemove :
						[
							Noeud[0].helmet.helmetDesignGroove.localId,
							Noeud[0].helmet.helmetDesignNoGroove.localId
						]
					}, "*");
				}
				else {
					viewerIframe.postMessage(
						{
							action : "updateProductNodesInstances",
							nodesToAdd :
							[
								Noeud[0].helmet.helmetDesignGroove
							],
							localIdsToRemove :
							[
								Noeud[0].helmet.helmetDesignNoGroove.localId
							]
						}, "*");
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
								
							]
						}, '*');
				}
	} else {	
		if (standardValue.Helmet_design === 'plain' || standardValue.Helmet_design === '') {
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
					[
						
					],
					localIdsToRemove :
					[
						Noeud[0].helmet.helmetDesignGroove.localId,
						Noeud[0].helmet.helmetDesignNoGroove.localId
					]
				}, "*");
			}
			else {
				viewerIframe.postMessage(
					{
						action : "updateProductNodesInstances",
						nodesToAdd :
						[
							Noeud[0].helmet.helmetDesignNoGroove
						],
						localIdsToRemove :
							[
								Noeud[0].helmet.helmetDesignGroove.localId
							]
					}, "*");
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
							
						]
				}, '*');
			}
	}
}

export default Pattern;