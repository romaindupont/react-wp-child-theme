import Right from "../../svg/Right";
import Wrong from "../../svg/Wrong";
import Noeud from '../../../../../../assets/json/helmetid';

const Engraving = ({backEngraving, setBackEngraving}) => {
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
					<button className="buttonAdd" onClick={()=>setBackEngraving(true)}>{`\u002B`} Add</button>
				:
					<button className="buttonAdd" onClick={()=>setBackEngraving(false)}>{`\u002D`} Delete</button>
			}
			<div className={!backEngraving ? "numberWindows" : "openNumberWindows"}>
				<p className="infosNumber">Your Text</p>
				<div className="chooseWindows">
					<form className="chooseWindows_input">
						<input type="text" name="textSelection" id="textSelection"/>
						<div className="selectButtonNumber">
							<button onSubmit={okClic}>OK</button>
							<Right windowClose={setBackEngraving}/>
							<Wrong windowClose={setBackEngraving}/>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Engraving;