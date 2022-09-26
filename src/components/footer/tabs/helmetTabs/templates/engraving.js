const { useState } = wp.element;
import Right from "../../svg/Right";
import Wrong from "../../svg/Wrong";

const Engraving = ({backEngraving, setBackEngraving, fileNames}) => {
	const [ openWindow, setOpenWindow ] = useState(false);
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	const okClic = (e) => {
		e.preventDefault();
		console.log(e)
		viewerIframe.postMessage({
					action : 'updateCustomText',
					data   : {
						configurableMaterial : 'Back_engraving',
						materialVariation : 'Back_engraving',
						contents : ['opacity'],
						color : '#FFFFFF',
						backgroundColor : '#FFFFFF',
						italic : false,
						bold : false,
						imageWidth : 1024,
						imageHeight : 512,
						verticalAlignment : 'middle',
						horizontalAlignment : 'middle',
						size : 120,
						textOffsetY : 0,
						textOffsetX : 0,
						text : 'FFANFFFFF',
						font : 'dirt',
						underline : true,
						strokeText : true,
						strokeColor : '#FFFFFF',
						strokeWidth : 5
					}
				}, '*');
	}
	return (
		<div className="numberChoice">
			{
				!backEngraving ? 
					<button className="buttonAdd" onClick={()=>setBackEngraving(true) & setOpenWindow(true)}>{`\u002B`} Add</button>
				:
					<button className="buttonAdd" onClick={()=>setBackEngraving(false) & setOpenWindow(false)}>{`\u002D`} Delete</button>
			}
			<div className={!openWindow ? "numberWindows" : "openNumberWindows"}>
				<p className="infosNumber">Your Text</p>
				<div className="chooseWindows">
					<form className="chooseWindows_input">
						<input type="text" name="textSelection" id="textSelection"/>
						<div className="selectButtonNumber">
							<button onSubmit={okClic}>OK</button>
							<Right windowClose={setOpenWindow} setNumberWindow={setBackEngraving} fileNames={fileNames}/>
							<Wrong windowClose={setOpenWindow} setNumberWindow={setBackEngraving}/>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Engraving;