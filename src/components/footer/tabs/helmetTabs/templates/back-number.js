const { useState } = wp.element;
import Right from "../../svg/Right";
import Wrong from "../../svg/Wrong";
import ClassicNumber from "../../svg/Number/ClassicNumber";
import DirtNumber from "../../svg/Number/DirtNumber";
import PixelNumber from "../../svg/Number/PixelNumber";
import RacingNumber from "../../svg/Number/RacingNumber";

const BackNumber = ({backNumberWindow, setBackNumberWindow, fileNames}) => {
	const [ openWindow, setOpenWindow ] = useState(false);
	const [ backNumberInput, setBackNumberInput ] = useState({
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
				configurableMaterial : 'Numbering_back',
				materialVariation : `${backNumberInput.numberColorType}|${backNumberInput.numberColor}`,
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
				textOffsetY : 0,
				textOffsetX : 0,
				text : backNumberInput.numberText,
				font : backNumberInput.numberStyle,
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
						configurationName : `${backNumberInput.numberColorType}|${backNumberInput.numberColor}`,
						groupName : 'Numbering_back_color'
					}
				]
		}, '*');
	}
	return (
		<div className="numberChoice">
			{
				!backNumberWindow ? 
					<button className="buttonAdd" onClick={() => setBackNumberWindow(true) & setOpenWindow(true)}>{`\u002B`} Add</button> : 
					<div className="numberButton">
						<button className="buttonAdd" onClick={() => setBackNumberWindow(false) & setOpenWindow(false)}>{`\u002D`} Delete</button>
						<button className="buttonAdd" onClick={() => setBackNumberWindow(false) & setOpenWindow(true)}>{`\u002B`} Modify</button>
					</div>
			}
			<div className={!openWindow ? "numberWindows" : "openNumberWindows" }>
				<p className="infosNumber">Choose your style and your number</p>
				<div className="chooseWindows">
					<div className="chooseWindows_input">
						<input type="number" name="numberSelection" id="numberSelection" onChange={(e)=>setBackNumberInput({...backNumberInput, numberText: e.target.value })} />
						<div className="selectButtonNumber">
							<div className="selectButtonNumber--right" onClick={okClic}>
								<Right windowClose={setOpenWindow} setNumberWindow={setBackNumberWindow} fileNames={fileNames} />
							</div>
							<Wrong windowClose={setOpenWindow} setNumberWindow={setBackNumberWindow}/>
						</div>
					</div>
						<div className="chooseStyleNumber">
							<div className={backNumberInput.numberStyle === 'montserrat' ? 'Select' : 'allScrew'} onClick={()=>setBackNumberInput({...backNumberInput, numberStyle: 'montserrat' })}>
								<ClassicNumber />
								<span className="textAction">Classic</span>
							</div>
							<div className={backNumberInput.numberStyle === 'dirt' ? 'Select' : 'allScrew'} onClick={()=>setBackNumberInput({...backNumberInput, numberStyle: 'dirt' })}>
								<DirtNumber />
								<span className="textAction">Dirt</span>
							</div>
							<div className={backNumberInput.numberStyle === 'pixel' ? 'Select' : 'allScrew'} onClick={()=>setBackNumberInput({...backNumberInput, numberStyle: 'pixel' })}>
								<PixelNumber />
								<span className="textAction">Pixel</span>
							</div>
							<div className={backNumberInput.numberStyle === 'racing' ? 'Select' : 'allScrew'} onClick={()=>setBackNumberInput({...backNumberInput, numberStyle: 'racing' })}>
								<RacingNumber />
								<span className="textAction">Racing</span>
							</div>
						</div>
					</div>
				</div>
				<div className={backNumberWindow ? "openColorList" : "openColorClose"}>
					<div className="colorListType">
						<span className={backNumberInput.numberColorType === 'plain' ? 'selectButton' : 'buttonChoice'} onClick={() => setBackNumberInput({...backNumberInput, numberColorType:'plain'}) & okClic()}>Plain</span>
						<span className={backNumberInput.numberColorType === 'metallic' ? 'selectButton' : 'buttonChoice'} onClick={() => setBackNumberInput({...backNumberInput, numberColorType:'metallic'}) & okClic()}>Metallic</span>
						<span className={backNumberInput.numberColorType === 'glitter' ? 'selectButton' : 'buttonChoice'}  onClick={() => setBackNumberInput({...backNumberInput, numberColorType:'glitter'}) & okClic()}>Glitter</span>
						<span className={backNumberInput.numberColorType === 'gilding' ? 'selectButton' : 'buttonChoice'} onClick={() => setBackNumberInput({...backNumberInput, numberColorType:'gilding'}) & okClic()}>Gilding</span>
					</div>
					<div className="colorList">
						{backNumberInput.numberColorType === 'plain' ? 
						<>
							<div className={backNumberInput.numberColor === 'carbon' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'carbon'}) & okClic()}><div className="roundColor carbon"></div><span className="textAction">Carbon</span></div>
							<div className={backNumberInput.numberColor === 'white' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'white'}) & okClic()}><div className="roundColor white"></div><span className="textAction">White</span></div>
							<div className={backNumberInput.numberColor === 'black' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'black'}) & okClic()}><div className="roundColor black"></div><span className="textAction">Black</span></div>
							<div className={backNumberInput.numberColor === 'grey' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'grey'}) & okClic()}><div className="roundColor coolGrey"></div><span className="textAction">Cool Grey</span></div>
							<div className={backNumberInput.numberColor === 'estate blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'estate blue'}) & okClic()}><div className="roundColor EstateBlue"></div><span className="textAction">Estate Blue</span></div>
							<div className={backNumberInput.numberColor === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'pirate grey'}) & okClic()}><div className="roundColor pirateGrey"></div><span className="textAction">Pirate Grey</span></div>
							<div className={backNumberInput.numberColor === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'dusk blue'}) & okClic()}><div className="roundColor duskBlue"></div><span className="textAction">Dusk Blue</span></div>
							<div className={backNumberInput.numberColor === 'doubleCream' ? 'selectColor' : 'colorP'}><div className="roundColor doubleCream"></div><span className="textAction">Double Cream</span></div>
							<div className={backNumberInput.numberColor === 'rallyBlue' ? 'selectColor' : 'colorP'}><div className="roundColor rallyBlue"></div><span className="textAction">Rally Blue</span></div>
							<div className={backNumberInput.numberColor === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iris yellow'}) & okClic()}><div className="roundColor yellowIris"></div><span className="textAction">Yellow Iris</span></div>
							<div className={backNumberInput.numberColor === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iceberg green'}) & okClic()}><div className="roundColor icebergGreen"></div><span className="textAction">Iceberg Green</span></div>
							<div className={backNumberInput.numberColor === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'blazing yellow'}) & okClic()}><div className="roundColor blazingYellow"></div><span className="textAction">Blazing Yellow</span></div>
							<div className={backNumberInput.numberColor === 'greenDouble' ? 'selectColor' : 'colorP'}><div className="roundColor greenDouble"></div><span className="textAction">Green Double</span></div>
							<div className={backNumberInput.numberColor === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'blazing orange'}) & okClic()}><div className="roundColor blazingOrange"></div><span className="textAction">Blazing Orange</span></div>
							<div className={backNumberInput.numberColor === 'limeGreen' ? 'selectColor' : 'colorP'}><div className="roundColor limeGreen"></div><span className="textAction">Lime Green</span></div>
							<div className={backNumberInput.numberColor === 'vermillion' ? 'selectColor' : 'colorP'}><div className="roundColor vermillion"></div><span className="textAction">Vermillion</span></div>
							<div className={backNumberInput.numberColor === 'green gables' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'green gables'}) & okClic()}><div className="roundColor greenGables"></div><span className="textAction">Green Gables</span></div>
							<div className={backNumberInput.numberColor === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'orchid pink'}) & okClic()}><div className="roundColor orchidPink"></div><span className="textAction">Orchid Pink</span></div>
							<div className={backNumberInput.numberColor === 'camel' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'camel'}) & okClic()}><div className="roundColor camel"></div><span className="textAction">Camel</span></div>
							<div className={backNumberInput.numberColor === 'plumPurple' ? 'selectColor' : 'colorP'}><div className="roundColor plumPurple"></div><span className="textAction">Plum Purple</span></div>
							<div className={backNumberInput.numberColor === 'brown stone' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'brown stone'}) & okClic()}><div className="roundColor brownStone"></div><span className="textAction">Brown Stone</span></div>
							<div className={backNumberInput.numberColor === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'cayenne red'}) & okClic()}><div className="roundColor cayenneRed"></div><span className="textAction">Cayenne Red</span></div>
							<div className={backNumberInput.numberColor === 'iridecent blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iridecent blue'}) & okClic()}><div className="roundColor iridescentBlue"></div><span className="textAction">Iridescent Blue</span></div>
							<div className={backNumberInput.numberColor === 'chinese red' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'chinese red'}) & okClic()}><div className="roundColor chinesesRed"></div><span className="textAction">Chineses Red</span></div>
							<div className={backNumberInput.numberColor === 'iridecent pink' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iridecent pink'}) & okClic()}><div className="roundColor iridescentPink"></div><span className="textAction">Iridescent Pink</span></div>
							<div className={backNumberInput.numberColor === 'fluo yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'fluo yellow'}) & okClic()}><div className="roundColor fluoYellow"></div><span className="textAction">Fluo Yellow</span></div>
							<div className={backNumberInput.numberColor === 'fluo pink' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'fluo pink'}) & okClic()}><div className="roundColor fluoPink"></div><span className="textAction">Fluo Pink</span></div>
						</> 
							: backNumberInput.numberColorType === 'metallic' || backNumberInput.numberColorType === 'glitter' ? 
						<>
							<div className={backNumberInput.numberColor === 'white' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'white'}) & okClic()}><div className="roundColor white"></div><span className="textAction">White</span></div>
							<div className={backNumberInput.numberColor === 'black' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'black'}) & okClic()}><div className="roundColor black"></div><span className="textAction">Black</span></div>
							<div className={backNumberInput.numberColor === 'grey' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'grey'}) & okClic()}><div className="roundColor coolGrey"></div><span className="textAction">Cool Grey</span></div>
							<div className={backNumberInput.numberColor === 'estate blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'estate blue'}) & okClic()}><div className="roundColor EstateBlue"></div><span className="textAction">Estate Blue</span></div>
							<div className={backNumberInput.numberColor === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'pirate grey'}) & okClic()}><div className="roundColor pirateGrey"></div><span className="textAction">Pirate Grey</span></div>
							<div className={backNumberInput.numberColor === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'dusk blue'}) & okClic()}><div className="roundColor duskBlue"></div><span className="textAction">Dusk Blue</span></div>
							<div className={backNumberInput.numberColor === 'doubleCream' ? 'selectColor' : 'colorP'}><div className="roundColor doubleCream"></div><span className="textAction">Double Cream</span></div>
							<div className={backNumberInput.numberColor === 'rallyBlue' ? 'selectColor' : 'colorP'}><div className="roundColor rallyBlue"></div><span className="textAction">Rally Blue</span></div>
							<div className={backNumberInput.numberColor === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iris yellow'}) & okClic()}><div className="roundColor yellowIris"></div><span className="textAction">Yellow Iris</span></div>
							<div className={backNumberInput.numberColor === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iceberg green'}) & okClic()}><div className="roundColor icebergGreen"></div><span className="textAction">Iceberg Green</span></div>
							<div className={backNumberInput.numberColor === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'blazing yellow'}) & okClic()}><div className="roundColor blazingYellow"></div><span className="textAction">Blazing Yellow</span></div>
							<div className={backNumberInput.numberColor === 'greenDouble' ? 'selectColor' : 'colorP'}><div className="roundColor greenDouble"></div><span className="textAction">Green Double</span></div>
							<div className={backNumberInput.numberColor === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'blazing orange'}) & okClic()}><div className="roundColor blazingOrange"></div><span className="textAction">Blazing Orange</span></div>
							<div className={backNumberInput.numberColor === 'limeGreen' ? 'selectColor' : 'colorP'}><div className="roundColor limeGreen"></div><span className="textAction">Lime Green</span></div>
							<div className={backNumberInput.numberColor === 'vermillion' ? 'selectColor' : 'colorP'}><div className="roundColor vermillion"></div><span className="textAction">Vermillion</span></div>
							<div className={backNumberInput.numberColor === 'green gables' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'green gables'}) & okClic()}><div className="roundColor greenGables"></div><span className="textAction">Green Gables</span></div>
							<div className={backNumberInput.numberColor === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'orchid pink'}) & okClic()}><div className="roundColor orchidPink"></div><span className="textAction">Orchid Pink</span></div>
							<div className={backNumberInput.numberColor === 'camel' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'camel'}) & okClic()}><div className="roundColor camel"></div><span className="textAction">Camel</span></div>
							<div className={backNumberInput.numberColor === 'plumPurple' ? 'selectColor' : 'colorP'}><div className="roundColor plumPurple"></div><span className="textAction">Plum Purple</span></div>
							<div className={backNumberInput.numberColor === 'brown stone' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'brown stone'}) & okClic()}><div className="roundColor brownStone"></div><span className="textAction">Brown Stone</span></div>
							<div className={backNumberInput.numberColor === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'cayenne red'}) & okClic()}><div className="roundColor cayenneRed"></div><span className="textAction">Cayenne Red</span></div>
							<div className={backNumberInput.numberColor === 'iridecent blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iridecent blue'}) & okClic()}><div className="roundColor iridescentBlue"></div><span className="textAction">Iridescent Blue</span></div>
							<div className={backNumberInput.numberColor === 'chinese red' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'chinese red'}) & okClic()}><div className="roundColor chinesesRed"></div><span className="textAction">Chineses Red</span></div>
							<div className={backNumberInput.numberColor === 'iridecent pink' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iridecent pink'}) & okClic()}><div className="roundColor iridescentPink"></div><span className="textAction">Iridescent Pink</span></div>
							<div className={backNumberInput.numberColor === 'fluo yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'fluo yellow'}) & okClic()}><div className="roundColor fluoYellow"></div><span className="textAction">Fluo Yellow</span></div>
							<div className={backNumberInput.numberColor === 'fluo pink' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'fluo pink'}) & okClic()}><div className="roundColor fluoPink"></div><span className="textAction">Fluo Pink</span></div>
						</>
							: 
						<>
							<div className={backNumberInput.numberColor === 'copper foil' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'copper foil'}) & okClic()}><div className="roundColor copperFoil"></div><span className="textAction">Copper Foil</span></div>
							<div className={backNumberInput.numberColor === 'gold foil' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'gold foil'}) & okClic()}><div className="roundColor goldFoil"></div><span className="textAction">Gold Foil</span></div>
							<div className={backNumberInput.numberColor === 'silver foil' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'silver foil'}) & okClic()}><div className="roundColor silverFoil"></div><span className="textAction">Silver Foil</span></div>
						</>
						}		
					</div>
			</div>
		</div>
	)
}

export default BackNumber;