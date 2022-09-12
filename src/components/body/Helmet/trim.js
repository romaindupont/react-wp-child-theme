const Trim = (standardValue) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
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

export default Trim;