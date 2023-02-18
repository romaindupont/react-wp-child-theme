const { useState, useEffect } = wp.element;
import Right from "../../svg/Right";
import Wrong from "../../svg/Wrong";
import { useHorizontalScroll } from "../../../../../../utils/useHorizontalScroll";

const BackNumber = ({
	backNumberWindow,
	setBackNumberWindow,
	fileNames,
	traduction,
	backNumberInput,
	setBackNumberInput,
	mySku,
	setMySku
}) => {
	const [ openWindow, setOpenWindow ] = useState(false);
	let viewerIframe = document.getElementById('emersyaIframe').contentWindow; 
	const okClic = () => {
		let typeColor = backNumberInput.numberColorType;
		if (backNumberInput.numberColorType === 'gilding') {
			typeColor = 'metallic'
		}
		else {
			typeColor = backNumberInput.numberColorType;
		}
		viewerIframe.postMessage({
			action : 'updateCustomText',
			data   : {
				configurableMaterial : 'Numbering_back',
				materialVariation : `${typeColor}|${backNumberInput.numberColor}`,
				contents : ['opacity'],
				color : '#FFFFFF',
				backgroundColor : '#000000',
				italic : false,
				bold : false,
				imageWidth : 512,
				imageHeight : 512,
				verticalAlignment : 'middle',
				horizontalAlignment : 'middle',
				size : 300,
				textOffsetY : 150,
				textOffsetX : 0,
				text : backNumberInput.numberText,
				font : backNumberInput.numberStyle,
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
						configurationName : `${typeColor}|${backNumberInput.numberColor}`,
						groupName : 'Numbering_back_color'
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
				backNumberInput.numberText,
				backNumberInput.numberStyle,
				backNumberInput.numberColorType,
				backNumberInput.numberColor
			]
	);
	return (
		<>
			<div className="numberListType">
				<span className={backNumberInput.numberStyle === 'none' ? 'selectButton' : 'buttonChoice'} onClick={() => setBackNumberInput({...backNumberInput, numberStyle:'none'}) & setBackNumberWindow(false) & setOpenWindow(false) & setMySku({...mySku, position12: 'xx'})}>{traduction.None}</span>
				<span className={backNumberInput.numberStyle === 'montserrat' ? 'selectButton' : 'buttonChoice'} onClick={() => setBackNumberInput({...backNumberInput, numberStyle:'montserrat'}) & setBackNumberWindow(true) & setOpenWindow(true) & setMySku({...mySku, position12: 'ng'})}>{traduction.ClassicNumber}</span>
				<span className={backNumberInput.numberStyle === 'dirt' ? 'selectButton' : 'buttonChoice'} onClick={() => setBackNumberInput({...backNumberInput, numberStyle:'dirt'}) & setBackNumberWindow(true) & setOpenWindow(true) & setMySku({...mySku, position12: 'ng'})}>{traduction.DirtNumber}</span>
				<span className={backNumberInput.numberStyle === 'PressStart2P-Regular' ? 'selectButton' : 'buttonChoice'} onClick={() => setBackNumberInput({...backNumberInput, numberStyle:'PressStart2P-Regular'}) & setBackNumberWindow(true) & setOpenWindow(true) & setMySku({...mySku, position12: 'ng'})}>{traduction.PixelNumber}</span>
				<span className={backNumberInput.numberStyle === 'racing' ? 'selectButton' : 'buttonChoice'} onClick={() => setBackNumberInput({...backNumberInput, numberStyle:'racing'}) & setBackNumberWindow(true) & setOpenWindow(true) & setMySku({...mySku, position12: 'ng'})}>{traduction.RacingNumber}</span>
			</div>
			<div className={!openWindow ? "numberWindows" : "openNumberWindows" }>
				<p className="infosNumber">{traduction.NumberStyleTitle}</p>
				<div className="chooseWindows">
					<div className="chooseWindows_input">
						<input type="number" name="numberSelection" id="numberSelection" placeholder="00" min="00" max="99" onChange={(e)=>setBackNumberInput({...backNumberInput, numberText: e.target.value })} />
						{parseInt(backNumberInput.numberText) > 99  || parseInt(backNumberInput.numberText) < 0 ? traduction.MessageErrorNumber : '' }
						<div className="selectButtonNumber">
							<Wrong windowClose={setOpenWindow} setNumberWindow={setBackNumberWindow}/>
							<div className="selectButtonNumber--right" onClick={okClic}>
								{parseInt(backNumberInput.numberText) > 99  || parseInt(backNumberInput.numberText) < 0 ? '': 
								<Right windowClose={setOpenWindow} setNumberWindow={setBackNumberWindow} fileNames={fileNames} />
								}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={backNumberWindow ? "openColorList" : "openColorClose"}>
					<div className="colorListType">
						<span className={backNumberInput.numberColorType === 'plain' ? 'selectButton' : 'buttonChoice'} onClick={() => setBackNumberInput({...backNumberInput, numberColorType:'plain'})}>{traduction.Plain}</span>
						<span className={backNumberInput.numberColorType === 'metallic' ? 'selectButton' : 'buttonChoice'} onClick={() => setBackNumberInput({...backNumberInput, numberColorType:'metallic'})}>{traduction.Metallic}</span>
						<span className={backNumberInput.numberColorType === 'glitter' ? 'selectButton' : 'buttonChoice'}  onClick={() => setBackNumberInput({...backNumberInput, numberColorType:'glitter'})}>{traduction.Glitter}</span>
						<span className={backNumberInput.numberColorType === 'gilding' ? 'selectButton' : 'buttonChoice'} onClick={() => setBackNumberInput({...backNumberInput, numberColorType:'gilding', numberColor:'copper foil'})}>{traduction.Gilding}</span>
					</div>
					<div className="colorList" onScroll={scrollEffect} ref={scrollRef}>
						{backNumberInput.numberColorType === 'plain' ? 
						<>
							<div className={backNumberInput.numberColor === 'carbon' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'carbon'})}><div className="roundColor carbon"></div><span className="textAction">{traduction.Carbon}</span></div>
							<div className={backNumberInput.numberColor === 'white' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'white'})}><div className="roundColor white"></div><span className="textAction">{traduction.White}</span></div>
							<div className={backNumberInput.numberColor === 'black' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'black'})}><div className="roundColor black"></div><span className="textAction">{traduction.Black}</span></div>
							<div className={backNumberInput.numberColor === 'grey' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'grey'})}><div className="roundColor coolGrey"></div><span className="textAction">{traduction.CoolGrey}</span></div>
							<div className={backNumberInput.numberColor === 'estate blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'estate blue'})}><div className="roundColor EstateBlue"></div><span className="textAction">{traduction.EstateBlue}</span></div>
							<div className={backNumberInput.numberColor === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'pirate grey'})}><div className="roundColor pirateGrey"></div><span className="textAction">{traduction.PirateGrey}</span></div>
							<div className={backNumberInput.numberColor === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'dusk blue'})}><div className="roundColor duskBlue"></div><span className="textAction">{traduction.DuskBlue}</span></div>
							<div className={backNumberInput.numberColor === 'double cream' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'double cream'})}><div className="roundColor doubleCream"></div><span className="textAction">{traduction.DoubleCream}</span></div>
							<div className={backNumberInput.numberColor === 'rally blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'rally blue'})}><div className="roundColor rallyBlue"></div><span className="textAction">{traduction.RallyBlue}</span></div>
							<div className={backNumberInput.numberColor === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iris yellow'})}><div className="roundColor yellowIris"></div><span className="textAction">{traduction.YellowIris}</span></div>
							<div className={backNumberInput.numberColor === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iceberg green'})}><div className="roundColor icebergGreen"></div><span className="textAction">{traduction.IcebergGreen}</span></div>
							<div className={backNumberInput.numberColor === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'blazing yellow'})}><div className="roundColor blazingYellow"></div><span className="textAction">{traduction.BlazingYellow}</span></div>
							<div className={backNumberInput.numberColor === 'green doodle' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'green doodle'})}><div className="roundColor greenDouble"></div><span className="textAction">{traduction.GreenDouble}</span></div>
							<div className={backNumberInput.numberColor === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'blazing orange'})}><div className="roundColor blazingOrange"></div><span className="textAction">{traduction.BlazingOrange}</span></div>
							<div className={backNumberInput.numberColor === 'lime green' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'lime green'})}><div className="roundColor limeGreen"></div><span className="textAction">{traduction.LimeGreen}</span></div>
							<div className={backNumberInput.numberColor === 'vermillon' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'vermillon'})}><div className="roundColor vermillion"></div><span className="textAction">{traduction.Vermillion}</span></div>
							<div className={backNumberInput.numberColor === 'green gables' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'green gables'})}><div className="roundColor greenGables"></div><span className="textAction">{traduction.GreenGables}</span></div>
							<div className={backNumberInput.numberColor === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'orchid pink'})}><div className="roundColor orchidPink"></div><span className="textAction">{traduction.OrchidPink}</span></div>
							<div className={backNumberInput.numberColor === 'camel' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'camel'})}><div className="roundColor camel"></div><span className="textAction">{traduction.Camel}</span></div>
							<div className={backNumberInput.numberColor === 'plum purple' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'plum purple'})}><div className="roundColor plumPurple"></div><span className="textAction">{traduction.PlumPurple}</span></div>
							<div className={backNumberInput.numberColor === 'brown stone' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'brown stone'})}><div className="roundColor brownStone"></div><span className="textAction">{traduction.BrownStone}</span></div>
							<div className={backNumberInput.numberColor === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'cayenne red'})}><div className="roundColor cayenneRed"></div><span className="textAction">{traduction.CayenneRed}</span></div>
							<div className={backNumberInput.numberColor === 'chinese red' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'chinese red'})}><div className="roundColor chinesesRed"></div><span className="textAction">{traduction.ChinesesRed}</span></div>
							<div className={backNumberInput.numberColor === 'fluo yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'fluo yellow'})}><div className="roundColor fluoYellow"></div><span className="textAction">{traduction.FluoYellow}</span></div>
							<div className={backNumberInput.numberColor === 'fluo pink' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'fluo pink'})}><div className="roundColor fluoPink"></div><span className="textAction">{traduction.FluoPink}</span></div>
						</> 
							: backNumberInput.numberColorType === 'metallic' ? 
						<>
							<div className={backNumberInput.numberColor === 'white' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'white'})}><div className="roundColor white"></div><span className="textAction">{traduction.White}</span></div>
							<div className={backNumberInput.numberColor === 'black' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'black'})}><div className="roundColor black"></div><span className="textAction">{traduction.Black}</span></div>
							<div className={backNumberInput.numberColor === 'grey' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'grey'})}><div className="roundColor coolGrey"></div><span className="textAction">{traduction.CoolGrey}</span></div>
							<div className={backNumberInput.numberColor === 'estate blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'estate blue'})}><div className="roundColor EstateBlue"></div><span className="textAction">{traduction.EstateBlue}</span></div>
							<div className={backNumberInput.numberColor === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'pirate grey'})}><div className="roundColor pirateGrey"></div><span className="textAction">{traduction.PirateGrey}</span></div>
							<div className={backNumberInput.numberColor === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'dusk blue'})}><div className="roundColor duskBlue"></div><span className="textAction">{traduction.DuskBlue}</span></div>
							<div className={backNumberInput.numberColor === 'double cream' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'double cream'})}><div className="roundColor doubleCream"></div><span className="textAction">{traduction.DoubleCream}</span></div>
							<div className={backNumberInput.numberColor === 'rally blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'rally blue'})}><div className="roundColor rallyBlue"></div><span className="textAction">{traduction.RallyBlue}</span></div>
							<div className={backNumberInput.numberColor === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iris yellow'})}><div className="roundColor yellowIris"></div><span className="textAction">{traduction.YellowIris}</span></div>
							<div className={backNumberInput.numberColor === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iceberg green'})}><div className="roundColor icebergGreen"></div><span className="textAction">{traduction.IcebergGreen}</span></div>
							<div className={backNumberInput.numberColor === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'blazing yellow'})}><div className="roundColor blazingYellow"></div><span className="textAction">{traduction.BlazingYellow}</span></div>
							<div className={backNumberInput.numberColor === 'green doodle' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'green doodle'})}><div className="roundColor greenDouble"></div><span className="textAction">{traduction.GreenDouble}</span></div>
							<div className={backNumberInput.numberColor === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'blazing orange'})}><div className="roundColor blazingOrange"></div><span className="textAction">{traduction.BlazingOrange}</span></div>
							<div className={backNumberInput.numberColor === 'lime green' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'lime green'})}><div className="roundColor limeGreen"></div><span className="textAction">{traduction.LimeGreen}</span></div>
							<div className={backNumberInput.numberColor === 'vermillon' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'vermillon'})}><div className="roundColor vermillion"></div><span className="textAction">{traduction.Vermillion}</span></div>
							<div className={backNumberInput.numberColor === 'green gables' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'green gables'})}><div className="roundColor greenGables"></div><span className="textAction">{traduction.GreenGables}</span></div>
							<div className={backNumberInput.numberColor === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'orchid pink'})}><div className="roundColor orchidPink"></div><span className="textAction">{traduction.OrchidPink}</span></div>
							<div className={backNumberInput.numberColor === 'camel' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'camel'})}><div className="roundColor camel"></div><span className="textAction">{traduction.Camel}</span></div>
							<div className={backNumberInput.numberColor === 'plum purple' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'plum purple'})}><div className="roundColor plumPurple"></div><span className="textAction">{traduction.PlumPurple}</span></div>
							<div className={backNumberInput.numberColor === 'brown stone' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'brown stone'})}><div className="roundColor brownStone"></div><span className="textAction">{traduction.BrownStone}</span></div>
							<div className={backNumberInput.numberColor === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'cayenne red'})}><div className="roundColor cayenneRed"></div><span className="textAction">{traduction.CayenneRed}</span></div>
							<div className={backNumberInput.numberColor === 'chinese red' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'chinese red'})}><div className="roundColor chinesesRed"></div><span className="textAction">{traduction.ChinesesRed}</span></div>
							<div className={backNumberInput.numberColor === 'fluo yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'fluo yellow'})}><div className="roundColor fluoYellow"></div><span className="textAction">{traduction.FluoYellow}</span></div>
							<div className={backNumberInput.numberColor === 'fluo pink' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'fluo pink'})}><div className="roundColor fluoPink"></div><span className="textAction">{traduction.FluoPink}</span></div>
						</>
							: backNumberInput.numberColorType === 'glitter' ?
							<>
							<div className={backNumberInput.numberColor === 'white' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'white'})}><div className="roundColor white"></div><span className="textAction">{traduction.White}</span></div>
							<div className={backNumberInput.numberColor === 'black' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'black'})}><div className="roundColor black"></div><span className="textAction">{traduction.Black}</span></div>
							<div className={backNumberInput.numberColor === 'grey' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'grey'})}><div className="roundColor coolGrey"></div><span className="textAction">{traduction.CoolGrey}</span></div>
							<div className={backNumberInput.numberColor === 'estate blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'estate blue'})}><div className="roundColor EstateBlue"></div><span className="textAction">{traduction.EstateBlue}</span></div>
							<div className={backNumberInput.numberColor === 'pirate grey' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'pirate grey'})}><div className="roundColor pirateGrey"></div><span className="textAction">{traduction.PirateGrey}</span></div>
							<div className={backNumberInput.numberColor === 'dusk blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'dusk blue'})}><div className="roundColor duskBlue"></div><span className="textAction">{traduction.DuskBlue}</span></div>
							<div className={backNumberInput.numberColor === 'double cream' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'double cream'})}><div className="roundColor doubleCream"></div><span className="textAction">{traduction.DoubleCream}</span></div>
							<div className={backNumberInput.numberColor === 'rally blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'rally blue'})}><div className="roundColor rallyBlue"></div><span className="textAction">{traduction.RallyBlue}</span></div>
							<div className={backNumberInput.numberColor === 'iris yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iris yellow'})}><div className="roundColor yellowIris"></div><span className="textAction">{traduction.YellowIris}</span></div>
							<div className={backNumberInput.numberColor === 'iceberg green' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iceberg green'})}><div className="roundColor icebergGreen"></div><span className="textAction">{traduction.IcebergGreen}</span></div>
							<div className={backNumberInput.numberColor === 'blazing yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'blazing yellow'})}><div className="roundColor blazingYellow"></div><span className="textAction">{traduction.BlazingYellow}</span></div>
							<div className={backNumberInput.numberColor === 'green doodle' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'green doodle'})}><div className="roundColor greenDouble"></div><span className="textAction">{traduction.GreenDouble}</span></div>
							<div className={backNumberInput.numberColor === 'blazing orange' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'blazing orange'})}><div className="roundColor blazingOrange"></div><span className="textAction">{traduction.BlazingOrange}</span></div>
							<div className={backNumberInput.numberColor === 'lime green' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'lime green'})}><div className="roundColor limeGreen"></div><span className="textAction">{traduction.LimeGreen}</span></div>
							<div className={backNumberInput.numberColor === 'vermillon' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'vermillon'})}><div className="roundColor vermillion"></div><span className="textAction">{traduction.Vermillion}</span></div>
							<div className={backNumberInput.numberColor === 'green gables' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'green gables'})}><div className="roundColor greenGables"></div><span className="textAction">{traduction.GreenGables}</span></div>
							<div className={backNumberInput.numberColor === 'orchid pink' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'orchid pink'})}><div className="roundColor orchidPink"></div><span className="textAction">{traduction.OrchidPink}</span></div>
							<div className={backNumberInput.numberColor === 'camel' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'camel'})}><div className="roundColor camel"></div><span className="textAction">{traduction.Camel}</span></div>
							<div className={backNumberInput.numberColor === 'plum purple' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'plum purple'})}><div className="roundColor plumPurple"></div><span className="textAction">{traduction.PlumPurple}</span></div>
							<div className={backNumberInput.numberColor === 'brown stone' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'brown stone'})}><div className="roundColor brownStone"></div><span className="textAction">{traduction.BrownStone}</span></div>
							<div className={backNumberInput.numberColor === 'cayenne red' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'cayenne red'})}><div className="roundColor cayenneRed"></div><span className="textAction">{traduction.CayenneRed}</span></div>
							<div className={backNumberInput.numberColor === 'iridecent blue' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iridecent blue'})}><div className="roundColor iridescentBlue"></div><span className="textAction">{traduction.IridescentBlue}</span></div>
							<div className={backNumberInput.numberColor === 'chinese red' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'chinese red'})}><div className="roundColor chinesesRed"></div><span className="textAction">{traduction.ChinesesRed}</span></div>
							<div className={backNumberInput.numberColor === 'iridecent pink' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'iridecent pink'})}><div className="roundColor iridescentPink"></div><span className="textAction">{traduction.IridescentPink}</span></div>
							<div className={backNumberInput.numberColor === 'fluo yellow' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'fluo yellow'})}><div className="roundColor fluoYellow"></div><span className="textAction">{traduction.FluoYellow}</span></div>
							<div className={backNumberInput.numberColor === 'fluo pink' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'fluo pink'})}><div className="roundColor fluoPink"></div><span className="textAction">{traduction.FluoPink}</span></div>
						</>
						:
						<>
							<div className={backNumberInput.numberColor === 'copper foil' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'copper foil'})}><div className="roundColor copperFoil"></div><span className="textAction">{traduction.CopperFoil}</span></div>
							<div className={backNumberInput.numberColor === 'gold foil' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'gold foil'})}><div className="roundColor goldFoil"></div><span className="textAction">{traduction.GoldFoil}</span></div>
							<div className={backNumberInput.numberColor === 'silver foil' ? 'selectColor' : 'colorP'} onClick={() => setBackNumberInput({...backNumberInput, numberColor:'silver foil'})}><div className="roundColor silverFoil"></div><span className="textAction">{traduction.SilverFoil}</span></div>
						</>
						}		
					</div>
			</div>
		</>
	)
}

export default BackNumber;