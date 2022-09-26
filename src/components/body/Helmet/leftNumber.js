import Noeud from '../../../../assets/json/helmetid';

const LeftNumber = (leftNumberWindow, nodesConfiguration, setLoader) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow;
	let localIdToRemove = [];
	nodesConfiguration.find((nodes) => { 
		if(nodes.SKU === 'custom_numberingLeft') {
			localIdToRemove.push(nodes.localId);
		}
	}) 
	if(leftNumberWindow) {
		viewerIframe.postMessage(
			{
				action : "updateProductNodesInstances",
				nodesToAdd :

					[
						{
							parentLocalId: 1,
							localId: parseInt(`${Noeud[0].custom.numberingLeft.localId}` + Date.now()),
							matrix: [1, 0, 0, 0,
							0, 1, 0, 0,
							0, 0, 1, 0,
							0, 0, 0, 1],
							SKU: Noeud[0].custom.numberingLeft.SKU
						}
					],
				localIdsToRemove :
					localIdToRemove
			}, "*");
		localIdToRemove = [];
		setLoader(false);
		setTimeout(()=> {
			
	/* 			viewerIframe.postMessage({
					action : 'setMaterialsGroups',
					values : 
						[
							{
								configurationName : 'metallic|camel',
								groupName : '"Numbering_left_color'
							},						
						]
					}, '*'); */
			viewerIframe.postMessage({
				action : 'updateCustomText',
				data   : {
					configurableMaterial : "Numbering_left",
					materialVariation : "Any",
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
					underline : false,
					strokeText : false,
					strokeColor : '#000000',
					strokeWidth : 5
				}
			}, '*');
			viewerIframe.postMessage({
				action : 'setMaterialsGroups',
				values : 
					[
						{
							configurationName : 'metallic|camel',
							groupName : '"Numbering_left_color'
						},						
					]
				}, '*');
			setLoader(true);
		}, '2000');
	}
	if(!leftNumberWindow) {
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
	}
}

export default LeftNumber;
