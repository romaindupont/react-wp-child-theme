const { useState } = wp.element;
import VisorFrame from "./templates/VisorFrame";
import VisorLongPage from "./templates/VisorLongPage";
import VisorPeakPage from "./templates/VisorPeakPage";
import VisorShortPage from "./templates/VisorShortPage";
import VisorTypeChoice from "./templates/VisorTypeChoice";

const VisorTabs = () => {
	const [ typeChoice, setTypeChoice ] = useState('');
	return (
		<div className="infos visor">
			<div className="template">
				<VisorTypeChoice setTypeChoice={setTypeChoice}/>
				{ typeChoice === 'long_visor' && (
					<>
						<VisorFrame />
						<VisorLongPage />
					</>
				)}
				{ typeChoice === 'short_visor' && (
					<>
						<VisorFrame />
						<VisorShortPage />
					</>
				)}
				{ typeChoice === 'peak_visor' && (
					<>
						<VisorPeakPage />
					</>
				)}		
			</div>
		</div>
	)
}
export default VisorTabs;