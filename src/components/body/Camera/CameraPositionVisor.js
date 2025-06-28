import CameraPositionChange from "../../../../assets/json/CameraPosition";

const CameraPosition = (fileName) => {
	let	viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	switch (fileName) {
		case 'visorType':
			viewerIframe.postMessage({
				action : 'setViewpoint',
				name:'perspective'
			},'*');
    	break;
		case 'visor':
			viewerIframe.postMessage({
				action : 'setViewpoint',
				name:'perspective'
			},'*');
			break;
		default:		
	}
}

export default CameraPosition;