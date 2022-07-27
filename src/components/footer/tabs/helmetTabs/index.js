const { useState } = wp.element;
import ArrowLeft from '../../../../../assets/images/arrow_left.svg';
import ArrowRight from '../../../../../assets/images/arrow_right.svg';
import ElementData from '../../../../../assets/json/elementHelmet';
import Aeration from './templates/aeration';

const HelmetTabs = () => {
	const [ helmetTemplate ] = useState(ElementData);
	const [ helmetPosition, setHelmetPosition ] = useState({
		title: ElementData[0].title,
		fileName: ElementData[0].fileName
	})
	const minus = () => {
		let position = helmetPosition.position -= 1;
		if (position === -1) {
			position = ElementData.length - 1
		}
		setHelmetPosition({
			title: ElementData[position].title,
			position: position
		})
	}
	const plus = () => {
		let position = helmetPosition.position += 1;
		if (position === 16) {
			position = 0
		}
		setHelmetPosition({
			title: ElementData[position].title,
			position: position
		})
	}
	return (
		<div className="infos helmet">
			<div className="elementChoice">
				<img className="leftChoice direction" src={ArrowLeft} alt="left direction" onClick={minus}/>
				<h3 className="elementPicker">{helmetPosition.title}<span className="numberStep"></span></h3>	
				<img className="rightChoice direction" src={ArrowRight} alt="right direction" onClick={plus}/>
			</div>
			<div className="template">
				{
					helmetPosition.fileName === 'aeration' ? <Aeration /> :  ''
				}
			</div>
		</div>
	)
}
export default HelmetTabs;