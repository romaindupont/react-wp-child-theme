const MainColor = (standardValue) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let typeColor = standardValue.Helmet_color_type;
		if (standardValue.Helmet_color_type === 'gilding') {
			typeColor = 'metallic'
		}
		else {
			typeColor = standardValue.Helmet_color_type;
		}
	viewerIframe.postMessage({
		action : 'setMaterialsGroups',
		values : 
			[
				{
					configurationName : `${typeColor}|${standardValue.Helmet_color}`,
					groupName : 'Helmet_color'
				}
			]
	}, '*');
}

export default MainColor;