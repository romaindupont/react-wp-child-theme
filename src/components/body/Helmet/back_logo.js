import Noeud from '../../../../assets/json/helmetBikeid';

const BackLogo = (standardValue, nodesConfiguration, setLoader) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
		setLoader(false);
			setTimeout(() => {
				viewerIframe.postMessage({
					action : 'setMaterialsGroups',
					values : 
						[
							{
								configurationName : `${standardValue.Back_logo}`,
								groupName : 'Back_logo'
							}
						]
				}, '*');
				setLoader(true);
		}, 2000)
	}

export default BackLogo;