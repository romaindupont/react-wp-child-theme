import Noeud from '../../../../assets/json/helmetid';

const RightNumber = (rightNumberWindow, nodesConfiguration, setLoader) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if(nodes.SKU === 'custom_numberingRight') {
			localIdToRemove.push(nodes.localId);
		}
	}) 
	if(rightNumberWindow) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[	
						{
							parentLocalId: 1,
							localId: parseInt(`${Noeud[0].custom.numberingRight.localId}` + Date.now()),
							matrix: [1, 0, 0, 0,
							0, 1, 0, 0,
							0, 0, 1, 0,
							0, 0, 0, 1],
							SKU: Noeud[0].custom.numberingRight.SKU
						}
					],
				localIdsToRemove :
					localIdToRemove
			}, "*");
	}
	if(!rightNumberWindow) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
					],
				localIdsToRemove :
					localIdToRemove
			}, "*");
	}
}

export default RightNumber;

/* viewerIframe.postMessage({
	action : 'updateCustomText',
	data   : {
		configurableMaterial : 'Numbering_back',
		materialVariation : 'Numbering_back',
		contents : ['opacity'],
		color : '#000000',
		backgroundColor : '#000000',
		italic : false,
		bold : false,
		imageWidth : 1024,
		imageHeight : 512,
		verticalAlignment : 'middle',
		horizontalAlignment : 'middle',
		size : 120,
		textOffsetY : 0,
		textOffsetX : 0,
		text : '55',
		font : 'racing',
		underline : true,
		strokeText : true,
		strokeColor : '#000000',
		strokeWidth : 5
	}
}, '*'); */