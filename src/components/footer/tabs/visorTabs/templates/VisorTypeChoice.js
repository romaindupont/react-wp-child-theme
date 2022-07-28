const VisorTypeChoice = () => {
	return (
		<div class="inputVisorChoice">
			<input class="inputVisor" type="radio" name="visor" id="short_visor" value="short_visor"/>
			<label class="buttonChoice" for="short_visor">short</label>
			<input class="inputVisor" type="radio" name="visor" id="long_visor" value="long_visor"/>
			<label class="buttonChoice" for="long_visor">long</label>
			<input class="inputVisor" type="radio" name="visor" id="peak_visor" value="peak_visor"/>
			<label class="buttonChoice" for="peak_visor">peak</label>
		</div>
	)
}
export default VisorTypeChoice;