const Interior = (standardValue, setLoader, withChin) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	setLoader(false);
	if(withChin){
		setTimeout(() => {
			viewerIframe.postMessage({
				action : 'setMaterialsGroups',
				values : 
					[
						{
							configurationName : standardValue.Interior,
							groupName : 'Interior'
						},
						{
							configurationName : standardValue.Interior,
							groupName : 'Chinguard_interior'
						}
					]
			}, '*');
			setLoader(true);
		}, '2000');

	} else {
	setTimeout(() => {
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
		setLoader(true);
	}, '2000');
}
}

export default Interior;