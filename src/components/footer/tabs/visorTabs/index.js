const { useState } = wp.element;
import VisorFrame from "./templates/VisorFrame";
import VisorLongPage from "./templates/VisorLongPage";
import VisorPeakPage from "./templates/VisorPeakPage";
import VisorShortPage from "./templates/VisorShortPage";
import VisorTypeChoice from "./templates/VisorTypeChoice";

const VisorTabs = ({setStandardValue,	standardValue}) => {
	const [ typeChoice, setTypeChoice ] = useState('');
	return (
		<div className="infos visor">
			<div className="template">
				<VisorTypeChoice setTypeChoice={setTypeChoice} setStandardValue={setStandardValue} standardValue={standardValue} />
				{ typeChoice === 'long_visor' && (
					<>
						<VisorFrame setStandardValue={setStandardValue} standardValue={standardValue}/>
						<VisorLongPage setStandardValue={setStandardValue} standardValue={standardValue}/>
					</>
				)}
				{ typeChoice === 'short_visor' && (
					<>
						<VisorFrame setStandardValue={setStandardValue} standardValue={standardValue}/>
						<VisorShortPage setStandardValue={setStandardValue} standardValue={standardValue}/>
					</>
				)}
				{ typeChoice === 'peak_visor' && (
					<>
						<VisorPeakPage setStandardValue={setStandardValue} standardValue={standardValue}/>
					</>
				)}		
			</div>
		</div>
	)
}
export default VisorTabs;