const { useState } = wp.element;
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

const ChinTabs = ({setAerationChin, setStandardValue,	standardValue}) => {
	const [ chinTemplate ] = useState(ElementData);
	const [ chinPosition, setChinPosition ] = useState({
		title: ElementData[0].title,
		fileName: ElementData[0].fileName,
		position: 0
	})
	const minus = () => {
		let position = chinPosition.position -= 1;
		if (position === -1) {
			position = ElementData.length - 1
		}
		setChinPosition({
			title: ElementData[position].title,
			fileName: ElementData[position].fileName,
			position: position
		})
	}
	const plus = () => {
		let position = chinPosition.position += 1;
		if (position === ElementData.length) {
			position = 0
		}
		setChinPosition({
			title: ElementData[position].title,
			fileName: ElementData[position].fileName,
			position: position
		})
	}
	return (
		<div className="infos chinguard">
			<div className="elementChoice">
					<img className="leftChoice direction" src={ArrowLeft} alt="left direction" onClick={minus}/>
					<h3 className="elementPicker">{chinPosition.title} <span className="numberStep">{chinPosition.position+1}/{ElementData.length}</span></h3>	
					<img className="rightChoice direction" src={ArrowRight} alt="right direction" onClick={plus}/>
			</div>
			<div className="template">
			{
				chinPosition.fileName === 'aeration' ? <Aeration setAerationChin={setAerationChin} /> :  
				chinPosition.fileName === 'interior' ? <Interior /> :
				chinPosition.fileName === 'main-color' ? <MainColor setStandardValue={setStandardValue} standardValue={standardValue}/> :
				chinPosition.fileName === 'metal-parts' ? <MetalsParts /> :
				chinPosition.fileName === 'pattern-color' ? <PatternColor setStandardValue={setStandardValue} standardValue={standardValue}/> :
				chinPosition.fileName === 'pattern' ? <Pattern setStandardValue={setStandardValue} standardValue={standardValue} /> :
				chinPosition.fileName === 'trim' ? <Trim /> :
				chinPosition.fileName === 'varnish' ? <Varnish /> : ''
			}
			</div>
		</div>
	)
}
export default ChinTabs;