const VisorTypeChoice = ({
	setTypeChoice, 
	setStandardValue,	
	standardValue, 
	traduction, 
	withChin, 
	mySku, 
	setMySku
}) => {
	const clickChoice = (e) => {
		setTypeChoice(e.target.value);
		setStandardValue({...standardValue, Visor_type: e.target.value})
		if(e.target.value === "short_visor"){
			setMySku({...mySku, position3: 'vs'})
		}
		if(e.target.value === "peak_visor"){
			setMySku({...mySku, position3: 'vb'})
		}
		if(e.target.value === "long_visor"){
			setMySku({...mySku, position3: 'vl'})
		}
	}
	return (
		<form className="inputVisorChoice" onChange={clickChoice}>
		{withChin ?
		<>
				<input className="inputVisor" type="radio" name="visor" id="short_visor" value="short_visor" />
				<label className={standardValue.Visor_type === 'short_visor' ? 'selectButton' : 'buttonChoice'} htmlFor="short_visor">{traduction.VisorChoiceShort}</label>
				<input className="inputVisor" type="radio" name="visor" id="peak_visor" value="peak_visor" />
				<label className={standardValue.Visor_type === 'peak_visor' ? 'selectButton' : 'buttonChoice'} htmlFor="peak_visor">{traduction.VisorChoicePeak}</label>
			</> :
			<>
				<input className="inputVisor" type="radio" name="visor" id="short_visor" value="short_visor" />
				<label className={standardValue.Visor_type === 'short_visor' ? 'selectButton' : 'buttonChoice'} htmlFor="short_visor">{traduction.VisorChoiceShort}</label>
				<input className="inputVisor" type="radio" name="visor" id="long_visor" value="long_visor" />
				<label className={standardValue.Visor_type === 'long_visor' ? 'selectButton' : 'buttonChoice'} htmlFor="long_visor">{traduction.VisorChoiceLong}</label>
				<input className="inputVisor" type="radio" name="visor" id="peak_visor" value="peak_visor" />
				<label className={standardValue.Visor_type === 'peak_visor' ? 'selectButton' : 'buttonChoice'} htmlFor="peak_visor">{traduction.VisorChoicePeak}</label>

			</> 
			}
		</form>
	)
}
export default VisorTypeChoice;