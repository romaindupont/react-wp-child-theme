import CameraPositionChange from "../../../../assets/json/CameraPosition";

const CameraPosition = (fileName) => {
	let	viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	switch (fileName) {
		case 'visorType':
			viewerIframe.postMessage(CameraPositionChange[0].visor.visor,'*');
    	break;
		case 'visor':
			viewerIframe.postMessage({action : 'resetCamera'},'*');
			break;
		default:		
	}
}

export default CameraPosition;