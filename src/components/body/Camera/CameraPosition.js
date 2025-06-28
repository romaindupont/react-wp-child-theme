import CameraPositionChange from "../../../../assets/json/CameraPosition";

const CameraPosition = (fileName) => {

	let	viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	switch (fileName) {
		case 'pattern':
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
		case 'interior':
			viewerIframe.postMessage({
				action : 'setViewpoint',
				name:'perspective'
			},'*');
    	break;
		case 'zippers':
			viewerIframe.postMessage({
				action : 'setViewpoint',
				name:'perspective'
			},'*');
   		break;	
		case 'back-number'	:
			viewerIframe.postMessage({
				action : 'setViewpoint',
				name:'back_number'
			},'*');
			break;
		case 'left-number'	:
			viewerIframe.postMessage({
				action : 'setViewpoint',
				name:'left_number'
			},'*');
			break;
		case 'right-number'	:
			viewerIframe.postMessage({
				action : 'setViewpoint',
				name:'right_number'
			},'*');
			break;
		case 'size'	:
			viewerIframe.postMessage({
				action : 'setViewpoint',
				name:'engraving'
			},'*');
			break;
		case 'engraving' :
			viewerIframe.postMessage({
				action : 'setViewpoint',
				name:'engraving'
			},'*');
			break;
		case 'logo' :
			viewerIframe.postMessage({
				action : 'setViewpoint',
				name:'front_logo'
			},'*');
			break;
			case 'rear-logo' :
				viewerIframe.postMessage({
					action : 'setViewpoint',
					name:'engraving'
				},'*');
			break;
			case 'metal-parts'	:
				viewerIframe.postMessage({
					action : 'setViewpoint',
					name:'perspective'
				},'*');
			break;
			case 'trim'	:
				viewerIframe.postMessage({
					action : 'setViewpoint',
					name:'perspective'
				},'*');
			break;
			case 'aeration'	:
				viewerIframe.postMessage({
					action : 'setViewpoint',
					name:'aeration'
				},'*');
			break;
			case 'earmuff'	:
				viewerIframe.postMessage({
					action : 'setViewpoint',
					name:'earmuff'
				},'*');
				break;
				case 'strap'	:
					viewerIframe.postMessage({
						action : 'setViewpoint',
						name:'earmuff'
					},'*');
				break;
		default:	
	}
}

export default CameraPosition;