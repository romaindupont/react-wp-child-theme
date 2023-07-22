const Replay = async () => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	await viewerIframe.postMessage({
		action : 'saveModularConfiguration',
		screenshot : false,
		shortLink : true
	},'*');
}

export default Replay;