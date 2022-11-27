import CameraPositionChange from "../../../../assets/json/CameraPosition";

const CameraPosition = (fileName) => {
	let	viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	switch (fileName) {
		case 'aeration':
			viewerIframe.postMessage(CameraPositionChange[0].chinguard.aeration,'*');
    	break;
		default:
		/* 	viewerIframe.postMessage({action : 'resetCamera'},'*');
			viewerIframe.postMessage({action : 'play'},'*'); */
		
	}
}

export default CameraPosition;