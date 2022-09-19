import Noeud from '../../../../assets/json/helmetid';

const VisorChoice = (standardValue) => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	switch (standardValue.Visor_type) {
		case 'peak_visor':
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
					[
						Noeud[0].visor.visorPeak,
						Noeud[0].visor.visorPeakCoating
					],
					localIdsToRemove :
						[
							Noeud[0].visor.visorShortShield.localId,
							Noeud[0].visor.visorLongShield.localId,
							Noeud[0].visor.visorElements.localId
						]
				}, "*");
		break;
		case 'short_visor':
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
					[
						Noeud[0].visor.visorElements,
						Noeud[0].visor.visorShortShield
						
					],
					localIdsToRemove :
						[
							Noeud[0].visor.visorPeak.localId,
							Noeud[0].visor.visorLongShield.localId,
							Noeud[0].visor.visorPeakCoating.localId
						]
				}, "*");
		break;
		case 'long_visor':
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
					[
						Noeud[0].visor.visorElements,
						Noeud[0].visor.visorLongShield
					],
					localIdsToRemove :
						[
							Noeud[0].visor.visorPeak.localId,
							Noeud[0].visor.visorShortShield.localId,
							Noeud[0].visor.visorPeakCoating.localId
						]
				}, "*");
		break;

		default:
			viewerIframe.postMessage(
				{
					action : "updateProductNodesInstances",
					nodesToAdd :
					[
						Noeud[0].visor.visorPeak,
						Noeud[0].visor.visorPeakCoating
					],
					localIdsToRemove :
						[
							Noeud[0].visor.visorShortShield.localId,
							Noeud[0].visor.visorLongShield.localId,
							Noeud[0].visor.visorElements.localId
						]
				}, "*");
	}
	viewerIframe.postMessage({
		action : 'setMaterialsGroups',
		values : 
			[
				{
					configurationName : `${standardValue.Visor_peak_type}|${standardValue.Visor_peak_color}`,
					groupName : 'Peak_color'
				},
				{
					configurationName : `${standardValue.Visor_color}`,
					groupName : 'Visor_color'
				}
			]
	}, '*');
}

export default VisorChoice;

