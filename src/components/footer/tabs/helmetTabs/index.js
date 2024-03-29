const { useEffect } = wp.element;
import ArrowLeft from '../../../../../assets/images/arrow_left.svg';
import ArrowRight from '../../../../../assets/images/arrow_right.svg';
import ElementData from '../../../../../assets/json/elementHelmet';
import Aeration from './templates/aeration';
import BackNumber from './templates/back-number';
import Engraving from './templates/engraving';
import Interior from './templates/interior';
import LeftNumber from './templates/left-number';
import Logo from './templates/logo';
import MainColor from './templates/main-color';
import MetalsParts from './templates/metal-parts';
import PatternColor from './templates/pattern-color';
import Pattern from './templates/pattern';
import RightNumber from './templates/right-number';
import Screw from './templates/screw';
import Size from './templates/size';
import Trim from './templates/trim';
import Varnish from './templates/varnish';
import Zippers from './templates/zippers';
import CameraPosition from '../../../body/Camera/CameraPosition';

const HelmetTabs = ({
	aerationHelmet,
	setAerationHelmet,
	screwPosition,
	setScrewPosition,
	setStandardValue,
	standardValue,
	varnishHelmet,
	setVarnishHelmet,
	setBackNumberWindow,
	backNumberWindow,
	leftNumberWindow,
	setLeftNumberWindow,
	rightNumberWindow,
	setRightNumberWindow,
	backEngraving,
	setBackEngraving,
	helmetPosition,
	setHelmetPosition,
	traduction,
	backNumberInput,
	setBackNumberInput,
	leftNumberInput,
	setLeftNumberInput,
	rightNumberInput,
	setRightNumberInput,
	engravingInput,
	setEngravingInput,
	withChin,
	withVisor,
	mySku,
	setMySku
}) => {
	let language = document.querySelector('html').lang;
	let elementsOfHelmet = ElementData[0].en;
	if (language.includes('fr')) {
		elementsOfHelmet = ElementData[0].fr;
	}
	if (language.includes('es')) {
		elementsOfHelmet = ElementData[0].en;
	}
	const minus = () => {
		let position = helmetPosition.position -= 1;
		if (position === -1) {
			position = elementsOfHelmet.length - 1
		}
		setHelmetPosition({
			title: elementsOfHelmet[position].title,
			fileName: elementsOfHelmet[position].fileName,
			position: position,
			helpMessage : elementsOfHelmet[position].helpMessage
		})
	}
	const plus = () => {
		let position = helmetPosition.position += 1;
		if (position === elementsOfHelmet.length) {
			position = 0
		}
		setHelmetPosition({
			title: elementsOfHelmet[position].title,
			fileName: elementsOfHelmet[position].fileName,
			position: position,
			helpMessage : elementsOfHelmet[position].helpMessage
		})
	}
	useEffect(() => {
		CameraPosition(helmetPosition.fileName)
	}, [helmetPosition]);
	return (
		<div className="infos helmet">
			<div className="elementChoice">
				<img className="leftChoice direction" src={ArrowLeft} alt="left direction" onClick={minus}/>
				<h3 className="elementPicker">{helmetPosition.title} <span className="numberStep">{helmetPosition.position+1}/{elementsOfHelmet.length}</span></h3>	
				<img className="rightChoice direction" src={ArrowRight} alt="right direction" onClick={plus}/>
			</div>
			<div className="template">
				{
					helmetPosition.fileName === 'aeration' ? 
						<Aeration 
							aerationHelmet = {aerationHelmet}
							setAerationHelmet = {setAerationHelmet}
							traduction = {traduction}
						/> :  
					helmetPosition.fileName === 'back-number' ?
						<BackNumber
							setBackNumberWindow = {setBackNumberWindow}
							backNumberWindow = {backNumberWindow}
							fileNames = 'back'
							traduction = {traduction}
							backNumberInput = {backNumberInput}
							setBackNumberInput = {setBackNumberInput}
							mySku = {mySku}
							setMySku = {setMySku}
						/> :
					helmetPosition.fileName === 'engraving' ?
						<Engraving 
							backEngraving = {backEngraving}
							setBackEngraving = {setBackEngraving}
							fileNames = 'engraving'
							traduction = {traduction}
							engravingInput = {engravingInput}
							setEngravingInput = {setEngravingInput}
							mySku = {mySku}
							setMySku = {setMySku}
						/> :
					helmetPosition.fileName === 'interior' ?
						<Interior
							setStandardValue = {setStandardValue}
							standardValue = {standardValue}
							traduction = {traduction}
							mySku = {mySku}
							setMySku = {setMySku}
						/> :
					helmetPosition.fileName === 'right-number' ?
						<LeftNumber 
							leftNumberWindow = {leftNumberWindow}
							setLeftNumberWindow = {setLeftNumberWindow}
							fileNames = 'left'
							traduction = {traduction}
							leftNumberInput = {leftNumberInput}
							setLeftNumberInput = {setLeftNumberInput}
							mySku = {mySku}
							setMySku = {setMySku}
						/> :
					helmetPosition.fileName === 'logo' ?
						<Logo
							setStandardValue = {setStandardValue}
							standardValue = {standardValue}
							traduction = {traduction}
							mySku = {mySku}
							setMySku = {setMySku}
						/> :
					helmetPosition.fileName === 'main-color' ?
						<MainColor
							setStandardValue = {setStandardValue}
							standardValue = {standardValue}
							traduction = {traduction}
							mySku = {mySku}
							setMySku = {setMySku}
						/> :
					helmetPosition.fileName === 'metal-parts' ?
						<MetalsParts
							setStandardValue = {setStandardValue}
							standardValue = {standardValue}
							traduction = {traduction}
						/> :
					helmetPosition.fileName === 'pattern-color' ?
					standardValue.Helmet_design !== '' ?
						<PatternColor
							setStandardValue = {setStandardValue}
							standardValue = {standardValue}
							traduction = {traduction}
						/> : 
							<p className='messageNotAvailable'>Not available with this helmet</p> :
					helmetPosition.fileName === 'pattern' ?
						<Pattern
							setStandardValue = {setStandardValue}
							standardValue = {standardValue}
							traduction = {traduction}
							mySku = {mySku}
							setMySku = {setMySku}
						/> :
					helmetPosition.fileName === 'left-number' ?
						<RightNumber 
							rightNumberWindow = {rightNumberWindow}
							setRightNumberWindow = {setRightNumberWindow}
							fileNames = 'right'
							traduction = {traduction}
							rightNumberInput = {rightNumberInput}
							setRightNumberInput = {setRightNumberInput}
							mySku = {mySku}
							setMySku = {setMySku}
						/> :
					helmetPosition.fileName === 'screw' ?
						<Screw
							screwPosition = {screwPosition}
							setScrewPosition = {setScrewPosition}
							traduction = {traduction}
							withChin = {withChin}
							withVisor = {withVisor}
						/> :
					helmetPosition.fileName === 'size' ?
						<Size 
							setStandardValue = {setStandardValue}
							standardValue = {standardValue}
							traduction = {traduction}
						/> :
					helmetPosition.fileName === 'trim' ?
						<Trim
							setStandardValue = {setStandardValue}
							standardValue = {standardValue}
							traduction = {traduction}
							mySku = {mySku}
							setMySku = {setMySku}
						/> :
					helmetPosition.fileName === 'varnish' ?
						<Varnish
							varnishHelmet = {varnishHelmet}
							setVarnishHelmet = {setVarnishHelmet}
							traduction = {traduction}
							standardValue = {standardValue}
						/> :
					helmetPosition.fileName === 'zippers' ?
						<Zippers
							setStandardValue = {setStandardValue}
							standardValue = {standardValue}
							traduction = {traduction}
							mySku = {mySku}
							setMySku = {setMySku}
						/> 
					: ''
				}
			</div>
		</div>
	)
}
export default HelmetTabs;