const CameraPosition = (fileName) => {
	let	viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	viewerIframe.postMessage({
		action : 'getCamera'
	},'*');
	if (fileName === 'interior'){
		viewerIframe.postMessage({
			action : 'setCamera',
			position : [-0.012,-2.13,3.18],
			target : [0,1.171,-0.0731],
			up : [0,1,0],
			transitionTime : 500,
			fov : 40
		},'*');
	}
}

export default CameraPosition;