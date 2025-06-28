const Strap = (standardValue) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	let strapColor = standardValue.Strap_color;
	if(standardValue.Strap_color === 'cream') {
		 strapColor = 'creme';
	}
	viewerIframe.postMessage({
		action : 'setMaterialsGroups',
		values : 
			[
				{
					configurationName : `${strapColor}`,
					groupName : 'Strap_color'
				}
			]
	}, '*');
}

export default Strap;
