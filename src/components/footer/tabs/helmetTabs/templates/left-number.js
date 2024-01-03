const { useState, useEffect } = wp.element;
import Right from "../../svg/Right";
import Wrong from "../../svg/Wrong";
import { useHorizontalScroll } from "../../../../../../utils/useHorizontalScroll";

const LeftNumber = ({
	leftNumberWindow,
	setLeftNumberWindow,
	fileNames,
	traduction,
	leftNumberInput,
	setLeftNumberInput,
	mySku,
	setMySku
}) => {
	const [ openWindow, setOpenWindow ] = useState(false);
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	const okClic = () => {
		let typeColor = leftNumberInput.numberColorType;
		if (leftNumberInput.numberColorType === 'gilding') {
			typeColor = 'metallic'
		}
		else {
			typeColor = leftNumberInput.numberColorType;
		}
		viewerIframe.postMessage({
			action : 'updateCustomText',
			data   : {
				configurableMaterial : 'Numbering_left',
				materialVariation : `${typeColor}|${leftNumberInput.numberColor}`,
				contents : ['opacity'],
				color : '#FFFFFF',
				backgroundColor : '#000000',
				italic : false,
				bold : false,
				imageWidth : 512,
				imageHeight : 512,
				verticalAlignment : 'middle',
				horizontalAlignment : 'middle',
				size : 250,
				textOffsetY : 70,
				textOffsetX : 0,
				text : leftNumberInput.numberText,
				font : leftNumberInput.numberStyle,
				underline : false,
				strokeText : false,
				strokeColor : '#000000',
				strokeWidth : 5
			}
		}, '*');
		viewerIframe.postMessage({
			action : 'setMaterialsGroups',
			values : 
				[
					{
						configurationName : `${typeColor}|${leftNumberInput.numberColor}`,
						groupName : 'Numbering_left_color'
					}
				]
		}, '*');
	}
	const scrollRef = useHorizontalScroll();
	const scrollEffect = (e) => {
		let ratio = 2.5;
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
	useEffect(() => {
		okClic()
		}, [
				leftNumberInput.numberText,
				leftNumberInput.numberStyle,
				leftNumberInput.numberColorType,
				leftNumberInput.numberColor
			]
	);
	return (
		<>
			<div className="numberListType">
				<span className={leftNumberInput.numberStyle === 'none' ? 'selectButton' : 'buttonChoice'} onClick={() => setLeftNumberInput({...leftNumberInput, numberStyle:'none'}) & setLeftNumberWindow(false) & setOpenWindow(false) & setMySku({...mySku, position10: 'xx'})}>{traduction.None}</span>
				<span className={leftNumberInput.numberStyle === 'montserrat-bold' ? 'selectButton' : 'buttonChoice'} onClick={() => setLeftNumberInput({...leftNumberInput, numberStyle:'montserrat-bold'}) & setLeftNumberWindow(true) & setOpenWindow(true) & setMySku({...mySku, position10: 'ng'})}>{traduction.ClassicNumber}</span>
				<span className={leftNumberInput.numberStyle === 'dirt' ? 'selectButton' : 'buttonChoice'} onClick={() => setLeftNumberInput({...leftNumberInput, numberStyle:'dirt'}) & setLeftNumberWindow(true) & setOpenWindow(true) & setMySku({...mySku, position10: 'ng'})}>{traduction.DirtNumber}</span>
				<span className={leftNumberInput.numberStyle === 'PressStart2P-Regular' ? 'selectButton' : 'buttonChoice'} onClick={() => setLeftNumberInput({...leftNumberInput, numberStyle:'PressStart2P-Regular'}) & setLeftNumberWindow(true) & setOpenWindow(true) & setMySku({...mySku, position10: 'ng'})}>{traduction.PixelNumber}</span>
				<span className={leftNumberInput.numberStyle === 'racing' ? 'selectButton' : 'buttonChoice'} onClick={() => setLeftNumberInput({...leftNumberInput, numberStyle:'racing'}) & setLeftNumberWindow(true) & setOpenWindow(true) & setMySku({...mySku, position10: 'ng'})}>{traduction.RacingNumber}</span>
			</div>
			<div className={!openWindow ? "numberWindows" : "openNumberWindows" }>
				<p className="infosNumber">{traduction.NumberStyleTitle}</p>
				<div className="chooseWindows">
					<div className="chooseWindows_input">
						<input type="number" name="numberSelection" id="numberSelection" placeholder="00" onChange={(e)=>setLeftNumberInput({...leftNumberInput, numberText: e.target.value })} />
						{parseInt(leftNumberInput.numberText) > 99  || parseInt(leftNumberInput.numberText) < 0 ? traduction.MessageErrorNumber : '' }
						<div className="selectButtonNumber">
							<Wrong windowClose={setOpenWindow} setNumberWindow={setLeftNumberWindow}/>
							<div className="selectButtonNumber--right" onClick={okClic}>
							{parseInt(leftNumberInput.numberText) > 99  || parseInt(leftNumberInput.numberText) < 0 ? '': 
								<Right windowClose={setOpenWindow} setNumberWindow={setLeftNumberWindow} fileNames={fileNames} />
							}
								</div>
						</div>
					</div>
				</div>
			</div>
			<div className={leftNumberWindow ? "openColorList" : "openColorClose"}>
					<div className="colorListType">
						<span className={leftNumberInput.numberColorType === 'plain' ? 'selectButton' : 'buttonChoice'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColorType:'plain'})}>{traduction.Plain}</span>
						<span className={leftNumberInput.numberColorType === 'metallic' ? 'selectButton' : 'buttonChoice'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColorType:'metallic'})}>{traduction.Metallic}</span>
						<span className={leftNumberInput.numberColorType === 'glitter' ? 'selectButton' : 'buttonChoice'}  onClick={() => setLeftNumberInput({...leftNumberInput, numberColorType:'glitter'})}>{traduction.Glitter}</span>
						<span className={leftNumberInput.numberColorType === 'gilding' ? 'selectButton' : 'buttonChoice'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColorType:'gilding', numberColor:'copper foil'})}>{traduction.Gilding}</span>
					</div>
					<div className="colorList" onScroll={scrollEffect} ref={scrollRef}>
						{leftNumberInput.numberColorType === 'plain' ? 
						<>
							<div className={leftNumberInput.numberColor === 'carbon' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'carbon'})}><div className="roundColor carbon"></div><span className="textAction">{traduction.Carbon}</span></div>
							<div className={leftNumberInput.numberColor === 'white' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'white'})}><div className="roundColor white"></div><span className="textAction">{traduction.White}</span></div>
							<div className={leftNumberInput.numberColor === 'black' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'black'})}><div className="roundColor black"></div><span className="textAction">{traduction.Black}</span></div>
							<div className={leftNumberInput.numberColor === 'grey' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'grey'})}><div className="roundColor coolGrey"></div><span className="textAction">{traduction.CoolGrey}</span></div>
							<div className={leftNumberInput.numberColor === 'estate blue' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'estate blue'})}><div className="roundColor EstateBlue"></div><span className="textAction">{traduction.EstateBlue}</span></div>
							<div className={leftNumberInput.numberColor === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'pirate grey'})}><div className="roundColor pirateGrey"></div><span className="textAction">{traduction.PirateGrey}</span></div>
							<div className={leftNumberInput.numberColor === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'dusk blue'})}><div className="roundColor duskBlue"></div><span className="textAction">{traduction.DuskBlue}</span></div>
							<div className={leftNumberInput.numberColor === 'double cream' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'double cream'})}><div className="roundColor doubleCream"></div><span className="textAction">{traduction.DoubleCream}</span></div>
							<div className={leftNumberInput.numberColor === 'rally blue' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'rally blue'})}><div className="roundColor rallyBlue"></div><span className="textAction">{traduction.RallyBlue}</span></div>
							<div className={leftNumberInput.numberColor === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'iris yellow'})}><div className="roundColor yellowIris"></div><span className="textAction">{traduction.YellowIris}</span></div>
							<div className={leftNumberInput.numberColor === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'iceberg green'})}><div className="roundColor icebergGreen"></div><span className="textAction">{traduction.IcebergGreen}</span></div>
							<div className={leftNumberInput.numberColor === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'blazing yellow'})}><div className="roundColor blazingYellow"></div><span className="textAction">{traduction.BlazingYellow}</span></div>
							<div className={leftNumberInput.numberColor === 'green doodle' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'green doodle'})}><div className="roundColor greenDouble"></div><span className="textAction">{traduction.GreenDouble}</span></div>
							<div className={leftNumberInput.numberColor === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'blazing orange'})}><div className="roundColor blazingOrange"></div><span className="textAction">{traduction.BlazingOrange}</span></div>
							<div className={leftNumberInput.numberColor === 'lime green' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'lime green'})}><div className="roundColor limeGreen"></div><span className="textAction">{traduction.LimeGreen}</span></div>
							<div className={leftNumberInput.numberColor === 'vermillon' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'vermillon'})}><div className="roundColor vermillion"></div><span className="textAction">{traduction.Vermillion}</span></div>
							<div className={leftNumberInput.numberColor === 'green gables' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'green gables'})}><div className="roundColor greenGables"></div><span className="textAction">{traduction.GreenGables}</span></div>
							<div className={leftNumberInput.numberColor === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'orchid pink'})}><div className="roundColor orchidPink"></div><span className="textAction">{traduction.OrchidPink}</span></div>
							<div className={leftNumberInput.numberColor === 'camel' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'camel'})}><div className="roundColor camel"></div><span className="textAction">{traduction.Camel}</span></div>
							<div className={leftNumberInput.numberColor === 'plum purple' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'plum purple'})}><div className="roundColor plumPurple"></div><span className="textAction">{traduction.PlumPurple}</span></div>
							<div className={leftNumberInput.numberColor === 'brown stone' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'brown stone'})}><div className="roundColor brownStone"></div><span className="textAction">{traduction.BrownStone}</span></div>
							<div className={leftNumberInput.numberColor === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'cayenne red'})}><div className="roundColor cayenneRed"></div><span className="textAction">{traduction.CayenneRed}</span></div>
							<div className={leftNumberInput.numberColor === 'chinese red' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'chinese red'})}><div className="roundColor chinesesRed"></div><span className="textAction">{traduction.ChinesesRed}</span></div>
							<div className={leftNumberInput.numberColor === 'fluo yellow' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'fluo yellow'})}><div className="roundColor fluoYellow"></div><span className="textAction">{traduction.FluoYellow}</span></div>
							<div className={leftNumberInput.numberColor === 'fluo pink' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'fluo pink'})}><div className="roundColor fluoPink"></div><span className="textAction">{traduction.FluoPink}</span></div>
						</> 
							: leftNumberInput.numberColorType === 'metallic' ? 
						<>
							<div className={leftNumberInput.numberColor === 'white' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'white'})}><div className="roundColor white"></div><span className="textAction">{traduction.White}</span></div>
							<div className={leftNumberInput.numberColor === 'black' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'black'})}><div className="roundColor black"></div><span className="textAction">{traduction.Black}</span></div>
							<div className={leftNumberInput.numberColor === 'grey' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'grey'})}><div className="roundColor coolGrey"></div><span className="textAction">{traduction.CoolGrey}</span></div>
							<div className={leftNumberInput.numberColor === 'estate blue' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'estate blue'})}><div className="roundColor EstateBlue"></div><span className="textAction">{traduction.EstateBlue}</span></div>
							<div className={leftNumberInput.numberColor === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'pirate grey'})}><div className="roundColor pirateGrey"></div><span className="textAction">{traduction.PirateGrey}</span></div>
							<div className={leftNumberInput.numberColor === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'dusk blue'})}><div className="roundColor duskBlue"></div><span className="textAction">{traduction.DuskBlue}</span></div>
							<div className={leftNumberInput.numberColor === 'double cream' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'double cream'})}><div className="roundColor doubleCream"></div><span className="textAction">{traduction.DoubleCream}</span></div>
							<div className={leftNumberInput.numberColor === 'rally blue' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'rally blue'})}><div className="roundColor rallyBlue"></div><span className="textAction">{traduction.RallyBlue}</span></div>
							<div className={leftNumberInput.numberColor === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'iris yellow'})}><div className="roundColor yellowIris"></div><span className="textAction">{traduction.YellowIris}</span></div>
							<div className={leftNumberInput.numberColor === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'iceberg green'})}><div className="roundColor icebergGreen"></div><span className="textAction">{traduction.IcebergGreen}</span></div>
							<div className={leftNumberInput.numberColor === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'blazing yellow'})}><div className="roundColor blazingYellow"></div><span className="textAction">{traduction.BlazingYellow}</span></div>
							<div className={leftNumberInput.numberColor === 'green doodle' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'green doodle'})}><div className="roundColor greenDouble"></div><span className="textAction">{traduction.GreenDouble}</span></div>
							<div className={leftNumberInput.numberColor === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'blazing orange'})}><div className="roundColor blazingOrange"></div><span className="textAction">{traduction.BlazingOrange}</span></div>
							<div className={leftNumberInput.numberColor === 'limeGreen' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'lime green'})}><div className="roundColor limeGreen"></div><span className="textAction">{traduction.LimeGreen}</span></div>
							<div className={leftNumberInput.numberColor === 'vermillon' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'vermillon'})}><div className="roundColor vermillion"></div><span className="textAction">{traduction.Vermillion}</span></div>
							<div className={leftNumberInput.numberColor === 'green gables' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'green gables'})}><div className="roundColor greenGables"></div><span className="textAction">{traduction.GreenGables}</span></div>
							<div className={leftNumberInput.numberColor === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'orchid pink'})}><div className="roundColor orchidPink"></div><span className="textAction">{traduction.OrchidPink}</span></div>
							<div className={leftNumberInput.numberColor === 'camel' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'camel'})}><div className="roundColor camel"></div><span className="textAction">{traduction.Camel}</span></div>
							<div className={leftNumberInput.numberColor === 'plum purple' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'plum purple'})}><div className="roundColor plumPurple"></div><span className="textAction">{traduction.PlumPurple}</span></div>
							<div className={leftNumberInput.numberColor === 'brown stone' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'brown stone'})}><div className="roundColor brownStone"></div><span className="textAction">{traduction.BrownStone}</span></div>
							<div className={leftNumberInput.numberColor === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'cayenne red'})}><div className="roundColor cayenneRed"></div><span className="textAction">{traduction.CayenneRed}</span></div>
							<div className={leftNumberInput.numberColor === 'chinese red' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'chinese red'})}><div className="roundColor chinesesRed"></div><span className="textAction">{traduction.ChinesesRed}</span></div>
						</>
						: leftNumberInput.numberColorType === 'glitter' ? 
						<>
							<div className={leftNumberInput.numberColor === 'white' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'white'})}><div className="roundColor white"></div><span className="textAction">{traduction.White}</span></div>
							<div className={leftNumberInput.numberColor === 'black' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'black'})}><div className="roundColor black"></div><span className="textAction">{traduction.Black}</span></div>
							<div className={leftNumberInput.numberColor === 'grey' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'grey'})}><div className="roundColor coolGrey"></div><span className="textAction">{traduction.CoolGrey}</span></div>
							<div className={leftNumberInput.numberColor === 'estate blue' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'estate blue'})}><div className="roundColor EstateBlue"></div><span className="textAction">{traduction.EstateBlue}</span></div>
							<div className={leftNumberInput.numberColor === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'pirate grey'})}><div className="roundColor pirateGrey"></div><span className="textAction">{traduction.PirateGrey}</span></div>
							<div className={leftNumberInput.numberColor === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'dusk blue'})}><div className="roundColor duskBlue"></div><span className="textAction">{traduction.DuskBlue}</span></div>
							<div className={leftNumberInput.numberColor === 'double cream' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'double cream'})}><div className="roundColor doubleCream"></div><span className="textAction">{traduction.DoubleCream}</span></div>
							<div className={leftNumberInput.numberColor === 'rally blue' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'rally blue'})}><div className="roundColor rallyBlue"></div><span className="textAction">{traduction.RallyBlue}</span></div>
							<div className={leftNumberInput.numberColor === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'iris yellow'})}><div className="roundColor yellowIris"></div><span className="textAction">{traduction.YellowIris}</span></div>
							<div className={leftNumberInput.numberColor === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'iceberg green'})}><div className="roundColor icebergGreen"></div><span className="textAction">{traduction.IcebergGreen}</span></div>
							<div className={leftNumberInput.numberColor === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'blazing yellow'})}><div className="roundColor blazingYellow"></div><span className="textAction">{traduction.BlazingYellow}</span></div>
							<div className={leftNumberInput.numberColor === 'green doodle' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'green doodle'})}><div className="roundColor greenDouble"></div><span className="textAction">{traduction.GreenDouble}</span></div>
							<div className={leftNumberInput.numberColor === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'blazing orange'})}><div className="roundColor blazingOrange"></div><span className="textAction">{traduction.BlazingOrange}</span></div>
							<div className={leftNumberInput.numberColor === 'lime green' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'lime green'})}><div className="roundColor limeGreen"></div><span className="textAction">{traduction.LimeGreen}</span></div>
							<div className={leftNumberInput.numberColor === 'vermillon' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'vermillon'})}><div className="roundColor vermillion"></div><span className="textAction">{traduction.Vermillion}</span></div>
							<div className={leftNumberInput.numberColor === 'green gables' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'green gables'})}><div className="roundColor greenGables"></div><span className="textAction">{traduction.GreenGables}</span></div>
							<div className={leftNumberInput.numberColor === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'orchid pink'})}><div className="roundColor orchidPink"></div><span className="textAction">{traduction.OrchidPink}</span></div>
							<div className={leftNumberInput.numberColor === 'camel' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'camel'})}><div className="roundColor camel"></div><span className="textAction">{traduction.Camel}</span></div>
							<div className={leftNumberInput.numberColor === 'plum purple' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'plum purple'})}><div className="roundColor plumPurple"></div><span className="textAction">{traduction.PlumPurple}</span></div>
							<div className={leftNumberInput.numberColor === 'brown stone' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'brown stone'})}><div className="roundColor brownStone"></div><span className="textAction">{traduction.BrownStone}</span></div>
							<div className={leftNumberInput.numberColor === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'cayenne red'})}><div className="roundColor cayenneRed"></div><span className="textAction">{traduction.CayenneRed}</span></div>
							<div className={leftNumberInput.numberColor === 'iridecent blue' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'iridecent blue'})}><div className="roundColor iridescentBlue"></div><span className="textAction">{traduction.IridescentBlue}</span></div>
							<div className={leftNumberInput.numberColor === 'chinese red' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'chinese red'})}><div className="roundColor chinesesRed"></div><span className="textAction">{traduction.ChinesesRed}</span></div>
							<div className={leftNumberInput.numberColor === 'iridecent pink' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'iridecent pink'})}><div className="roundColor iridescentPink"></div><span className="textAction">{traduction.IridescentPink}</span></div>
						</>
							: 
						<>
							<div className={leftNumberInput.numberColor === 'copper foil' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'copper foil'})}><div className="roundColor copperFoil"></div><span className="textAction">{traduction.CopperFoil}</span></div>
							<div className={leftNumberInput.numberColor === 'gold foil' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'gold foil'})}><div className="roundColor goldFoil"></div><span className="textAction">{traduction.GoldFoil}</span></div>
							<div className={leftNumberInput.numberColor === 'silver foil' ? 'selectColor' : 'colorP'} onClick={() => setLeftNumberInput({...leftNumberInput, numberColor:'silver foil'})}><div className="roundColor silverFoil"></div><span className="textAction">{traduction.SilverFoil}</span></div>
						</>
						}		
					</div>
			</div>
		</>
	)
}

export default LeftNumber;