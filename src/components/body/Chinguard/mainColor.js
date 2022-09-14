const MainColorChin = (standardValue) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	viewerIframe.postMessage({
		action : 'setMaterialsGroups',
		values : 
			[
				{
					configurationName : `${standardValue.Chinguard_color_type}|${standardValue.Chinguard_color}`,
					groupName : 'Chinguard_color'
				}
			]
	}, '*');
}

export default MainColorChin;