const ScreenShot = () => {
	let	viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	viewerIframe.postMessage({
		action : 'getScreenshots',
		width : 512,
		takeBackground : false,
		height : 512,
		cameras : [{
			position : [4.13, 2.53, 3.96],
			target:[0,1.171,-0.0731],
			up:[0,1,0]
	},{
			position : [5.905,0.9709,0.3857],
			target:[0,1.171,-0.0731],
			up:[0,1,0]
		},
		{
			position : [-0.33,1.53,5.83],
			target:[0,1.171,-0.0731],
			up:[0,1,0]
		},
		{
			position : [0.262,-0.385,-5.786],
			target:[0,1.171,-0.0731],
			up:[0,1,0]
		}
		
		]
	},'*');
}

export default ScreenShot;