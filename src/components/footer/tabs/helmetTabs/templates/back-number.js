const { useState, useRef, useEffect } = wp.element;
import Right from "../../svg/Right";
import Wrong from "../../svg/Wrong";
import ClassicNumber from "../../svg/Number/ClassicNumber";
import DirtNumber from "../../svg/Number/DirtNumber";
import PixelNumber from "../../svg/Number/PixelNumber";
import RacingNumber from "../../svg/Number/RacingNumber";
import { useHorizontalScroll } from "../../../../../../utils/useHorizontalScroll";

const BackNumber = ({backNumberWindow, setBackNumberWindow, fileNames, traduction}) => {
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
	const scrollRef = useHorizontalScroll();
	const scrollEffect = (e) => {
		let ratio = 4.5;
		if(e.target.getBoundingClientRect().width < 900) {
			let calcul = e.target.clientWidth/ratio - e.target.scrollLeft;
			if (calcul < `-${e.target.clientWidth/5}`) {
				e.target.style.transform = `translate3d(-${calcul}, 0px, 0px)`; 
			}
			else {
				e.target.style.transform = `translate3d(${calcul}px, 0px, 0px)`; 
			}
		}
	}
	const textInput = useRef(null);
	const handleClick = () => {
		let input = document.getElementById('numberSelection');
    input.focus();
		console.log(input)
  };
	return (
		<div className="numberChoice">
			{
				!backNumberWindow ? 
					<button className="buttonAdd" onClick={() => setBackNumberWindow(true) & setOpenWindow(true) & handleClick()}>{`\u002B`} {traduction.Add}</button> : 
					<div className="numberButton">
						<button className="buttonAdd" onClick={() => setBackNumberWindow(false) & setOpenWindow(false)}>{`\u002D`} {traduction.Delete}</button>
						<button className="buttonAdd" onClick={() => setBackNumberWindow(false) & setOpenWindow(true)}>{`\u002B`} {traduction.Modify}</button>
					</div>
			}
			<div className={!openWindow ? "numberWindows" : "openNumberWindows" }>
				<p className="infosNumber">{traduction.NumberStyleTitle}</p>
				<div className="chooseWindows">
					<div className="chooseWindows_input">
						<input ref={textInput} type="number" name="numberSelection" id="numberSelection" onChange={(e)=>setBackNumberInput({...backNumberInput, numberText: e.target.value })} />
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
								<span className="textAction">{traduction.ClassicNumber}</span>
							</div>
							<div className={backNumberInput.numberStyle === 'dirt' ? 'Select' : 'allScrew'} onClick={()=>setBackNumberInput({...backNumberInput, numberStyle: 'dirt' })}>
								<DirtNumber />
								<span className="textAction">{traduction.DirtNumber}</span>
							</div>
							<div className={backNumberInput.numberStyle === 'pixel' ? 'Select' : 'allScrew'} onClick={()=>setBackNumberInput({...backNumberInput, numberStyle: 'pixel' })}>
								<PixelNumber />
								<span className="textAction">{traduction.PixelNumber}</span>
							</div>
							<div className={backNumberInput.numberStyle === 'racing' ? 'Select' : 'allScrew'} onClick={()=>setBackNumberInput({...backNumberInput, numberStyle: 'racing' })}>
								<RacingNumber />
								<span className="textAction">{traduction.RacingNumber}</span>
							</div>
						</div>
					</div>
				</div>
				<div className={backNumberWindow ? "openColorList" : "openColorClose"}>
					<div className="colorListType">
						<span className={backNumberInput.numberColorType === 'plain' ? 'selectButton' : 'buttonChoice'} onClick={() => setBackNumberInput({...backNumberInput, numberColorType:'plain'}) & okClic()}>{traduction.Plain}</span>
						<span className={backNumberInput.numberColorType === 'metallic' ? 'selectButton' : 'buttonChoice'} onClick={() => setBackNumberInput({...backNumberInput, numberColorType:'metallic'}) & okClic()}>{traduction.Metallic}</span>
						<span className={backNumberInput.numberColorType === 'glitter' ? 'selectButton' : 'buttonChoice'}  onClick={() => setBackNumberInput({...backNumberInput, numberColorType:'glitter'}) & okClic()}>{traduction.Glitter}</span>
						<span className={backNumberInput.numberColorType === 'gilding' ? 'selectButton' : 'buttonChoice'} onClick={() => setBackNumberInput({...backNumberInput, numberColorType:'gilding'}) & okClic()}>{traduction.Gilding}</span>
					</div>
					<div className="colorList" onScroll={scrollEffect} ref={scrollRef}>
						{backNumberInput.numberColorType === 'plain' ? 
						<>
							<div className={backNumberInput.numberColor === 'carbon' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'carbon'}) & okClic()}><div className="roundColor carbon"></div><span className="textAction">{traduction.Carbon}</span></div>
							<div className={backNumberInput.numberColor === 'white' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'white'}) & okClic()}><div className="roundColor white"></div><span className="textAction">{traduction.White}</span></div>
							<div className={backNumberInput.numberColor === 'black' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'black'}) & okClic()}><div className="roundColor black"></div><span className="textAction">{traduction.Black}</span></div>
							<div className={backNumberInput.numberColor === 'grey' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'grey'}) & okClic()}><div className="roundColor coolGrey"></div><span className="textAction">{traduction.CoolGrey}</span></div>
							<div className={backNumberInput.numberColor === 'estate blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'estate blue'}) & okClic()}><div className="roundColor EstateBlue"></div><span className="textAction">{traduction.EstateBlue}</span></div>
							<div className={backNumberInput.numberColor === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'pirate grey'}) & okClic()}><div className="roundColor pirateGrey"></div><span className="textAction">{traduction.PirateGrey}</span></div>
							<div className={backNumberInput.numberColor === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'dusk blue'}) & okClic()}><div className="roundColor duskBlue"></div><span className="textAction">{traduction.DuskBlue}</span></div>
							<div className={backNumberInput.numberColor === 'doubleCream' ? 'selectColor' : 'colorP'}><div className="roundColor doubleCream"></div><span className="textAction">{traduction.DoubleCream}</span></div>
							<div className={backNumberInput.numberColor === 'rallyBlue' ? 'selectColor' : 'colorP'}><div className="roundColor rallyBlue"></div><span className="textAction">{traduction.RallyBlue}</span></div>
							<div className={backNumberInput.numberColor === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iris yellow'}) & okClic()}><div className="roundColor yellowIris"></div><span className="textAction">{traduction.YellowIris}</span></div>
							<div className={backNumberInput.numberColor === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iceberg green'}) & okClic()}><div className="roundColor icebergGreen"></div><span className="textAction">{traduction.IcebergGreen}</span></div>
							<div className={backNumberInput.numberColor === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'blazing yellow'}) & okClic()}><div className="roundColor blazingYellow"></div><span className="textAction">{traduction.BlazingYellow}</span></div>
							<div className={backNumberInput.numberColor === 'greenDouble' ? 'selectColor' : 'colorP'}><div className="roundColor greenDouble"></div><span className="textAction">{traduction.GreenDouble}</span></div>
							<div className={backNumberInput.numberColor === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'blazing orange'}) & okClic()}><div className="roundColor blazingOrange"></div><span className="textAction">{traduction.BlazingOrange}</span></div>
							<div className={backNumberInput.numberColor === 'limeGreen' ? 'selectColor' : 'colorP'}><div className="roundColor limeGreen"></div><span className="textAction">{traduction.LimeGreen}</span></div>
							<div className={backNumberInput.numberColor === 'vermillion' ? 'selectColor' : 'colorP'}><div className="roundColor vermillion"></div><span className="textAction">{traduction.Vermillion}</span></div>
							<div className={backNumberInput.numberColor === 'green gables' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'green gables'}) & okClic()}><div className="roundColor greenGables"></div><span className="textAction">{traduction.GreenGables}</span></div>
							<div className={backNumberInput.numberColor === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'orchid pink'}) & okClic()}><div className="roundColor orchidPink"></div><span className="textAction">{traduction.OrchidPink}</span></div>
							<div className={backNumberInput.numberColor === 'camel' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'camel'}) & okClic()}><div className="roundColor camel"></div><span className="textAction">{traduction.Camel}</span></div>
							<div className={backNumberInput.numberColor === 'plumPurple' ? 'selectColor' : 'colorP'}><div className="roundColor plumPurple"></div><span className="textAction">{traduction.PlumPurple}</span></div>
							<div className={backNumberInput.numberColor === 'brown stone' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'brown stone'}) & okClic()}><div className="roundColor brownStone"></div><span className="textAction">{traduction.BrownStone}</span></div>
							<div className={backNumberInput.numberColor === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'cayenne red'}) & okClic()}><div className="roundColor cayenneRed"></div><span className="textAction">{traduction.CayenneRed}</span></div>
							<div className={backNumberInput.numberColor === 'iridecent blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iridecent blue'}) & okClic()}><div className="roundColor iridescentBlue"></div><span className="textAction">{traduction.IridescentBlue}</span></div>
							<div className={backNumberInput.numberColor === 'chinese red' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'chinese red'}) & okClic()}><div className="roundColor chinesesRed"></div><span className="textAction">{traduction.ChinesesRed}</span></div>
							<div className={backNumberInput.numberColor === 'iridecent pink' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iridecent pink'}) & okClic()}><div className="roundColor iridescentPink"></div><span className="textAction">{traduction.IridescentPink}</span></div>
							<div className={backNumberInput.numberColor === 'fluo yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'fluo yellow'}) & okClic()}><div className="roundColor fluoYellow"></div><span className="textAction">{traduction.FluoYellow}</span></div>
							<div className={backNumberInput.numberColor === 'fluo pink' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'fluo pink'}) & okClic()}><div className="roundColor fluoPink"></div><span className="textAction">{traduction.FluoPink}</span></div>
						</> 
							: backNumberInput.numberColorType === 'metallic' || backNumberInput.numberColorType === 'glitter' ? 
						<>
							<div className={backNumberInput.numberColor === 'white' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'white'}) & okClic()}><div className="roundColor white"></div><span className="textAction">{traduction.White}</span></div>
							<div className={backNumberInput.numberColor === 'black' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'black'}) & okClic()}><div className="roundColor black"></div><span className="textAction">{traduction.Black}</span></div>
							<div className={backNumberInput.numberColor === 'grey' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'grey'}) & okClic()}><div className="roundColor coolGrey"></div><span className="textAction">{traduction.CoolGrey}</span></div>
							<div className={backNumberInput.numberColor === 'estate blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'estate blue'}) & okClic()}><div className="roundColor EstateBlue"></div><span className="textAction">{traduction.EstateBlue}</span></div>
							<div className={backNumberInput.numberColor === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'pirate grey'}) & okClic()}><div className="roundColor pirateGrey"></div><span className="textAction">{traduction.PirateGrey}</span></div>
							<div className={backNumberInput.numberColor === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'dusk blue'}) & okClic()}><div className="roundColor duskBlue"></div><span className="textAction">{traduction.DuskBlue}</span></div>
							<div className={backNumberInput.numberColor === 'doubleCream' ? 'selectColor' : 'colorP'}><div className="roundColor doubleCream"></div><span className="textAction">{traduction.DoubleCream}</span></div>
							<div className={backNumberInput.numberColor === 'rallyBlue' ? 'selectColor' : 'colorP'}><div className="roundColor rallyBlue"></div><span className="textAction">{traduction.RallyBlue}</span></div>
							<div className={backNumberInput.numberColor === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iris yellow'}) & okClic()}><div className="roundColor yellowIris"></div><span className="textAction">{traduction.YellowIris}</span></div>
							<div className={backNumberInput.numberColor === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iceberg green'}) & okClic()}><div className="roundColor icebergGreen"></div><span className="textAction">{traduction.IcebergGreen}</span></div>
							<div className={backNumberInput.numberColor === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'blazing yellow'}) & okClic()}><div className="roundColor blazingYellow"></div><span className="textAction">{traduction.BlazingYellow}</span></div>
							<div className={backNumberInput.numberColor === 'greenDouble' ? 'selectColor' : 'colorP'}><div className="roundColor greenDouble"></div><span className="textAction">{traduction.GreenDouble}</span></div>
							<div className={backNumberInput.numberColor === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'blazing orange'}) & okClic()}><div className="roundColor blazingOrange"></div><span className="textAction">{traduction.BlazingOrange}</span></div>
							<div className={backNumberInput.numberColor === 'limeGreen' ? 'selectColor' : 'colorP'}><div className="roundColor limeGreen"></div><span className="textAction">{traduction.LimeGreen}</span></div>
							<div className={backNumberInput.numberColor === 'vermillion' ? 'selectColor' : 'colorP'}><div className="roundColor vermillion"></div><span className="textAction">{traduction.Vermillion}</span></div>
							<div className={backNumberInput.numberColor === 'green gables' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'green gables'}) & okClic()}><div className="roundColor greenGables"></div><span className="textAction">{traduction.GreenGables}</span></div>
							<div className={backNumberInput.numberColor === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'orchid pink'}) & okClic()}><div className="roundColor orchidPink"></div><span className="textAction">{traduction.OrchidPink}</span></div>
							<div className={backNumberInput.numberColor === 'camel' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'camel'}) & okClic()}><div className="roundColor camel"></div><span className="textAction">{traduction.Camel}</span></div>
							<div className={backNumberInput.numberColor === 'plumPurple' ? 'selectColor' : 'colorP'}><div className="roundColor plumPurple"></div><span className="textAction">{traduction.PlumPurple}</span></div>
							<div className={backNumberInput.numberColor === 'brown stone' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'brown stone'}) & okClic()}><div className="roundColor brownStone"></div><span className="textAction">{traduction.BrownStone}</span></div>
							<div className={backNumberInput.numberColor === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'cayenne red'}) & okClic()}><div className="roundColor cayenneRed"></div><span className="textAction">{traduction.CayenneRed}</span></div>
							<div className={backNumberInput.numberColor === 'iridecent blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iridecent blue'}) & okClic()}><div className="roundColor iridescentBlue"></div><span className="textAction">{traduction.IridescentBlue}</span></div>
							<div className={backNumberInput.numberColor === 'chinese red' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'chinese red'}) & okClic()}><div className="roundColor chinesesRed"></div><span className="textAction">{traduction.ChinesesRed}</span></div>
							<div className={backNumberInput.numberColor === 'iridecent pink' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iridecent pink'}) & okClic()}><div className="roundColor iridescentPink"></div><span className="textAction">{traduction.IridescentPink}</span></div>
							<div className={backNumberInput.numberColor === 'fluo yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'fluo yellow'}) & okClic()}><div className="roundColor fluoYellow"></div><span className="textAction">{traduction.FluoYellow}</span></div>
							<div className={backNumberInput.numberColor === 'fluo pink' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'fluo pink'}) & okClic()}><div className="roundColor fluoPink"></div><span className="textAction">{traduction.FluoPink}</span></div>
						</>
							: 
						<>
							<div className={backNumberInput.numberColor === 'copper foil' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'copper foil'}) & okClic()}><div className="roundColor copperFoil"></div><span className="textAction">{traduction.CopperFoil}</span></div>
							<div className={backNumberInput.numberColor === 'gold foil' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'gold foil'}) & okClic()}><div className="roundColor goldFoil"></div><span className="textAction">{traduction.GoldFoil}</span></div>
							<div className={backNumberInput.numberColor === 'silver foil' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'silver foil'}) & okClic()}><div className="roundColor silverFoil"></div><span className="textAction">{traduction.SilverFoil}</span></div>
						</>
						}		
					</div>
			</div>
		</div>
	)
}

export default BackNumber;