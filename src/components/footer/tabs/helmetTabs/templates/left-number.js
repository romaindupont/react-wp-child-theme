const { useState, useRef } = wp.element;
import Right from "../../svg/Right";
import Wrong from "../../svg/Wrong";
import { useHorizontalScroll } from "../../../../../../utils/useHorizontalScroll";

const LeftNumber = ({leftNumberWindow, setLeftNumberWindow, fileNames, traduction}) => {
	const [ openWindow, setOpenWindow ] = useState(false);
	const [ leftNumberInput, setLeftNumberInput ] = useState({
		numberText: '08',
		numberStyle: 'none',
		numberColorType: 'plain',
		numberColor: 'white'
	});
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	const okClic = () => {
		viewerIframe.postMessage({
			action : 'updateCustomText',
			data   : {
				configurableMaterial : 'Numbering_left',
				materialVariation : `${leftNumberInput.numberColorType}|${leftNumberInput.numberColor}`,
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
				text : leftNumberInput.numberText,
				font : leftNumberInput.numberStyle,
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
						configurationName : `${leftNumberInput.numberColorType}|${leftNumberInput.numberColor}`,
						groupName : 'Numbering_left_color'
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
  };
	return (
		<>
			<div className="numberListType">
				<span className={leftNumberInput.numberStyle === 'none' ? 'selectButton' : 'buttonChoice'} onClick={() => setLeftNumberInput({...leftNumberInput, numberStyle:'none'}) & setLeftNumberWindow(false) & setOpenWindow(false)}>{traduction.None}</span>
				<span className={leftNumberInput.numberStyle === 'montserrat' ? 'selectButton' : 'buttonChoice'} onClick={() => setLeftNumberInput({...leftNumberInput, numberStyle:'montserrat'}) & setLeftNumberWindow(true) & setOpenWindow(true) & handleClick()}>{traduction.ClassicNumber}</span>
				<span className={leftNumberInput.numberStyle === 'dirt' ? 'selectButton' : 'buttonChoice'} onClick={() => setLeftNumberInput({...leftNumberInput, numberStyle:'metallic'}) & setLeftNumberWindow(true) & setOpenWindow(true) & handleClick()}>{traduction.DirtNumber}</span>
				<span className={leftNumberInput.numberStyle === 'pixel' ? 'selectButton' : 'buttonChoice'} onClick={() => setLeftNumberInput({...leftNumberInput, numberStyle:'glitter'}) & setLeftNumberWindow(true) & setOpenWindow(true) & handleClick()}>{traduction.PixelNumber}</span>
				<span className={leftNumberInput.numberStyle === 'racing' ? 'selectButton' : 'buttonChoice'} onClick={() => setLeftNumberInput({...leftNumberInput, numberStyle:'gilding'}) & setLeftNumberWindow(true) & setOpenWindow(true) & handleClick()}>{traduction.RacingNumber}</span>
			</div>
			<div className={!openWindow ? "numberWindows" : "openNumberWindows" }>
				<p className="infosNumber">{traduction.NumberStyleTitle}</p>
				<div className="chooseWindows">
					<div className="chooseWindows_input">
						<input ref={textInput} type="number" name="numberSelection" id="numberSelection" onChange={(e)=>setLeftNumberInput({...leftNumberInput, numberText: e.target.value })} />
						<div className="selectButtonNumber">
							<div className="selectButtonNumber--right" onClick={okClic}>
								<Right windowClose={setOpenWindow} setNumberWindow={setLeftNumberWindow} fileNames={fileNames} />
							</div>
							<Wrong windowClose={setOpenWindow} setNumberWindow={setLeftNumberWindow}/>
						</div>
					</div>
				</div>
			</div>
			<div className={leftNumberWindow ? "openColorList" : "openColorClose"}>
					<div className="colorListType">
						<span className={leftNumberInput.numberColorType === 'plain' ? 'selectButton' : 'buttonChoice'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColorType:'plain'}) & okClic()}>{traduction.Plain}</span>
						<span className={leftNumberInput.numberColorType === 'metallic' ? 'selectButton' : 'buttonChoice'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColorType:'metallic'}) & okClic()}>{traduction.Metallic}</span>
						<span className={leftNumberInput.numberColorType === 'glitter' ? 'selectButton' : 'buttonChoice'}  onClick={() => setLeftNumberInput({...leftNumberInput, numberColorType:'glitter'}) & okClic()}>{traduction.Glitter}</span>
						<span className={leftNumberInput.numberColorType === 'gilding' ? 'selectButton' : 'buttonChoice'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColorType:'gilding'}) & okClic()}>{traduction.Gilding}</span>
					</div>
					<div className="colorList" onScroll={scrollEffect} ref={scrollRef}>
						{leftNumberInput.numberColorType === 'plain' ? 
						<>
							<div className={leftNumberInput.numberColor === 'carbon' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'carbon'}) & okClic()}><div className="roundColor carbon"></div><span className="textAction">{traduction.Carbon}</span></div>
							<div className={leftNumberInput.numberColor === 'white' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'white'}) & okClic()}><div className="roundColor white"></div><span className="textAction">{traduction.White}</span></div>
							<div className={leftNumberInput.numberColor === 'black' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'black'}) & okClic()}><div className="roundColor black"></div><span className="textAction">{traduction.Black}</span></div>
							<div className={leftNumberInput.numberColor === 'grey' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'grey'}) & okClic()}><div className="roundColor coolGrey"></div><span className="textAction">{traduction.CoolGrey}</span></div>
							<div className={leftNumberInput.numberColor === 'estate blue' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'estate blue'}) & okClic()}><div className="roundColor EstateBlue"></div><span className="textAction">{traduction.EstateBlue}</span></div>
							<div className={leftNumberInput.numberColor === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'pirate grey'}) & okClic()}><div className="roundColor pirateGrey"></div><span className="textAction">{traduction.PirateGrey}</span></div>
							<div className={leftNumberInput.numberColor === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'dusk blue'}) & okClic()}><div className="roundColor duskBlue"></div><span className="textAction">{traduction.DuskBlue}</span></div>
							<div className={leftNumberInput.numberColor === 'doubleCream' ? 'selectColor' : 'colorP'}><div className="roundColor doubleCream"></div><span className="textAction">{traduction.DoubleCream}</span></div>
							<div className={leftNumberInput.numberColor === 'rallyBlue' ? 'selectColor' : 'colorP'}><div className="roundColor rallyBlue"></div><span className="textAction">{traduction.RallyBlue}</span></div>
							<div className={leftNumberInput.numberColor === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'iris yellow'}) & okClic()}><div className="roundColor yellowIris"></div><span className="textAction">{traduction.YellowIris}</span></div>
							<div className={leftNumberInput.numberColor === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'iceberg green'}) & okClic()}><div className="roundColor icebergGreen"></div><span className="textAction">{traduction.IcebergGreen}</span></div>
							<div className={leftNumberInput.numberColor === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'blazing yellow'}) & okClic()}><div className="roundColor blazingYellow"></div><span className="textAction">{traduction.BlazingYellow}</span></div>
							<div className={leftNumberInput.numberColor === 'greenDouble' ? 'selectColor' : 'colorP'}><div className="roundColor greenDouble"></div><span className="textAction">{traduction.GreenDouble}</span></div>
							<div className={leftNumberInput.numberColor === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'blazing orange'}) & okClic()}><div className="roundColor blazingOrange"></div><span className="textAction">{traduction.BlazingOrange}</span></div>
							<div className={leftNumberInput.numberColor === 'limeGreen' ? 'selectColor' : 'colorP'}><div className="roundColor limeGreen"></div><span className="textAction">{traduction.LimeGreen}</span></div>
							<div className={leftNumberInput.numberColor === 'vermillion' ? 'selectColor' : 'colorP'}><div className="roundColor vermillion"></div><span className="textAction">{traduction.Vermillion}</span></div>
							<div className={leftNumberInput.numberColor === 'green gables' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'green gables'}) & okClic()}><div className="roundColor greenGables"></div><span className="textAction">{traduction.GreenGables}</span></div>
							<div className={leftNumberInput.numberColor === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'orchid pink'}) & okClic()}><div className="roundColor orchidPink"></div><span className="textAction">{traduction.OrchidPink}</span></div>
							<div className={leftNumberInput.numberColor === 'camel' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'camel'}) & okClic()}><div className="roundColor camel"></div><span className="textAction">{traduction.Camel}</span></div>
							<div className={leftNumberInput.numberColor === 'plumPurple' ? 'selectColor' : 'colorP'}><div className="roundColor plumPurple"></div><span className="textAction">{traduction.PlumPurple}</span></div>
							<div className={leftNumberInput.numberColor === 'brown stone' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'brown stone'}) & okClic()}><div className="roundColor brownStone"></div><span className="textAction">{traduction.BrownStone}</span></div>
							<div className={leftNumberInput.numberColor === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'cayenne red'}) & okClic()}><div className="roundColor cayenneRed"></div><span className="textAction">{traduction.CayenneRed}</span></div>
							<div className={leftNumberInput.numberColor === 'iridecent blue' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'iridecent blue'}) & okClic()}><div className="roundColor iridescentBlue"></div><span className="textAction">{traduction.IridescentBlue}</span></div>
							<div className={leftNumberInput.numberColor === 'chinese red' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'chinese red'}) & okClic()}><div className="roundColor chinesesRed"></div><span className="textAction">{traduction.ChinesesRed}</span></div>
							<div className={leftNumberInput.numberColor === 'iridecent pink' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'iridecent pink'}) & okClic()}><div className="roundColor iridescentPink"></div><span className="textAction">{traduction.IridescentPink}</span></div>
							<div className={leftNumberInput.numberColor === 'fluo yellow' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'fluo yellow'}) & okClic()}><div className="roundColor fluoYellow"></div><span className="textAction">{traduction.FluoYellow}</span></div>
							<div className={leftNumberInput.numberColor === 'fluo pink' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'fluo pink'}) & okClic()}><div className="roundColor fluoPink"></div><span className="textAction">{traduction.FluoPink}</span></div>
						</> 
							: leftNumberInput.numberColorType === 'metallic' || leftNumberInput.numberColorType === 'glitter' ? 
						<>
							<div className={leftNumberInput.numberColor === 'white' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'white'}) & okClic()}><div className="roundColor white"></div><span className="textAction">{traduction.White}</span></div>
							<div className={leftNumberInput.numberColor === 'black' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'black'}) & okClic()}><div className="roundColor black"></div><span className="textAction">{traduction.Black}</span></div>
							<div className={leftNumberInput.numberColor === 'grey' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'grey'}) & okClic()}><div className="roundColor coolGrey"></div><span className="textAction">{traduction.CoolGrey}</span></div>
							<div className={leftNumberInput.numberColor === 'estate blue' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'estate blue'}) & okClic()}><div className="roundColor EstateBlue"></div><span className="textAction">{traduction.EstateBlue}</span></div>
							<div className={leftNumberInput.numberColor === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'pirate grey'}) & okClic()}><div className="roundColor pirateGrey"></div><span className="textAction">{traduction.PirateGrey}</span></div>
							<div className={leftNumberInput.numberColor === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'dusk blue'}) & okClic()}><div className="roundColor duskBlue"></div><span className="textAction">{traduction.DuskBlue}</span></div>
							<div className={leftNumberInput.numberColor === 'doubleCream' ? 'selectColor' : 'colorP'}><div className="roundColor doubleCream"></div><span className="textAction">{traduction.DoubleCream}</span></div>
							<div className={leftNumberInput.numberColor === 'rallyBlue' ? 'selectColor' : 'colorP'}><div className="roundColor rallyBlue"></div><span className="textAction">{traduction.RallyBlue}</span></div>
							<div className={leftNumberInput.numberColor === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'iris yellow'}) & okClic()}><div className="roundColor yellowIris"></div><span className="textAction">{traduction.YellowIris}</span></div>
							<div className={leftNumberInput.numberColor === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'iceberg green'}) & okClic()}><div className="roundColor icebergGreen"></div><span className="textAction">{traduction.IcebergGreen}</span></div>
							<div className={leftNumberInput.numberColor === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'blazing yellow'}) & okClic()}><div className="roundColor blazingYellow"></div><span className="textAction">{traduction.BlazingYellow}</span></div>
							<div className={leftNumberInput.numberColor === 'greenDouble' ? 'selectColor' : 'colorP'}><div className="roundColor greenDouble"></div><span className="textAction">{traduction.GreenDouble}</span></div>
							<div className={leftNumberInput.numberColor === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'blazing orange'}) & okClic()}><div className="roundColor blazingOrange"></div><span className="textAction">{traduction.BlazingOrange}</span></div>
							<div className={leftNumberInput.numberColor === 'limeGreen' ? 'selectColor' : 'colorP'}><div className="roundColor limeGreen"></div><span className="textAction">{traduction.LimeGreen}</span></div>
							<div className={leftNumberInput.numberColor === 'vermillion' ? 'selectColor' : 'colorP'}><div className="roundColor vermillion"></div><span className="textAction">{traduction.Vermillion}</span></div>
							<div className={leftNumberInput.numberColor === 'green gables' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'green gables'}) & okClic()}><div className="roundColor greenGables"></div><span className="textAction">{traduction.GreenGables}</span></div>
							<div className={leftNumberInput.numberColor === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'orchid pink'}) & okClic()}><div className="roundColor orchidPink"></div><span className="textAction">{traduction.OrchidPink}</span></div>
							<div className={leftNumberInput.numberColor === 'camel' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'camel'}) & okClic()}><div className="roundColor camel"></div><span className="textAction">{traduction.Camel}</span></div>
							<div className={leftNumberInput.numberColor === 'plumPurple' ? 'selectColor' : 'colorP'}><div className="roundColor plumPurple"></div><span className="textAction">{traduction.PlumPurple}</span></div>
							<div className={leftNumberInput.numberColor === 'brown stone' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'brown stone'}) & okClic()}><div className="roundColor brownStone"></div><span className="textAction">{traduction.BrownStone}</span></div>
							<div className={leftNumberInput.numberColor === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'cayenne red'}) & okClic()}><div className="roundColor cayenneRed"></div><span className="textAction">{traduction.CayenneRed}</span></div>
							<div className={leftNumberInput.numberColor === 'iridecent blue' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'iridecent blue'}) & okClic()}><div className="roundColor iridescentBlue"></div><span className="textAction">{traduction.IridescentBlue}</span></div>
							<div className={leftNumberInput.numberColor === 'chinese red' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'chinese red'}) & okClic()}><div className="roundColor chinesesRed"></div><span className="textAction">{traduction.ChinesesRed}</span></div>
							<div className={leftNumberInput.numberColor === 'iridecent pink' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'iridecent pink'}) & okClic()}><div className="roundColor iridescentPink"></div><span className="textAction">{traduction.IridescentPink}</span></div>
							<div className={leftNumberInput.numberColor === 'fluo yellow' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'fluo yellow'}) & okClic()}><div className="roundColor fluoYellow"></div><span className="textAction">{traduction.FluoYellow}</span></div>
							<div className={leftNumberInput.numberColor === 'fluo pink' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'fluo pink'}) & okClic()}><div className="roundColor fluoPink"></div><span className="textAction">{traduction.FluoPink}</span></div>
						</>
							: 
						<>
							<div className={leftNumberInput.numberColor === 'copper foil' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'copper foil'}) & okClic()}><div className="roundColor copperFoil"></div><span className="textAction">{traduction.CopperFoil}</span></div>
							<div className={leftNumberInput.numberColor === 'gold foil' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'gold foil'}) & okClic()}><div className="roundColor goldFoil"></div><span className="textAction">{traduction.GoldFoil}</span></div>
							<div className={leftNumberInput.numberColor === 'silver foil' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'silver foil'}) & okClic()}><div className="roundColor silverFoil"></div><span className="textAction">{traduction.SilverFoil}</span></div>
						</>
						}		
					</div>
			</div>
		</>
	)
}

export default LeftNumber;