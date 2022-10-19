const { useState, useEffect } = wp.element;
import ArrowLeft from '../../../../../assets/images/arrow_left.svg';
import ArrowRight from '../../../../../assets/images/arrow_right.svg';
import ElementData from '../../../../../assets/json/elementChin';
import Aeration from './templates/aeration';
import Interior from './templates/interior';
import MainColor from './templates/main-color';
import MetalsParts from './templates/metal-parts';
import Pattern from './templates/pattern';
import PatternColor from './templates/pattern-color';
import Trim from './templates/trim';
import Varnish from './templates/varnish';
import CameraPosition from '../../../body/Camera/CameraPositionChin';

const ChinTabs = ({
	aerationChin,
	setAerationChin, 
	setStandardValue, 
	standardValue, 
	varnishChin,
	setVarnishChin,
	chinPosition,
	setChinPosition,
	setTabsChoice,
	tabsChoice,
	traduction,
	withChin,
	setWithChin
}) => {
	let language = document.querySelector('html').lang;
	let elementsOfChin = ElementData[0].en;
	if (language.includes('fr')) {
		elementsOfChin = ElementData[0].fr;
	}
	if (language.includes('es')) {
		elementsOfChin = ElementData[0].en;
	}
	const minus = () => {
		let position = chinPosition.position -= 1;
		if (position === -1) {
			position = elementsOfChin.length - 1
		}
		setChinPosition({
			title: elementsOfChin[position].title,
			fileName: elementsOfChin[position].fileName,
			position: position,
			helpMessage : elementsOfChin[position].helpMessage
		})
	}
	const plus = () => {
		let position = chinPosition.position += 1;
		if (position === elementsOfChin.length) {
			position = 0
		}
		setChinPosition({
			title: elementsOfChin[position].title,
			fileName: elementsOfChin[position].fileName,
			position: position,
			helpMessage : elementsOfChin[position].helpMessage
		})
	}
	useEffect(() => {
		CameraPosition(chinPosition.fileName)
	}, [chinPosition]);
	return (
		<div className="infos chinguard">
					{!withChin ? 
					<>
						<div className="elementChoice">
							<img className="leftChoice direction" src={ArrowLeft} alt="left direction"/>
							<h3 className="elementPicker">Chinguard <span className="numberStep">1/1</span></h3>	
							<img className="rightChoice direction" src={ArrowRight} alt="right direction"/>
						</div>
						<div className="template">
						<div className="aerationList">
							<div className="aerationDisplay">
								<span className={withChin ? 'buttonChoice' : 'selectButton'} onClick={()=>setTabsChoice({...tabsChoice, chin: false}) & setWithChin(false)}>{traduction.Without}</span>
								<span className={withChin ? 'selectButton' : 'buttonChoice'} onClick={()=>setTabsChoice({...tabsChoice, chin: true}) & setWithChin(true)}>{traduction.With}</span>
							</div>
						</div>
						</div>
					</> :
					<>
						<div className="elementChoice">
								<img className="leftChoice direction" src={ArrowLeft} alt="left direction" onClick={minus}/>
								<h3 className="elementPicker">{chinPosition.title} <span className="numberStep">{chinPosition.position+1}/{elementsOfChin.length}</span></h3>	
								<img className="rightChoice direction" src={ArrowRight} alt="right direction" onClick={plus}/>
						</div>
						<div className="template">
							{
							chinPosition.fileName === 'chinguard' ?
							<div className="aerationList">
							<div className="aerationDisplay">
								<span className={withChin ? 'buttonChoice' : 'selectButton'} onClick={()=>setTabsChoice({...tabsChoice, chin: false}) & setWithChin(false)}>{traduction.Without}</span>
								<span className={withChin ? 'selectButton' : 'buttonChoice'} onClick={()=>setTabsChoice({...tabsChoice, chin: true}) & setWithChin(true)}>{traduction.With}</span>
							</div>
						</div>
						:  
							chinPosition.fileName === 'aeration' ?
								<Aeration
									setAerationChin = {setAerationChin}
									aerationChin = {aerationChin}
									traduction = {traduction}
								/> 
							:  
							chinPosition.fileName === 'interior' ?
								<Interior /> 
							:
							chinPosition.fileName === 'main-color' ?
								<MainColor
									setStandardValue = {setStandardValue}
									standardValue = {standardValue}
									traduction = {traduction}
								/> 
							:
							chinPosition.fileName === 'metal-parts' ?
								<MetalsParts /> 
							:
							chinPosition.fileName === 'pattern-color' ?
								<PatternColor
									setStandardValue = {setStandardValue}
									standardValue = {standardValue}
									traduction = {traduction}
								/> 
							:
							chinPosition.fileName === 'pattern' ?
								<Pattern
									setStandardValue = {setStandardValue}
									standardValue = {standardValue}
									traduction = {traduction}
								/> 
							:
							chinPosition.fileName === 'trim' ?
								<Trim
									setStandardValue = {setStandardValue}
									standardValue = {standardValue}
									traduction = {traduction}
								/> 
							:
							chinPosition.fileName === 'varnish' ?
								<Varnish
									setVarnishChin = {setVarnishChin}
									varnishChin = {varnishChin}
									traduction = {traduction}
								/> 
					 		: '' }
						</div>
					</> }
		</div>
		
	)
}
export default ChinTabs;