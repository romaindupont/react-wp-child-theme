const Logo = (standardValue) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	viewerIframe.postMessage({
		action : 'setMaterialsGroups',
		values : 
			[
				{
					configurationName :`${standardValue.Logo}|${standardValue.Logo_color}`,
					groupName : 'Logo'
				}
			]
	}, '*');
}

export default Logo;