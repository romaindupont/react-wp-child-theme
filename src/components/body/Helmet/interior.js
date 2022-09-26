const Interior = (standardValue, setLoader) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	setLoader(false);
	setTimeout(()=> {
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

export default Interior;