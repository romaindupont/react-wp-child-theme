const { useState } = wp.element;
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

const HelmetTabs = ({setAerationHelmet, setScrewPosition, setStandardValue, standardValue, setVarnishHelmet}) => {
	const [ helmetTemplate ] = useState(ElementData);
	const [ helmetPosition, setHelmetPosition ] = useState({
		title: ElementData[0].title,
		fileName: ElementData[0].fileName,
		position: 0
	})

	const minus = () => {
		let position = helmetPosition.position -= 1;
		if (position === -1) {
			position = ElementData.length - 1
		}
		setHelmetPosition({
			title: ElementData[position].title,
			fileName: ElementData[position].fileName,
			position: position
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
			position: position
		})
	}
	return (
		<div className="infos helmet">
			<div className="elementChoice">
				<img className="leftChoice direction" src={ArrowLeft} alt="left direction" onClick={minus}/>
				<h3 className="elementPicker">{helmetPosition.title} <span className="numberStep">{helmetPosition.position+1}/{ElementData.length}</span></h3>	
				<img className="rightChoice direction" src={ArrowRight} alt="right direction" onClick={plus}/>
			</div>
			<div className="template">
				{
					helmetPosition.fileName === 'aeration' ? <Aeration setAerationHelmet={setAerationHelmet}/> :  
					helmetPosition.fileName === 'back-number' ? <BackNumber /> :
					helmetPosition.fileName === 'engraving' ? <Engraving /> :
					helmetPosition.fileName === 'interior' ? <Interior /> :
					helmetPosition.fileName === 'left-number' ? <LeftNumber /> :
					helmetPosition.fileName === 'logo' ? <Logo /> :
					helmetPosition.fileName === 'main-color' ? <MainColor setStandardValue={setStandardValue} standardValue={standardValue}/> :
					helmetPosition.fileName === 'metal-parts' ? <MetalsParts /> :
					helmetPosition.fileName === 'pattern-color' ? <PatternColor setStandardValue={setStandardValue} standardValue={standardValue}/> :
					helmetPosition.fileName === 'pattern' ? <Pattern setStandardValue={setStandardValue} standardValue={standardValue} /> :
					helmetPosition.fileName === 'right-number' ? <RightNumber /> :
					helmetPosition.fileName === 'screw' ? <Screw setScrewPosition={setScrewPosition}/> :
					helmetPosition.fileName === 'size' ? <Size /> :
					helmetPosition.fileName === 'trim' ? <Trim /> :
					helmetPosition.fileName === 'varnish' ? <Varnish setVarnishHelmet={setVarnishHelmet}/> :
					helmetPosition.fileName === 'zippers' ? <Zippers /> : ''
				}
			</div>
		</div>
	)
}
export default HelmetTabs;