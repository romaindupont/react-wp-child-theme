const { useState } = wp.element;
import ClassicNumber from "../../svg/Number/ClassicNumber";
import DirtNumber from "../../svg/Number/DirtNumber";
import PixelNumber from "../../svg/Number/PixelNumber";
import RacingNumber from "../../svg/Number/RacingNumber";
import Right from "../../svg/Right";
import Wrong from "../../svg/Wrong";

const RightNumber = ({rightNumberWindow, setRightNumberWindow, fileNames}) => {
	const [ openWindow, setOpenWindow ] = useState(false);
	const [ rightNumberInput, setRightNumberInput ] = useState({
		numberText: '08',
		numberStyle: 'montserrat',
		numberColorType: 'plain',
		numberColor: 'white'
	});
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	const okClic = () => {
		viewerIframe.postMessage({
			action : 'updateCustomText',
			data   : {
				configurableMaterial : 'Numbering_right',
				materialVariation : `${rightNumberInput.numberColorType}|${rightNumberInput.numberColor}`,
				contents : ['opacity'],
				color : '#FFFFFF',
				backgroundColor : '#000000',
				italic : false,
				bold : true,
				imageWidth : 1024,
				imageHeight : 512,
				verticalAlignment : 'middle',
				horizontalAlignment : 'middle',
				size : 350,
				textOffsetY : 70,
				textOffsetX : -30,
				text : rightNumberInput.numberText,
				font : rightNumberInput.numberStyle,
				underline : false,
				strokeText : true,
				strokeColor : '#000000',
				strokeWidth : 5
			}
		}, '*');
		viewerIframe.postMessage({
			action : 'setMaterialsGroups',
			values : 
				[
					{
						configurationName : `${rightNumberInput.numberColorType}|${rightNumberInput.numberColor}`,
						groupName : 'Numbering_right_color'
					}
				]
		}, '*');
	}
	return (
		<div className="numberChoice">
			{
				!rightNumberWindow ? 
					<button className="buttonAdd" onClick={()=>setRightNumberWindow(true) & setOpenWindow(true)}>{`\u002B`} Add</button> :
					<div className="numberButton">
						<button className="buttonAdd" onClick={()=>setRightNumberWindow(false) & setOpenWindow(false)}>{`\u002D`} Delete</button>
						<button className="buttonAdd" onClick={()=>setRightNumberWindow(false) & setOpenWindow(true)}>{`\u002B`} Modify</button>
					</div>
			}
			<div className={!openWindow ? "numberWindows" : "openNumberWindows" }>
				<p className="infosNumber">Choose your style and your number</p>
				<div className="chooseWindows">
					<div className="chooseWindows_input">
						<input type="number" name="numberSelection" id="numberSelection" onChange={(e) => setRightNumberInput({...rightNumberInput, numberText: e.target.value })}/>
						<div className="selectButtonNumber">
							<div className="selectButtonNumber--right" onClick={okClic}>
								<Right windowClose={setOpenWindow} setNumberWindow={setRightNumberWindow} fileNames={fileNames}/>
							</div>	
							<Wrong windowClose={setOpenWindow} setNumberWindow={setRightNumberWindow} />
						</div>
					</div>
					<div className="chooseStyleNumber">
							<div className={rightNumberInput.numberStyle === 'montserrat' ? 'Select' : 'allScrew'} onClick={() => setRightNumberInput({...rightNumberInput, numberStyle: 'montserrat' })}>
								<ClassicNumber />
								<span className="textAction">Classic</span>
							</div>
							<div className={rightNumberInput.numberStyle === 'dirt' ? 'Select' : 'allScrew'} onClick={() => setRightNumberInput({...rightNumberInput, numberStyle: 'dirt' })}>
								<DirtNumber />
								<span className="textAction">Dirt</span>
							</div>
							<div className={rightNumberInput.numberStyle === 'pixel' ? 'Select' : 'allScrew'} onClick={() => setRightNumberInput({...rightNumberInput, numberStyle: 'pixel' })}>
								<PixelNumber />
								<span className="textAction">Pixel</span>
							</div>
							<div className={rightNumberInput.numberStyle === 'racing' ? 'Select' : 'allScrew'} onClick={() => setRightNumberInput({...rightNumberInput, numberStyle: 'racing' })}>
								<RacingNumber />
								<span className="textAction">Racing</span>
							</div>
						</div>
					</div>
				</div>
			<div className={rightNumberWindow ? "openColorList" : "openColorClose"}>
				<div className="colorListType">
					<span className={rightNumberInput.numberColorType === 'plain' ? 'selectButton' : 'buttonChoice'} onClick={() => setRightNumberInput({...rightNumberInput, numberColorType:'plain'}) & okClic()}>Plain</span>
					<span className={rightNumberInput.numberColorType === 'metallic' ? 'selectButton' : 'buttonChoice'} onClick={() => setRightNumberInput({...rightNumberInput, numberColorType:'metallic'}) & okClic()}>Metallic</span>
					<span className={rightNumberInput.numberColorType === 'glitter' ? 'selectButton' : 'buttonChoice'}  onClick={() => setRightNumberInput({...rightNumberInput, numberColorType:'glitter'}) & okClic()}>Glitter</span>
					<span className={rightNumberInput.numberColorType === 'gilding' ? 'selectButton' : 'buttonChoice'} onClick={() => setRightNumberInput({...rightNumberInput, numberColorType:'gilding'}) & okClic()}>Gilding</span>
				</div>
				<div className="colorList">
					{rightNumberInput.numberColorType === 'plain' ? 
					<>
						<div className={rightNumberInput.numberColor === 'carbon' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'carbon'}) & okClic()}><div className="roundColor carbon"></div><span className="textAction">Carbon</span></div>
						<div className={rightNumberInput.numberColor === 'white' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'white'}) & okClic()}><div className="roundColor white"></div><span className="textAction">White</span></div>
						<div className={rightNumberInput.numberColor === 'black' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'black'}) & okClic()}><div className="roundColor black"></div><span className="textAction">Black</span></div>
						<div className={rightNumberInput.numberColor === 'grey' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'grey'}) & okClic()}><div className="roundColor coolGrey"></div><span className="textAction">Cool Grey</span></div>
						<div className={rightNumberInput.numberColor === 'estate blue' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'estate blue'}) & okClic()}><div className="roundColor EstateBlue"></div><span className="textAction">Estate Blue</span></div>
						<div className={rightNumberInput.numberColor === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'pirate grey'}) & okClic()}><div className="roundColor pirateGrey"></div><span className="textAction">Pirate Grey</span></div>
						<div className={rightNumberInput.numberColor === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'dusk blue'}) & okClic()}><div className="roundColor duskBlue"></div><span className="textAction">Dusk Blue</span></div>
						<div className={rightNumberInput.numberColor === 'doubleCream' ? 'selectColor' : 'colorP'}><div className="roundColor doubleCream"></div><span className="textAction">Double Cream</span></div>
						<div className={rightNumberInput.numberColor === 'rallyBlue' ? 'selectColor' : 'colorP'}><div className="roundColor rallyBlue"></div><span className="textAction">Rally Blue</span></div>
						<div className={rightNumberInput.numberColor === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'iris yellow'}) & okClic()}><div className="roundColor yellowIris"></div><span className="textAction">Yellow Iris</span></div>
						<div className={rightNumberInput.numberColor === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'iceberg green'}) & okClic()}><div className="roundColor icebergGreen"></div><span className="textAction">Iceberg Green</span></div>
						<div className={rightNumberInput.numberColor === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'blazing yellow'}) & okClic()}><div className="roundColor blazingYellow"></div><span className="textAction">Blazing Yellow</span></div>
						<div className={rightNumberInput.numberColor === 'greenDouble' ? 'selectColor' : 'colorP'}><div className="roundColor greenDouble"></div><span className="textAction">Green Double</span></div>
						<div className={rightNumberInput.numberColor === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'blazing orange'}) & okClic()}><div className="roundColor blazingOrange"></div><span className="textAction">Blazing Orange</span></div>
						<div className={rightNumberInput.numberColor === 'limeGreen' ? 'selectColor' : 'colorP'}><div className="roundColor limeGreen"></div><span className="textAction">Lime Green</span></div>
						<div className={rightNumberInput.numberColor === 'vermillion' ? 'selectColor' : 'colorP'}><div className="roundColor vermillion"></div><span className="textAction">Vermillion</span></div>
						<div className={rightNumberInput.numberColor === 'green gables' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'green gables'}) & okClic()}><div className="roundColor greenGables"></div><span className="textAction">Green Gables</span></div>
						<div className={rightNumberInput.numberColor === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'orchid pink'}) & okClic()}><div className="roundColor orchidPink"></div><span className="textAction">Orchid Pink</span></div>
						<div className={rightNumberInput.numberColor === 'camel' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'camel'}) & okClic()}><div className="roundColor camel"></div><span className="textAction">Camel</span></div>
						<div className={rightNumberInput.numberColor === 'plumPurple' ? 'selectColor' : 'colorP'}><div className="roundColor plumPurple"></div><span className="textAction">Plum Purple</span></div>
						<div className={rightNumberInput.numberColor === 'brown stone' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'brown stone'}) & okClic()}><div className="roundColor brownStone"></div><span className="textAction">Brown Stone</span></div>
						<div className={rightNumberInput.numberColor === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'cayenne red'}) & okClic()}><div className="roundColor cayenneRed"></div><span className="textAction">Cayenne Red</span></div>
						<div className={rightNumberInput.numberColor === 'iridecent blue' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'iridecent blue'}) & okClic()}><div className="roundColor iridescentBlue"></div><span className="textAction">Iridescent Blue</span></div>
						<div className={rightNumberInput.numberColor === 'chinese red' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'chinese red'}) & okClic()}><div className="roundColor chinesesRed"></div><span className="textAction">Chineses Red</span></div>
						<div className={rightNumberInput.numberColor === 'iridecent pink' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'iridecent pink'}) & okClic()}><div className="roundColor iridescentPink"></div><span className="textAction">Iridescent Pink</span></div>
						<div className={rightNumberInput.numberColor === 'fluo yellow' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'fluo yellow'}) & okClic()}><div className="roundColor fluoYellow"></div><span className="textAction">Fluo Yellow</span></div>
						<div className={rightNumberInput.numberColor === 'fluo pink' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'fluo pink'}) & okClic()}><div className="roundColor fluoPink"></div><span className="textAction">Fluo Pink</span></div>
					</> 
					: rightNumberInput.numberColorType === 'metallic' || rightNumberInput.numberColorType === 'glitter' ? 
					<>
						<div className={rightNumberInput.numberColor === 'white' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'white'}) & okClic()}><div className="roundColor white"></div><span className="textAction">White</span></div>
						<div className={rightNumberInput.numberColor === 'black' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'black'}) & okClic()}><div className="roundColor black"></div><span className="textAction">Black</span></div>
						<div className={rightNumberInput.numberColor === 'grey' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'grey'}) & okClic()}><div className="roundColor coolGrey"></div><span className="textAction">Cool Grey</span></div>
						<div className={rightNumberInput.numberColor === 'estate blue' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'estate blue'}) & okClic()}><div className="roundColor EstateBlue"></div><span className="textAction">Estate Blue</span></div>
						<div className={rightNumberInput.numberColor === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'pirate grey'}) & okClic()}><div className="roundColor pirateGrey"></div><span className="textAction">Pirate Grey</span></div>
						<div className={rightNumberInput.numberColor === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'dusk blue'}) & okClic()}><div className="roundColor duskBlue"></div><span className="textAction">Dusk Blue</span></div>
						<div className={rightNumberInput.numberColor === 'doubleCream' ? 'selectColor' : 'colorP'}><div className="roundColor doubleCream"></div><span className="textAction">Double Cream</span></div>
						<div className={rightNumberInput.numberColor === 'rallyBlue' ? 'selectColor' : 'colorP'}><div className="roundColor rallyBlue"></div><span className="textAction">Rally Blue</span></div>
						<div className={rightNumberInput.numberColor === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'iris yellow'}) & okClic()}><div className="roundColor yellowIris"></div><span className="textAction">Yellow Iris</span></div>
						<div className={rightNumberInput.numberColor === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'iceberg green'}) & okClic()}><div className="roundColor icebergGreen"></div><span className="textAction">Iceberg Green</span></div>
						<div className={rightNumberInput.numberColor === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'blazing yellow'}) & okClic()}><div className="roundColor blazingYellow"></div><span className="textAction">Blazing Yellow</span></div>
						<div className={rightNumberInput.numberColor === 'greenDouble' ? 'selectColor' : 'colorP'}><div className="roundColor greenDouble"></div><span className="textAction">Green Double</span></div>
						<div className={rightNumberInput.numberColor === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'blazing orange'}) & okClic()}><div className="roundColor blazingOrange"></div><span className="textAction">Blazing Orange</span></div>
						<div className={rightNumberInput.numberColor === 'limeGreen' ? 'selectColor' : 'colorP'}><div className="roundColor limeGreen"></div><span className="textAction">Lime Green</span></div>
						<div className={rightNumberInput.numberColor === 'vermillion' ? 'selectColor' : 'colorP'}><div className="roundColor vermillion"></div><span className="textAction">Vermillion</span></div>
						<div className={rightNumberInput.numberColor === 'green gables' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'green gables'}) & okClic()}><div className="roundColor greenGables"></div><span className="textAction">Green Gables</span></div>
						<div className={rightNumberInput.numberColor === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'orchid pink'}) & okClic()}><div className="roundColor orchidPink"></div><span className="textAction">Orchid Pink</span></div>
						<div className={rightNumberInput.numberColor === 'camel' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'camel'}) & okClic()}><div className="roundColor camel"></div><span className="textAction">Camel</span></div>
						<div className={rightNumberInput.numberColor === 'plumPurple' ? 'selectColor' : 'colorP'}><div className="roundColor plumPurple"></div><span className="textAction">Plum Purple</span></div>
						<div className={rightNumberInput.numberColor === 'brown stone' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'brown stone'}) & okClic()}><div className="roundColor brownStone"></div><span className="textAction">Brown Stone</span></div>
						<div className={rightNumberInput.numberColor === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'cayenne red'}) & okClic()}><div className="roundColor cayenneRed"></div><span className="textAction">Cayenne Red</span></div>
						<div className={rightNumberInput.numberColor === 'iridecent blue' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'iridecent blue'}) & okClic()}><div className="roundColor iridescentBlue"></div><span className="textAction">Iridescent Blue</span></div>
						<div className={rightNumberInput.numberColor === 'chinese red' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'chinese red'}) & okClic()}><div className="roundColor chinesesRed"></div><span className="textAction">Chineses Red</span></div>
						<div className={rightNumberInput.numberColor === 'iridecent pink' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'iridecent pink'}) & okClic()}><div className="roundColor iridescentPink"></div><span className="textAction">Iridescent Pink</span></div>
						<div className={rightNumberInput.numberColor === 'fluo yellow' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'fluo yellow'}) & okClic()}><div className="roundColor fluoYellow"></div><span className="textAction">Fluo Yellow</span></div>
						<div className={rightNumberInput.numberColor === 'fluo pink' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'fluo pink'}) & okClic()}><div className="roundColor fluoPink"></div><span className="textAction">Fluo Pink</span></div>
					</>
					: 
					<>
						<div className={rightNumberInput.numberColor === 'copper foil' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'copper foil'}) & okClic()}><div className="roundColor copperFoil"></div><span className="textAction">Copper Foil</span></div>
						<div className={rightNumberInput.numberColor === 'gold foil' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'gold foil'}) & okClic()}><div className="roundColor goldFoil"></div><span className="textAction">Gold Foil</span></div>
						<div className={rightNumberInput.numberColor === 'silver foil' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'silver foil'}) & okClic()}><div className="roundColor silverFoil"></div><span className="textAction">Silver Foil</span></div>
					</>}		
				</div>
			</div>
		</div>
	)
}

export default RightNumber;