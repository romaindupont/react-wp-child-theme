import CameraPositionChange from "../../../../assets/json/CameraPosition";

const CameraPosition = (fileName) => {
	let	viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	switch (fileName) {
		case 'interior':
			viewerIframe.postMessage(CameraPositionChange[0].helmet.interior,'*');
    	break;
		case 'zippers':
			viewerIframe.postMessage(CameraPositionChange[0].helmet.zippers,'*');
   		break;	
		case 'back-number'	:
			viewerIframe.postMessage(CameraPositionChange[0].helmet.backNumber,'*');
			break;
		case 'left-number'	:
			viewerIframe.postMessage(CameraPositionChange[0].helmet.leftNumber,'*');
			break;
		case 'right-number'	:
			viewerIframe.postMessage(CameraPositionChange[0].helmet.rightNumber,'*');
			break;
		case 'size'	:
			viewerIframe.postMessage(CameraPositionChange[0].helmet.size,'*');
			break;
		case 'engraving' :
			viewerIframe.postMessage(CameraPositionChange[0].helmet.engraving,'*');
			break;
		default:
			viewerIframe.postMessage({action : 'resetCamera'},'*');
			viewerIframe.postMessage({action : 'play'},'*');	
	}
}

export default CameraPosition;