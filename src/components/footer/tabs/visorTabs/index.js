const { useState } = wp.element;
import VisorFrame from "./templates/VisorFrame";
import VisorLongPage from "./templates/VisorLongPage";
import VisorPeakPage from "./templates/VisorPeakPage";
import VisorShortPage from "./templates/VisorShortPage";
import VisorTypeChoice from "./templates/VisorTypeChoice";

const VisorTabs = ({setStandardValue,	standardValue, traduction}) => {
	const [ typeChoice, setTypeChoice ] = useState('');
	return (
		<div className="infos visor">
			<div className="template">
				<VisorTypeChoice
					setTypeChoice={setTypeChoice}
					setStandardValue={setStandardValue}
					standardValue={standardValue}
					traduction = {traduction}
				/>
				{typeChoice === 'long_visor' && (
					<>
						<VisorFrame 
							setStandardValue = {setStandardValue}
							standardValue = {standardValue}
							traduction = {traduction}
						/>
						<VisorLongPage 
							setStandardValue = {setStandardValue}
							standardValue = {standardValue}
							traduction = {traduction}
						/>
					</>
				)}
				{typeChoice === 'short_visor' && (
					<>
						<VisorFrame
							setStandardValue = {setStandardValue}
							standardValue = {standardValue}
							traduction = {traduction}
						/>
						<VisorShortPage
							setStandardValue = {setStandardValue}
							standardValue = {standardValue}
							traduction = {traduction}
						/>
					</>
				)}
				{typeChoice === 'peak_visor' && (
					<>
						<VisorPeakPage
							setStandardValue = {setStandardValue}
							standardValue = {standardValue}
							traduction = {traduction}
						/>
					</>
				)}		
			</div>
		</div>
	)
}
export default VisorTabs;