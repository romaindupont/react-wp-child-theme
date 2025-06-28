import CameraPositionChange from "../../../../assets/json/CameraPosition";

const CameraPosition = (fileName) => {
	let	viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	switch (fileName) {
		case 'aeration':
			viewerIframe.postMessage(CameraPositionChange[0].chinguard.aeration,'*');
    	break;
		case 'chinguard':
			viewerIframe.postMessage({
				action : 'setViewpoint',
				name:'perspective'
			},'*');
			break;
			case 'main-color':
				viewerIframe.postMessage({
					action : 'setViewpoint',
					name:'perspective'
				},'*');
				break;
				case 'varnish':
					viewerIframe.postMessage({
						action : 'setViewpoint',
						name:'perspective'
					},'*');
					break;
			case 'pattern':
				viewerIframe.postMessage({action : 'resetCamera'},'*');
				break;
		default:
	}
}

export default CameraPosition;