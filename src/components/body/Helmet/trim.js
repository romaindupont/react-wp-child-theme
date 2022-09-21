import Noeud from '../../../../assets/json/helmetid';
const Trim = (standardValue) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow;
	if (standardValue.Helmet_trim.includes('rubber') ) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
						Noeud[0].helmet.helmetTrimRubber,
					],
				localIdsToRemove :
					[
						Noeud[0].helmet.helmetTrimLeather.localId
					]
			}, "*");
			viewerIframe.postMessage({
				action : 'setMaterialsGroups',
				values : 
					[
						{
							configurationName : standardValue.Helmet_trim,
							groupName : 'Helmet_trim'
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
						Noeud[0].helmet.helmetTrimRubber,
					],
				localIdsToRemove :
					[
						Noeud[0].helmet.helmetTrimRubber.localId
					]
			}, "*");
			viewerIframe.postMessage({
				action : 'setMaterialsGroups',
				values : 
					[
						{
							configurationName : standardValue.Helmet_trim,
							groupName : 'Helmet_trim'
						}
					]
			}, '*');
	}

}

export default Trim;