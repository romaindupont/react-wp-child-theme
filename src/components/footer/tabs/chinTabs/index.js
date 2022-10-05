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
	traduction
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
			position: position
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
			position: position
		})
	}
	return (
		<div className="infos chinguard">
				{!tabsChoice.chin ?
					<div className="whenNoEyes">  
						<button className="buttonAdd" onClick={() => setTabsChoice({...tabsChoice, chin: true})}>Ajouter</button>
					</div>
					 : 
					 <div className="whenNoEyes">  
					 	<button className="buttonAdd" onClick={() => setTabsChoice({...tabsChoice, chin: false})}>Supprimer</button>
					</div>
				}
			<div className="elementChoice">
					<img className="leftChoice direction" src={ArrowLeft} alt="left direction" onClick={minus}/>
					<h3 className="elementPicker">{chinPosition.title} <span className="numberStep">{chinPosition.position+1}/{elementsOfChin.length}</span></h3>	
					<img className="rightChoice direction" src={ArrowRight} alt="right direction" onClick={plus}/>
			</div>
			<div className="template">
			{
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
				: ''
			}
			</div>
		</div>
	)
}
export default ChinTabs;