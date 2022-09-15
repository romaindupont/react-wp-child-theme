const InteriorChin = (standardValue) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	viewerIframe.postMessage({
		action : 'setMaterialsGroups',
		values : 
			[
				{
					configurationName : standardValue.Interior,
					groupName : 'Interior'
				}
			]
	}, '*');
}

export default InteriorChin;