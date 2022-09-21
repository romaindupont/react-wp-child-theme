import Noeud from '../../../../assets/json/helmetid';

const TrimChin = (standardValue) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	if (standardValue.Helmet_trim.includes('rubber') ) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
						Noeud[0].chinguard.chinguardTrimRubber
					],
				localIdsToRemove :
					[
						Noeud[0].chinguard.chinguardTrimLeather.localId
					]
			}, "*");
			viewerIframe.postMessage({
				action : 'setMaterialsGroups',
				values : 
					[
						{
							configurationName : standardValue.Chinguard_trim,
							groupName : 'Chinguard_trim'
						}
					]
			}, '*');
	}
	if (standardValue.Helmet_trim.includes('leather') ) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
						Noeud[0].chinguard.chinguardTrimLeather
					],
				localIdsToRemove :
					[
						Noeud[0].chinguard.chinguardTrimRubber.localId
					]
			}, "*");
			viewerIframe.postMessage({
				action : 'setMaterialsGroups',
				values : 
					[
						{
							configurationName : standardValue.Chinguard_trim,
							groupName : 'Chinguard_trim'
						}
					]
			}, '*');
	}
}

export default TrimChin;