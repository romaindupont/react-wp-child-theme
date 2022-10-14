const MainColorChin = (standardValue) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let typeColor = standardValue.Chinguard_color_type;
		if (standardValue.Chinguard_color_type === 'gilding') {
			typeColor = 'metallic'
		}
		else {
			typeColor = standardValue.Chinguard_color_type;
		}
	viewerIframe.postMessage({
		action : 'setMaterialsGroups',
		values : 
			[
				{
					configurationName : `${typeColor}|${standardValue.Chinguard_color}`,
					groupName : 'Chinguard_color'
				}
			]
	}, '*');
}

export default MainColorChin;