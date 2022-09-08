const MainColor = (standardValue) => {
	let viewerIframe = null;
	viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	viewerIframe.postMessage({
		action : 'setMaterialsGroups',
		values : 
			[
				{
					configurationName : `${standardValue.Helmet_color_type}|${standardValue.Helmet_color}`,
					groupName : 'Helmet_color'
				}
			]
	}, '*');
}

export default MainColor;