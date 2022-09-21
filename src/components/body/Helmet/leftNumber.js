import Noeud from '../../../../assets/json/helmetid';

const LeftNumber = (leftNumberWindow) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	if(leftNumberWindow) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
						Noeud[0].custom.numberingLeft
					],
				localIdsToRemove :
					[

					]
			}, "*");
	}
	if(!leftNumberWindow) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :
					[
					],
				localIdsToRemove :
					[	
						Noeud[0].custom.numberingLeft.localId
					]
			}, "*");
	}
}

export default LeftNumber;

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