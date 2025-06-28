import Noeud from '../../../../assets/json/helmetBikeid';

const RearText = (standardValue, nodesConfiguration, setLoader) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if (nodes.SKU === 'helmet_carbonWindowECE') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'helmet_carbonWindowDOT') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'custom_backEngravingECE') {
			localIdToRemove.push(nodes.localId);
		}
		if (nodes.SKU === 'custom_backEngravingDOT') {
			localIdToRemove.push(nodes.localId);
		}
	}) 
	if(standardValue.Rear_text_certification === 'DOT') {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
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
								configurationName : `${standardValue.Rear_text_size}`,
								groupName : 'Rear_text'
							}
						]
				}, '*');
				setLoader(true);
			}, 2000)
	} else {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
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
								configurationName : `${standardValue.Rear_text_size}`,
								groupName : 'Rear_text'
							}
						]
				}, '*');
				setLoader(true);
		}, 2000)
	}
}

export default RearText;