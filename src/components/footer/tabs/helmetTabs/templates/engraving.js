const { useState } = wp.element;
import Right from "../../svg/Right";
import Wrong from "../../svg/Wrong";

const Engraving = ({backEngraving, setBackEngraving, fileNames, traduction}) => {
	const [ openWindow, setOpenWindow ] = useState(false);
	const [ engravingInput, setEngravingInput ] = useState({
		text: 'VELDT',
		textStyle: 'montserrat'
	});
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	const okClic = () => {
		viewerIframe.postMessage({
			action : 'updateCustomText',
			data   : {
				configurableMaterial : 'Back_engraving',
				materialVariation : 'Visible',
				contents : ['opacity'],
				color : '#FFFFFF',
				backgroundColor : '#000000',
				italic : false,
				bold : false,
				imageWidth : 2048,
				imageHeight : 512,
				verticalAlignment : 'middle',
				horizontalAlignment : 'middle',
				size : 180,
				textOffsetY : 0,
				textOffsetX : 0,
				text : engravingInput.text,
				font : engravingInput.textStyle,
				underline : false,
				strokeText : false,
				strokeColor : '#000000',
				strokeWidth : 5
			}
		}, '*');
	}
	return (
		<div className="numberChoice">
			{
				!backEngraving ? 
					<button className="buttonAdd" onClick={() => setBackEngraving(true) & setOpenWindow(true)}>{`\u002B`} {traduction.Add}</button>
				:
				<div className="numberButton">
					<button className="buttonAdd" onClick={() => setBackEngraving(false) & setOpenWindow(false)}>{`\u002D`} {traduction.Delete}</button>
					<button className="buttonAdd" onClick={() => setBackEngraving(false) & setOpenWindow(true)}>{`\u002B`} {traduction.Modify}</button>
				</div>
			}
			<div className={!openWindow ? "numberWindows" : "openNumberWindows"}>
				<p className="infosNumber">{traduction.YourText}</p>
				<div className="chooseWindows">
					<form className="chooseWindows_input">
						<input type="text" name="textSelection" id="textSelection" onChange={(e)=>setEngravingInput({...engravingInput, text: e.target.value })}/>
						<div className="selectButtonNumber">
							<div className="selectButtonNumber--right" onClick={okClic}>
								<Right windowClose={setOpenWindow} setNumberWindow={setBackEngraving} fileNames={fileNames}/>
							</div>
								<Wrong windowClose={setOpenWindow} setNumberWindow={setBackEngraving}/>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Engraving;