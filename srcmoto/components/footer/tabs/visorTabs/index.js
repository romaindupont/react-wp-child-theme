const { useState, useEffect } = wp.element;
import VisorFrame from "./templates/VisorFrame";
import VisorLongPage from "./templates/VisorLongPage";
import VisorPeakPage from "./templates/VisorPeakPage";
import VisorShortPage from "./templates/VisorShortPage";
import VisorTypeChoice from "./templates/VisorTypeChoice";
import ElementData from '../../../../../assets/json/elementVisor';
import ElementDataVisorPeak from '../../../../../assets/json/elementVisorPeak';
import ArrowLeft from '../../../../../assets/images/arrow_left.svg';
import ArrowRight from '../../../../../assets/images/arrow_right.svg';
import CameraPosition from '../../../body/Camera/CameraPositionVisor';
import Varnish from "./templates/varnish";

const VisorTabs = ({
	setStandardValue,
	standardValue,
	traduction,
	setTabsChoice,
	tabsChoice,
	visorPosition,
	setVisorPosition,
	typeChoice,
	setTypeChoice,
	withVisor,
	setWithVisor,
	withChin,
	mySku,
	setMySku,
	setVarnishVisor,
	varnishVisor
}) => {
	let language = document.querySelector('html').lang;
	let elementsOfVisor = ElementData[0].en;
	if (standardValue.Visor_type !== 'peak_visor') {
		elementsOfVisor = ElementData[0].en;
		if (language.includes('fr')) {
			elementsOfVisor = ElementData[0].fr;
		}
		if (language.includes('es')) {
			elementsOfVisor = ElementData[0].en;
		}
	} else {
		elementsOfVisor = ElementDataVisorPeak[0].en;
		if (language.includes('fr')) {
			elementsOfVisor = ElementDataVisorPeak[0].fr;
		}
		if (language.includes('es')) {
			elementsOfVisor = ElementDataVisorPeak[0].en;
		}
	}
	const minus = () => {
		let position = visorPosition.position -= 1;
		if (position === -1) {
			position = elementsOfVisor.length - 1
		}
		setVisorPosition({
			title: elementsOfVisor[position].title,
			fileName: elementsOfVisor[position].fileName,
			position: position,
			helpMessage : elementsOfVisor[position].helpMessage
		})
	}
	const plus = () => {
		let position = visorPosition.position += 1;
		if (position === elementsOfVisor.length) {
			position = 0
		}
		setVisorPosition({
			title: elementsOfVisor[position].title,
			fileName: elementsOfVisor[position].fileName,
			position: position,
			helpMessage : elementsOfVisor[position].helpMessage
		})
	}
	useEffect(() => {
		CameraPosition(visorPosition.fileName)
	}, [visorPosition]);
	return (
		<div className="infos visor">
			{!withVisor ? 
				<>
					<div className="elementChoice">
						<img className="leftChoice direction" src={ArrowLeft} alt="left direction"/>
						<h3 className="elementPicker">Visor <span className="numberStep">1/1</span></h3>	
						<img className="rightChoice direction" src={ArrowRight} alt="right direction"/>
					</div>
					<div className="template">
					<div className="aerationList">
						<div className="aerationDisplay">
							<span className={withVisor ? 'buttonChoice' : 'selectButton'} onClick={()=>setTabsChoice({...tabsChoice, visor: false}) & setWithVisor(false) & setMySku({...mySku, position3: 'xx', position18: 'xx'}) & CameraPosition('visor')}>{traduction.Without}</span>
							<span className={withVisor ? 'selectButton' : 'buttonChoice'} onClick={()=>setTabsChoice({...tabsChoice, visor: true}) & setWithVisor(true) & setMySku({...mySku, position3: 'vs'}) & CameraPosition('visor')}>{traduction.With}</span>
						</div>
					</div>
					</div>
				</> :
				<>
					<div className="elementChoice">
							<img className="leftChoice direction" src={ArrowLeft} alt="left direction" onClick={minus}/>
							<h3 className="elementPicker">{visorPosition.title} <span className="numberStep">{visorPosition.position+1}/{elementsOfVisor.length}</span></h3>	
							<img className="rightChoice direction" src={ArrowRight} alt="right direction" onClick={plus}/>
					</div>
					<div className="template">
						{
							visorPosition.fileName === 'visor' ?
								<div className="aerationList">
									<div className="aerationDisplay">
										<span className={withVisor ? 'buttonChoice' : 'selectButton'} onClick={()=>setTabsChoice({...tabsChoice, visor: false}) & setWithVisor(false) & setMySku({...mySku, position3: 'xx', position18: 'xx'}) & CameraPosition('visor')}>{traduction.Without}</span>
										<span className={withVisor ? 'selectButton' : 'buttonChoice'} onClick={()=>setTabsChoice({...tabsChoice, visor: true}) & setWithVisor(true) & setMySku({...mySku, position3: 'vs'}) & CameraPosition('visor')}>{traduction.With}</span>
									</div>
								</div>
							:  
							visorPosition.fileName === 'visorType' ?
								<VisorTypeChoice
									setTypeChoice={setTypeChoice}
									setStandardValue={setStandardValue}
									standardValue={standardValue}
									traduction = {traduction}
									withChin = {withChin}
									mySku = {mySku}
									setMySku = {setMySku}
								/> 
							:
							visorPosition.fileName === 'visorColor' && typeChoice === 'long_visor' ?
								<>
									<VisorFrame 
										setStandardValue = {setStandardValue}
										standardValue = {standardValue}
										traduction = {traduction}
									/>
									<VisorLongPage 
										setStandardValue = {setStandardValue}
										standardValue = {standardValue}
										traduction = {traduction}
										setMySku = {setMySku}
										mySku = {mySku}
									/>
									
								</>
							:
							visorPosition.fileName === 'visorColor' && typeChoice === 'short_visor' ?	
								<>
									<VisorFrame 
										setStandardValue = {setStandardValue}
										standardValue = {standardValue}
										traduction = {traduction}
									/>
									<VisorShortPage
										setStandardValue = {setStandardValue}
										standardValue = {standardValue}
										traduction = {traduction}
										setMySku = {setMySku}
										mySku = {mySku}
									/>
								</>
							:
							visorPosition.fileName === 'visorColor' && typeChoice === 'peak_visor' ?	
								<VisorPeakPage
									setStandardValue = {setStandardValue}
									standardValue = {standardValue}
									traduction = {traduction}
									mySku = {mySku}
									setMySku = {setMySku}
								/>
							:
							visorPosition.fileName === 'varnish' && typeChoice === 'peak_visor' ?	
								<Varnish
									setVarnishVisor = {setVarnishVisor}
									varnishVisor = {varnishVisor}
									traduction = {traduction}
								/>
							
							:''
						}
					</div>
				</> }
		</div>
	)
}
export default VisorTabs;