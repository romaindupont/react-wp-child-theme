const { useState } = wp.element;
import ArrowLeft from '../../../../../assets/images/arrow_left.svg';
import ArrowRight from '../../../../../assets/images/arrow_right.svg';
import ElementData from '../../../../../assets/json/elementChin';
import Aeration from '../helmetTabs/templates/aeration';
import Interior from '../helmetTabs/templates/interior';
import MainColor from '../helmetTabs/templates/main-color';
import MetalsParts from '../helmetTabs/templates/metal-parts';
import Pattern from '../helmetTabs/templates/pattern';
import PatternColor from '../helmetTabs/templates/pattern-color';
import Trim from '../helmetTabs/templates/trim';
import Varnish from '../helmetTabs/templates/varnish';

const ChinTabs = () => {
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
				chinPosition.fileName === 'aeration' ? <Aeration /> :  
				chinPosition.fileName === 'interior' ? <Interior /> :
				chinPosition.fileName === 'main-color' ? <MainColor /> :
				chinPosition.fileName === 'metal-parts' ? <MetalsParts /> :
				chinPosition.fileName === 'pattern-color' ? <PatternColor /> :
				chinPosition.fileName === 'pattern' ? <Pattern /> :
				chinPosition.fileName === 'trim' ? <Trim /> :
				chinPosition.fileName === 'varnish' ? <Varnish /> : ''
			}
			</div>
		</div>
	)
}
export default ChinTabs;