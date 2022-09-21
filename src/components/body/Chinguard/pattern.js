import Noeud from '../../../../assets/json/helmetid';

const Pattern = (standardValue, aerationChin) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
		if (aerationChin) {
			if (standardValue.Chinguard_design === 'plain' || standardValue.Chinguard_design === '') {
				viewerIframe.postMessage(
					{
						action : "updateProductNodesInstances",
						nodesToAdd :
							[
								
							],
						localIdsToRemove :
							[
								Noeud[0].chinguard.chinguardDesignGroove.localId,
								Noeud[0].chinguard.chinguardDesignNoGroove.localId
							]
					}, "*");
				}
				else {
					viewerIframe.postMessage(
						{
							action : "updateProductNodesInstances",
							nodesToAdd :
								[
									Noeud[0].chinguard.chinguardDesignGroove
								],
							localIdsToRemove :
								[
									Noeud[0].chinguard.chinguardDesignNoGroove.localId
								]
						}, "*");
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
								}
								
							]
						}, '*');
				}
	} else {	
		if (standardValue.Chinguard_design === 'plain' || standardValue.Chinguard_design === '') {
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
						[
							
						],
					localIdsToRemove :
						[
							Noeud[0].chinguard.chinguardDesignGroove.localId,
							Noeud[0].chinguard.chinguardDesignNoGroove.localId
						]
				}, "*");
			}
			else {
				viewerIframe.postMessage(
					{
						action : "updateProductNodesInstances",
						nodesToAdd :
							[
								Noeud[0].chinguard.chinguardDesignNoGroove
							],
						localIdsToRemove :
							[
								Noeud[0].chinguard.chinguardDesignGroove.localId
							]
					}, "*");
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
							}
							
						]
				}, '*');
			}
	}
}

export default Pattern;