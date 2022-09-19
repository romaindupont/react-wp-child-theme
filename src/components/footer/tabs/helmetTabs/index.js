const { useState, useEffect } = wp.element;
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
	setAerationHelmet,
	setScrewPosition,
	setStandardValue,
	standardValue,
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
	setHelmetPosition
}) => {
	const [ helmetTemplate ] = useState(ElementData);
/* 	const [ helmetPosition, setHelmetPosition ] = useState({
		title: ElementData[0].title,
		fileName: ElementData[0].fileName,
		position: 0
	}) */

	const minus = () => {
		let position = helmetPosition.position -= 1;
		if (position === -1) {
			position = ElementData.length - 1
		}
		setHelmetPosition({
			title: ElementData[position].title,
			fileName: ElementData[position].fileName,
			position: position,
			helpMessage : ElementData[position].helpMessage
		})
	}
	const plus = () => {
		let position = helmetPosition.position += 1;
		if (position === ElementData.length) {
			position = 0
		}
		setHelmetPosition({
			title: ElementData[position].title,
			fileName: ElementData[position].fileName,
			position: position,
			helpMessage : ElementData[position].helpMessage
		})
	}
	useEffect(() => {
		CameraPosition(helmetPosition.fileName)
	}, [helmetPosition]);
	return (
		<div className="infos helmet">
			<div className="elementChoice">
				<img className="leftChoice direction" src={ArrowLeft} alt="left direction" onClick={minus}/>
				<h3 className="elementPicker">{helmetPosition.title} <span className="numberStep">{helmetPosition.position+1}/{ElementData.length}</span></h3>	
				<img className="rightChoice direction" src={ArrowRight} alt="right direction" onClick={plus}/>
			</div>
			<div className="template">
				{
					helmetPosition.fileName === 'aeration' ? 
						<Aeration 
							setAerationHelmet={setAerationHelmet}
						/> :  
					helmetPosition.fileName === 'back-number' ?
						<BackNumber
							setBackNumberWindow={setBackNumberWindow}
							backNumberWindow={backNumberWindow}
						/> :
					helmetPosition.fileName === 'engraving' ?
						<Engraving 
							backEngraving = {backEngraving}
							setBackEngraving = {setBackEngraving}
						/> :
					helmetPosition.fileName === 'interior' ?
						<Interior
							setStandardValue={setStandardValue}
							standardValue={standardValue}
						/> :
					helmetPosition.fileName === 'left-number' ?
						<LeftNumber 
							leftNumberWindow = {leftNumberWindow}
							setLeftNumberWindow = {setLeftNumberWindow}
						/> :
					helmetPosition.fileName === 'logo' ?
						<Logo
							setStandardValue={setStandardValue}
							standardValue={standardValue}
						/> :
					helmetPosition.fileName === 'main-color' ?
						<MainColor
							setStandardValue={setStandardValue}
							standardValue={standardValue}
						/> :
					helmetPosition.fileName === 'metal-parts' ?
						<MetalsParts
							setStandardValue={setStandardValue}
							standardValue={standardValue}
						/> :
					helmetPosition.fileName === 'pattern-color' ?
						<PatternColor
							setStandardValue={setStandardValue}
							standardValue={standardValue}
						/> :
					helmetPosition.fileName === 'pattern' ?
						<Pattern
							setStandardValue={setStandardValue}
							standardValue={standardValue}
						/> :
					helmetPosition.fileName === 'right-number' ?
						<RightNumber 
							rightNumberWindow = {rightNumberWindow}
							setRightNumberWindow = {setRightNumberWindow} 
						/> :
					helmetPosition.fileName === 'screw' ?
						<Screw
							setScrewPosition={setScrewPosition}
						/> :
					helmetPosition.fileName === 'size' ?
						<Size 
							setStandardValue={setStandardValue}
							standardValue={standardValue}
						/> :
					helmetPosition.fileName === 'trim' ?
						<Trim
							setStandardValue={setStandardValue}
							standardValue={standardValue}
						/> :
					helmetPosition.fileName === 'varnish' ?
						<Varnish
							setVarnishHelmet={setVarnishHelmet}
						/> :
					helmetPosition.fileName === 'zippers' ?
						<Zippers
							setStandardValue={setStandardValue}
							standardValue={standardValue}
						/> : ''
				}
			</div>
		</div>
	)
}
export default HelmetTabs;