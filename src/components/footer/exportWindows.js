const exportWindows = ({setOpenOptionMenu, screenshotsWait, traduction, setScreenshotsWait}) => {
	const menuClose = () => {
		setOpenOptionMenu({
			name: '',
			open: false
		}) &
		setScreenshotsWait({
			wait: false,
			arrayScreen: []
		})
	}
	const downloadAll = () => {
		let images = document.querySelectorAll(".imageDownload");
		for (let i of images) {
			let a = document.createElement('a');
			a.href = i.src;
			console.log(i);
			a.download = i.innerHTML = "MyVeldtModel.png";
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		}
	}
const saveConfig = () => {
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	viewerIframe.postMessage({
		action : 'saveConfiguration',
		screenshot : false,
		shortLink : true
	},'*');
}
	return (
		<div className="exportWindow">
				<svg version="1.1" id="exportWindow_closeLogo" className="exportWindow_closeLogo" onClick={menuClose}>
						<g>
							<path className="exportWindow_closeLogo_st101" d="M20.5,1.5c10.5,0,19,8.5,19,19s-8.5,19-19,19s-19-8.5-19-19S10,1.5,20.5,1.5 M20.5,0.5c-11,0-20,9-20,20   s9,20,20,20s20-9,20-20S31.5,0.5,20.5,0.5L20.5,0.5z"></path>
						</g>
						<polygon className="exportWindow_closeLogo_st101" points="28.3,14.1 26.9,12.7 20.5,19.1 14.1,12.7 12.7,14.1 19.1,20.5 12.7,26.9 14.1,28.3 20.5,21.9   26.9,28.3 28.3,26.9 21.9,20.5 "></polygon>
				</svg>
				<div className="menuShare">
					<h3>{traduction.shareProductCreation}</h3>
						<div>
							<div onClick={saveConfig}>
								<p>{traduction.CopyAndShare}</p>
								<svg version="1.1" id="link" viewBox="0 0 41 41">
									<path className="link_st0" d="M20.5,0.5c-11,0-20,9-20,20c0,11,9,20,20,20c11,0,20-9,20-20C40.5,9.5,31.5,0.5,20.5,0.5z M23.2,25.9L19,30.1  c-1.1,1.1-2.5,1.7-4.1,1.7c-3.2,0-5.7-2.6-5.7-5.7c0-1.5,0.6-3,1.7-4.1l2-2c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4  c0.2,0.2,0.4,0.5,0.4,0.9c0,0.3-0.1,0.7-0.4,0.9l-2,2c-0.6,0.6-0.9,1.4-0.9,2.3c0,1.8,1.5,3.2,3.2,3.2c0.9,0,1.7-0.3,2.3-0.9  l4.1-4.1c0.6-0.6,0.9-1.4,0.9-2.3c0-1.1-0.6-2.1-1.5-2.7c-0.3-0.2-0.5-0.5-0.5-0.8c-0.1-0.3,0-0.7,0.2-0.9c0.2-0.3,0.5-0.5,0.8-0.5  c0.3-0.1,0.7,0,0.9,0.2c1.7,1.1,2.7,2.9,2.7,4.8C24.9,23.4,24.3,24.9,23.2,25.9z M30.1,19l-2,2c-0.2,0.2-0.6,0.4-0.9,0.4  c-0.3,0-0.6-0.1-0.9-0.4c-0.2-0.2-0.4-0.5-0.4-0.9c0-0.3,0.1-0.7,0.4-0.9l2-2c0.6-0.6,0.9-1.4,0.9-2.3c0-1.8-1.5-3.2-3.2-3.2  c-0.9,0-1.7,0.3-2.3,0.9l-4.1,4.1c-0.6,0.6-0.9,1.4-0.9,2.3c0,1.1,0.6,2.1,1.5,2.7c0.3,0.2,0.5,0.5,0.5,0.8c0.1,0.3,0,0.7-0.2,0.9  c-0.2,0.3-0.5,0.5-0.8,0.5c-0.1,0-0.2,0-0.3,0c-0.2,0-0.5-0.1-0.7-0.2c-1.7-1.1-2.7-2.9-2.7-4.8c0-1.5,0.6-3,1.7-4.1l4.1-4.1  c1.1-1.1,2.5-1.7,4.1-1.7c3.2,0,5.7,2.6,5.7,5.7C31.8,16.5,31.2,17.9,30.1,19z"></path>
								</svg>
							</div>
							<div onClick={downloadAll}>
								<a className='downloadLink' href="#" download>{traduction.DownloadFourViews}</a>
								<svg version="1.1" id="download" viewBox="0 0 41 41">
									<path className="download_st0" d="M20.5,0.5c-11,0-20,9-20,20c0,11,9,20,20,20c11,0,20-9,20-20C40.5,9.5,31.5,0.5,20.5,0.5z M13.3,19.8l0.2-0.2  c0.2-0.2,0.5-0.3,0.8-0.3c0,0,0,0,0,0c0.3,0,0.6,0.1,0.8,0.3l3.8,3.5V11c0-0.7,0.7-1.3,1.5-1.3S22,10.3,22,11v12.1l3.9-3.4  c0.2-0.2,0.5-0.3,0.8-0.3c0,0,0,0,0,0c0.3,0,0.6,0.1,0.8,0.3l0.2,0.2c0.2,0.2,0.3,0.5,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7L21.3,27  c-0.2,0.2-0.5,0.3-0.8,0.3c0,0,0,0,0,0c-0.3,0-0.6-0.1-0.8-0.3l-6.3-5.7C12.8,20.8,12.8,20.2,13.3,19.8z M28.1,30.1  c0,0.7-0.5,1.2-1.1,1.2H14.1c-0.6,0-1.1-0.5-1.1-1.2v-0.7c0-0.7,0.5-1.2,1.1-1.2h12.9c0.6,0,1.1,0.5,1.1,1.2V30.1z"></path>
								</svg>
							</div>
				</div>
				</div>
				<div className="menuImageToShare">
					<img className="imageDownload menuImageToShare_quarterPosition" src={screenshotsWait.arrayScreen[0]} alt="quarter Position helmet"/>
					<img className="imageDownload menuImageToShare_leftPosition" src={screenshotsWait.arrayScreen[1]} alt="left Position helmet"/>
					<img className="imageDownload menuImageToShare_frontPosition" src={screenshotsWait.arrayScreen[2]} alt="front Position helmet"/>
					<img className="imageDownload menuImageToShare_backPosition" src={screenshotsWait.arrayScreen[3]} alt="back Position helmet"/>
				</div>
			</div>
	)
}

export default exportWindows;