import CameraPositionChange from "../../../../assets/json/CameraPosition";

const CameraPosition = (fileName) => {
	let	viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	switch (fileName) {
		case 'aeration':
			viewerIframe.postMessage(CameraPositionChange[0].chinguard.aeration,'*');
    	break;
		case 'chinguard':
			viewerIframe.postMessage({action : 'resetCamera'},'*');
			break;
			case 'pattern':
				viewerIframe.postMessage({action : 'resetCamera'},'*');
				break;
		default:
	}
}

export default CameraPosition;