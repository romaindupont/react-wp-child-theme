import Noeud from '../../../../assets/json/helmetid';

const BackNumber = (backNumberWindow) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	if(backNumberWindow) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
						Noeud[0].custom.numberingBack
					],
				localIdsToRemove :
					[

					]
			}, "*");
	}
	if(!backNumberWindow) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
					],
				localIdsToRemove :
					[	
						Noeud[0].custom.numberingBack.localId
					]
			}, "*");
	}
}

export default BackNumber;

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