import ArrowLeft from '../../../../../assets/images/arrow_left.svg';
import ArrowRight from '../../../../../assets/images/arrow_right.svg';

const ChinTabs = () => {
	return (
		<div className="infos chinguard">
			<div className="elementChoice">
					<img className="leftChoice direction" src={ArrowLeft} alt="left direction"/>
					<h3 className="elementPicker">Elements <span className="numberStep"></span></h3>	
					<img className="rightChoice direction" src={ArrowRight} alt="right direction"/>
			</div>
			<div className="template"></div>
		</div>
	)
}
export default ChinTabs;