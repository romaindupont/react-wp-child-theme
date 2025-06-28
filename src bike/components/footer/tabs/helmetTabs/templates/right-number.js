const { useState, useEffect } = wp.element;
import Right from "../../svg/Right";
import Wrong from "../../svg/Wrong";
import { useHorizontalScroll } from "../../../../../../utils/useHorizontalScroll";

const RightNumber = ({
	rightNumberWindow,
	setRightNumberWindow,
	fileNames,
	traduction,
	rightNumberInput,
	setRightNumberInput, 
	mySku, 
	setMySku
}) => {
	const [ openWindow, setOpenWindow ] = useState(false);
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	const okClic = () => {
		let typeColor = rightNumberInput.numberColorType;
		if (rightNumberInput.numberColorType === 'gilding') {
			typeColor = 'metallic'
		}
		else {
			typeColor = rightNumberInput.numberColorType;
		}
		viewerIframe.postMessage({
			action : 'updateCustomText',
			data   : {
				configurableMaterial : 'Numbering_right',
				materialVariation : `${typeColor}|${rightNumberInput.numberColor}`,
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
				text : rightNumberInput.numberText,
				font : rightNumberInput.numberStyle,
				underline : false,
				strokeText : false,
				strokeColor : '#FFFFFF',
				strokeWidth : 5
			}
		}, '*');
		viewerIframe.postMessage({
			action : 'setMaterialsGroups',
			values : 
				[
					{
						configurationName : `${typeColor}|${rightNumberInput.numberColor}`,
						groupName : 'Numbering_right_color'
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
				rightNumberInput.numberText,
				rightNumberInput.numberStyle,
				rightNumberInput.numberColorType,
				rightNumberInput.numberColor
			]
	);
	return (
		<>
			<div className="numberListType">
				<span className={rightNumberInput.numberStyle === 'none' ? 'selectButton' : 'buttonChoice'} onClick={() => setRightNumberInput({...rightNumberInput, numberStyle:'none'}) & setRightNumberWindow(false) & setOpenWindow(false) & setMySku({...mySku, position11: 'xx'})}>{traduction.None}</span>
				<span className={rightNumberInput.numberStyle === 'montserrat-bold' ? 'selectButton' : 'buttonChoice'} onClick={() => setRightNumberInput({...rightNumberInput, numberStyle:'montserrat-bold'}) & setRightNumberWindow(true) & setOpenWindow(true) & setMySku({...mySku, position11: 'nd'})}>{traduction.ClassicNumber}</span>
				<span className={rightNumberInput.numberStyle === 'dirt' ? 'selectButton' : 'buttonChoice'} onClick={() => setRightNumberInput({...rightNumberInput, numberStyle:'dirt'}) & setRightNumberWindow(true) & setOpenWindow(true) & setMySku({...mySku, position11: 'nd'})}>{traduction.DirtNumber}</span>
				<span className={rightNumberInput.numberStyle === 'PressStart2P-Regular' ? 'selectButton' : 'buttonChoice'} onClick={() => setRightNumberInput({...rightNumberInput, numberStyle:'PressStart2P-Regular'}) & setRightNumberWindow(true) & setOpenWindow(true) & setMySku({...mySku, position11: 'nd'})}>{traduction.PixelNumber}</span>
				<span className={rightNumberInput.numberStyle === 'racing' ? 'selectButton' : 'buttonChoice'} onClick={() => setRightNumberInput({...rightNumberInput, numberStyle:'racing'}) & setRightNumberWindow(true) & setOpenWindow(true) & setMySku({...mySku, position11: 'nd'})}>{traduction.RacingNumber}</span>
			</div>
			<div className={!openWindow ? "numberWindows" : "openNumberWindows" }>
				<p className="infosNumber">{traduction.NumberStyleTitle}</p>
				<div className="chooseWindows">
					<div className="chooseWindows_input">
					{parseInt(rightNumberInput.numberText) > 99  || parseInt(rightNumberInput.numberText) < 0 ? traduction.MessageErrorNumber : '' }
						<input type="number" name="numberSelection" id="numberSelection" placeholder="00" onChange={(e)=>setRightNumberInput({...rightNumberInput, numberText: e.target.value })} />
						<div className="selectButtonNumber">
							<Wrong windowClose={setOpenWindow} setNumberWindow={setRightNumberWindow}/>
							<div className="selectButtonNumber--right" onClick={okClic}>
							{parseInt(rightNumberInput.numberText) > 99  || parseInt(rightNumberInput.numberText) < 0 ? '': 
								<Right windowClose={setOpenWindow} setNumberWindow={setRightNumberWindow} fileNames={fileNames} />
							}
								</div>
						</div>
					</div>
				</div>
			</div>
			<div className={rightNumberWindow ? "openColorList" : "openColorClose"}>
					<div className="colorListType">
						<span className={rightNumberInput.numberColorType === 'plain' ? 'selectButton' : 'buttonChoice'} onClick={() => setRightNumberInput({...rightNumberInput, numberColorType:'plain'})}>{traduction.Plain}</span>
						<span className={rightNumberInput.numberColorType === 'metallic' ? 'selectButton' : 'buttonChoice'} onClick={() => setRightNumberInput({...rightNumberInput, numberColorType:'metallic'})}>{traduction.Metallic}</span>
						<span className={rightNumberInput.numberColorType === 'glitter' ? 'selectButton' : 'buttonChoice'}  onClick={() => setRightNumberInput({...rightNumberInput, numberColorType:'glitter'})}>{traduction.Glitter}</span>
						<span className={rightNumberInput.numberColorType === 'gilding' ? 'selectButton' : 'buttonChoice'} onClick={() => setRightNumberInput({...rightNumberInput, numberColorType:'gilding', numberColor:'copper foil'})}>{traduction.Gilding}</span>
					</div>
					<div className="colorList" onScroll={scrollEffect} ref={scrollRef}>
						{rightNumberInput.numberColorType === 'plain' ? 
						<>
							<div className={rightNumberInput.numberColor === 'carbon' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'carbon'})}><div className="roundColor carbon"></div><span className="textAction">{traduction.Carbon}</span></div>
							<div className={rightNumberInput.numberColor === 'white' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'white'})}><div className="roundColor white"></div><span className="textAction">{traduction.White}</span></div>
							<div className={rightNumberInput.numberColor === 'black' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'black'})}><div className="roundColor black"></div><span className="textAction">{traduction.Black}</span></div>
							<div className={rightNumberInput.numberColor === 'grey' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'grey'})}><div className="roundColor coolGrey"></div><span className="textAction">{traduction.CoolGrey}</span></div>
							<div className={rightNumberInput.numberColor === 'estate blue' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'estate blue'})}><div className="roundColor EstateBlue"></div><span className="textAction">{traduction.EstateBlue}</span></div>
							<div className={rightNumberInput.numberColor === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'pirate grey'})}><div className="roundColor pirateGrey"></div><span className="textAction">{traduction.PirateGrey}</span></div>
							<div className={rightNumberInput.numberColor === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'dusk blue'})}><div className="roundColor duskBlue"></div><span className="textAction">{traduction.DuskBlue}</span></div>
							<div className={rightNumberInput.numberColor === 'double cream' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'double cream'})}><div className="roundColor doubleCream"></div><span className="textAction">{traduction.DoubleCream}</span></div>
							<div className={rightNumberInput.numberColor === 'rally blue' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'rally blue'})}><div className="roundColor rallyBlue"></div><span className="textAction">{traduction.RallyBlue}</span></div>
							<div className={rightNumberInput.numberColor === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'iris yellow'})}><div className="roundColor yellowIris"></div><span className="textAction">{traduction.YellowIris}</span></div>
							<div className={rightNumberInput.numberColor === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'iceberg green'})}><div className="roundColor icebergGreen"></div><span className="textAction">{traduction.IcebergGreen}</span></div>
							<div className={rightNumberInput.numberColor === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'blazing yellow'})}><div className="roundColor blazingYellow"></div><span className="textAction">{traduction.BlazingYellow}</span></div>
							<div className={rightNumberInput.numberColor === 'green doodle' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'green doodle'})}><div className="roundColor greenDouble"></div><span className="textAction">{traduction.GreenDouble}</span></div>
							<div className={rightNumberInput.numberColor === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'blazing orange'})}><div className="roundColor blazingOrange"></div><span className="textAction">{traduction.BlazingOrange}</span></div>
							<div className={rightNumberInput.numberColor === 'lime green' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'lime green'})}><div className="roundColor limeGreen"></div><span className="textAction">{traduction.LimeGreen}</span></div>
							<div className={rightNumberInput.numberColor === 'vermillon' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'vermillon'})}><div className="roundColor vermillion"></div><span className="textAction">{traduction.Vermillion}</span></div>
							<div className={rightNumberInput.numberColor === 'green gables' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'green gables'})}><div className="roundColor greenGables"></div><span className="textAction">{traduction.GreenGables}</span></div>
							<div className={rightNumberInput.numberColor === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'orchid pink'})}><div className="roundColor orchidPink"></div><span className="textAction">{traduction.OrchidPink}</span></div>
							<div className={rightNumberInput.numberColor === 'camel' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'camel'})}><div className="roundColor camel"></div><span className="textAction">{traduction.Camel}</span></div>
							<div className={rightNumberInput.numberColor === 'plum purple' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'plum purple'})}><div className="roundColor plumPurple"></div><span className="textAction">{traduction.PlumPurple}</span></div>
							<div className={rightNumberInput.numberColor === 'brown stone' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'brown stone'})}><div className="roundColor brownStone"></div><span className="textAction">{traduction.BrownStone}</span></div>
							<div className={rightNumberInput.numberColor === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'cayenne red'})}><div className="roundColor cayenneRed"></div><span className="textAction">{traduction.CayenneRed}</span></div>
							<div className={rightNumberInput.numberColor === 'chinese red' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'chinese red'})}><div className="roundColor chinesesRed"></div><span className="textAction">{traduction.ChinesesRed}</span></div>
							<div className={rightNumberInput.numberColor === 'fluo yellow' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'fluo yellow'})}><div className="roundColor fluoYellow"></div><span className="textAction">{traduction.FluoYellow}</span></div>
							<div className={rightNumberInput.numberColor === 'fluo pink' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'fluo pink'})}><div className="roundColor fluoPink"></div><span className="textAction">{traduction.FluoPink}</span></div>
						</> 
							: rightNumberInput.numberColorType === 'metallic' ? 
						<>
							<div className={rightNumberInput.numberColor === 'white' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'white'})}><div className="roundColor white"></div><span className="textAction">{traduction.White}</span></div>
							<div className={rightNumberInput.numberColor === 'black' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'black'})}><div className="roundColor black"></div><span className="textAction">{traduction.Black}</span></div>
							<div className={rightNumberInput.numberColor === 'grey' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'grey'})}><div className="roundColor coolGrey"></div><span className="textAction">{traduction.CoolGrey}</span></div>
							<div className={rightNumberInput.numberColor === 'estate blue' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'estate blue'})}><div className="roundColor EstateBlue"></div><span className="textAction">{traduction.EstateBlue}</span></div>
							<div className={rightNumberInput.numberColor === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'pirate grey'})}><div className="roundColor pirateGrey"></div><span className="textAction">{traduction.PirateGrey}</span></div>
							<div className={rightNumberInput.numberColor === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'dusk blue'})}><div className="roundColor duskBlue"></div><span className="textAction">{traduction.DuskBlue}</span></div>
							<div className={rightNumberInput.numberColor === 'double cream' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'double cream'})}><div className="roundColor doubleCream"></div><span className="textAction">{traduction.DoubleCream}</span></div>
							<div className={rightNumberInput.numberColor === 'rally blue' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'rally blue'})}><div className="roundColor rallyBlue"></div><span className="textAction">{traduction.RallyBlue}</span></div>
							<div className={rightNumberInput.numberColor === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'iris yellow'})}><div className="roundColor yellowIris"></div><span className="textAction">{traduction.YellowIris}</span></div>
							<div className={rightNumberInput.numberColor === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'iceberg green'})}><div className="roundColor icebergGreen"></div><span className="textAction">{traduction.IcebergGreen}</span></div>
							<div className={rightNumberInput.numberColor === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'blazing yellow'})}><div className="roundColor blazingYellow"></div><span className="textAction">{traduction.BlazingYellow}</span></div>
							<div className={rightNumberInput.numberColor === 'green doodle' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'green doodle'})}><div className="roundColor greenDouble"></div><span className="textAction">{traduction.GreenDouble}</span></div>
							<div className={rightNumberInput.numberColor === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'blazing orange'})}><div className="roundColor blazingOrange"></div><span className="textAction">{traduction.BlazingOrange}</span></div>
							<div className={rightNumberInput.numberColor === 'lime green' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'lime green'})}><div className="roundColor limeGreen"></div><span className="textAction">{traduction.LimeGreen}</span></div>
							<div className={rightNumberInput.numberColor === 'vermillon' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'vermillon'})}><div className="roundColor vermillion"></div><span className="textAction">{traduction.Vermillion}</span></div>
							<div className={rightNumberInput.numberColor === 'green gables' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'green gables'})}><div className="roundColor greenGables"></div><span className="textAction">{traduction.GreenGables}</span></div>
							<div className={rightNumberInput.numberColor === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'orchid pink'})}><div className="roundColor orchidPink"></div><span className="textAction">{traduction.OrchidPink}</span></div>
							<div className={rightNumberInput.numberColor === 'camel' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'camel'})}><div className="roundColor camel"></div><span className="textAction">{traduction.Camel}</span></div>
							<div className={rightNumberInput.numberColor === 'plum purple' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'plum purple'})}><div className="roundColor plumPurple"></div><span className="textAction">{traduction.PlumPurple}</span></div>
							<div className={rightNumberInput.numberColor === 'brown stone' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'brown stone'})}><div className="roundColor brownStone"></div><span className="textAction">{traduction.BrownStone}</span></div>
							<div className={rightNumberInput.numberColor === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'cayenne red'})}><div className="roundColor cayenneRed"></div><span className="textAction">{traduction.CayenneRed}</span></div>
							<div className={rightNumberInput.numberColor === 'chinese red' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'chinese red'})}><div className="roundColor chinesesRed"></div><span className="textAction">{traduction.ChinesesRed}</span></div>
						</>
						: rightNumberInput.numberColorType === 'glitter' ? 
						<>
							<div className={rightNumberInput.numberColor === 'white' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'white'})}><div className="roundColor white"></div><span className="textAction">{traduction.White}</span></div>
							<div className={rightNumberInput.numberColor === 'black' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'black'})}><div className="roundColor black"></div><span className="textAction">{traduction.Black}</span></div>
							<div className={rightNumberInput.numberColor === 'grey' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'grey'})}><div className="roundColor coolGrey"></div><span className="textAction">{traduction.CoolGrey}</span></div>
							<div className={rightNumberInput.numberColor === 'estate blue' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'estate blue'})}><div className="roundColor EstateBlue"></div><span className="textAction">{traduction.EstateBlue}</span></div>
							<div className={rightNumberInput.numberColor === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'pirate grey'})}><div className="roundColor pirateGrey"></div><span className="textAction">{traduction.PirateGrey}</span></div>
							<div className={rightNumberInput.numberColor === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'dusk blue'})}><div className="roundColor duskBlue"></div><span className="textAction">{traduction.DuskBlue}</span></div>
							<div className={rightNumberInput.numberColor === 'double cream' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'double cream'})}><div className="roundColor doubleCream"></div><span className="textAction">{traduction.DoubleCream}</span></div>
							<div className={rightNumberInput.numberColor === 'rally blue' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'rally blue'})}><div className="roundColor rallyBlue"></div><span className="textAction">{traduction.RallyBlue}</span></div>
							<div className={rightNumberInput.numberColor === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'iris yellow'})}><div className="roundColor yellowIris"></div><span className="textAction">{traduction.YellowIris}</span></div>
							<div className={rightNumberInput.numberColor === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'iceberg green'})}><div className="roundColor icebergGreen"></div><span className="textAction">{traduction.IcebergGreen}</span></div>
							<div className={rightNumberInput.numberColor === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'blazing yellow'})}><div className="roundColor blazingYellow"></div><span className="textAction">{traduction.BlazingYellow}</span></div>
							<div className={rightNumberInput.numberColor === 'green doodle' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'green doodle'})}><div className="roundColor greenDouble"></div><span className="textAction">{traduction.GreenDouble}</span></div>
							<div className={rightNumberInput.numberColor === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'blazing orange'})}><div className="roundColor blazingOrange"></div><span className="textAction">{traduction.BlazingOrange}</span></div>
							<div className={rightNumberInput.numberColor === 'lime green' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'lime green'})}><div className="roundColor limeGreen"></div><span className="textAction">{traduction.LimeGreen}</span></div>
							<div className={rightNumberInput.numberColor === 'vermillon' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'vermillon'})}><div className="roundColor vermillion"></div><span className="textAction">{traduction.Vermillion}</span></div>
							<div className={rightNumberInput.numberColor === 'green gables' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'green gables'})}><div className="roundColor greenGables"></div><span className="textAction">{traduction.GreenGables}</span></div>
							<div className={rightNumberInput.numberColor === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'orchid pink'})}><div className="roundColor orchidPink"></div><span className="textAction">{traduction.OrchidPink}</span></div>
							<div className={rightNumberInput.numberColor === 'camel' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'camel'})}><div className="roundColor camel"></div><span className="textAction">{traduction.Camel}</span></div>
							<div className={rightNumberInput.numberColor === 'plum purple' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'plum purple'})}><div className="roundColor plumPurple"></div><span className="textAction">{traduction.PlumPurple}</span></div>
							<div className={rightNumberInput.numberColor === 'brown stone' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'brown stone'})}><div className="roundColor brownStone"></div><span className="textAction">{traduction.BrownStone}</span></div>
							<div className={rightNumberInput.numberColor === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'cayenne red'})}><div className="roundColor cayenneRed"></div><span className="textAction">{traduction.CayenneRed}</span></div>
							<div className={rightNumberInput.numberColor === 'iridecent blue' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'iridecent blue'})}><div className="roundColor iridescentBlue"></div><span className="textAction">{traduction.IridescentBlue}</span></div>
							<div className={rightNumberInput.numberColor === 'chinese red' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'chinese red'})}><div className="roundColor chinesesRed"></div><span className="textAction">{traduction.ChinesesRed}</span></div>
							<div className={rightNumberInput.numberColor === 'iridecent pink' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'iridecent pink'})}><div className="roundColor iridescentPink"></div><span className="textAction">{traduction.IridescentPink}</span></div>
						</>
							: 
						<>
							<div className={rightNumberInput.numberColor === 'copper foil' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'copper foil'})}><div className="roundColor copperFoil"></div><span className="textAction">{traduction.CopperFoil}</span></div>
							<div className={rightNumberInput.numberColor === 'gold foil' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'gold foil'})}><div className="roundColor goldFoil"></div><span className="textAction">{traduction.GoldFoil}</span></div>
							<div className={rightNumberInput.numberColor === 'silver foil' ? 'selectColor' : 'colorP'} onClick={() => setRightNumberInput({...rightNumberInput, numberColor:'silver foil'})}><div className="roundColor silverFoil"></div><span className="textAction">{traduction.SilverFoil}</span></div>
						</>
						}		
					</div>
			</div>
		</>
	)
}

export default RightNumber;