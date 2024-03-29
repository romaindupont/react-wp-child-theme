import CameraPositionChange from "../../../../assets/json/CameraPosition";

const CameraPosition = (fileName) => {
	let	viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	switch (fileName) {
		case 'interior':
			viewerIframe.postMessage(CameraPositionChange[0].helmet.interior,'*');
    	break;
		case 'zippers':
			viewerIframe.postMessage(CameraPositionChange[0].helmet.zippers,'*');
			setTimeout(
				() => {
					viewerIframe.postMessage({
					action : 'setZoomProportion',
					value : 0.9,
					transitionTime : 500
				},'*');
			}, 500);
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
			setTimeout(
				function() {
					viewerIframe.postMessage({
					action : 'setZoomProportion',
					value : 0.86,
					transitionTime : 500
				},'*');
			}, 500);
			break;
		case 'logo' :
			viewerIframe.postMessage(CameraPositionChange[0].helmet.logo,'*');
			setTimeout(
				() => {
					viewerIframe.postMessage({
					action : 'setZoomProportion',
					value : 0.83,
					transitionTime : 500
				},'*');
			}, 500);
			break;
			case 'metal-parts'	:
				viewerIframe.postMessage({action : 'resetCamera'},'*');
			break;
			case 'trim'	:
				viewerIframe.postMessage({action : 'resetCamera'},'*');
			break;
			case 'aeration'	:
				viewerIframe.postMessage({action : 'resetCamera'},'*');
			break;
		default:	
	}
}

export default CameraPosition;