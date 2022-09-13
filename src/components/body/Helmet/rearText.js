const RearText = (standardValue) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	viewerIframe.postMessage({
		action : 'setMaterialsGroups',
		values : 
			[
				{
					configurationName : `${standardValue.Rear_text_certification}|${standardValue.Rear_text_size}`,
					groupName : 'Rear_text'
				}
			]
	}, '*');
}

export default RearText;