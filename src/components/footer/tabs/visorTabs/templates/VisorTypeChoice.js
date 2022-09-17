const VisorTypeChoice = ({setTypeChoice, setStandardValue,	standardValue}) => {
	const clickChoice = (e) => {
		setTypeChoice(e.target.value);
		setStandardValue({...standardValue, Visor_type: e.target.value})
		console.log(standardValue)
	}
	return (
		<form className="inputVisorChoice" onChange={clickChoice}>
			<input className="inputVisor" type="radio" name="visor" id="short_visor" value="short_visor" />
			<label className="buttonChoice" htmlFor="short_visor">short</label>
			<input className="inputVisor" type="radio" name="visor" id="long_visor" value="long_visor" />
			<label className="buttonChoice" htmlFor="long_visor">long</label>
			<input className="inputVisor" type="radio" name="visor" id="peak_visor" value="peak_visor" />
			<label className="buttonChoice" htmlFor="peak_visor">peak</label>
		</form>
	)
}
export default VisorTypeChoice;