const { useState } = wp.element;
import Right from "../../svg/Right";
import Wrong from "../../svg/Wrong";

const Engraving = ({
	backEngraving,
	setBackEngraving,
	fileNames,
	traduction,
	engravingInput,
	setEngravingInput,
	mySku,
	setMySku
}) => {
	const [ openWindow, setOpenWindow ] = useState(false);
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
				imageWidth : 1024,
				imageHeight : 128,
				verticalAlignment : 'middle',
				horizontalAlignment : 'middle',
				size : 85,
				textOffsetY : 10,
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
					<button className="buttonAdd" onClick={() => setBackEngraving(true) & setOpenWindow(true) & setMySku({...mySku, position13:'e'})}>{`\u002B`} {traduction.Add}</button>
				:
				<div className="numberButton">
					<button className="buttonAdd" onClick={() => setBackEngraving(false) & setOpenWindow(false) & setMySku({...mySku, position13:'x'})}>{`\u002D`} {traduction.Delete}</button>
					<button className="buttonAdd" onClick={() => setBackEngraving(false) & setOpenWindow(true)}>{`\u002B`} {traduction.Modify}</button>
				</div>
			}
			<div className={!openWindow ? "numberWindows" : "openNumberWindows"}>
				<p className="infosNumber">{traduction.YourText}</p>
				<div className="chooseWindows">
					<form className="chooseWindows_input">
						<input type="text" name="textSelection" id="textSelection" placeholder="TEXT" onChange={(e)=>setEngravingInput({...engravingInput, text: e.target.value })}/>
						<div className="selectButtonNumber">
								<Wrong windowClose={setOpenWindow} setNumberWindow={setBackEngraving}/>
							<div className="selectButtonNumber--right" onClick={okClic}>
								<Right windowClose={setOpenWindow} setNumberWindow={setBackEngraving} fileNames={fileNames}/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Engraving;