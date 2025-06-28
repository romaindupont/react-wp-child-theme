const MetalParts = (standardValue) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	viewerIframe.postMessage({
		action : 'setMaterialsGroups',
		values : 
			[
				{
					configurationName : standardValue.Metal_pieces,
					groupName : 'Metal_pieces'
				}
			]
	}, '*');
}

export default MetalParts;