import Right from "../../svg/Right";
import Wrong from "../../svg/Wrong";


const Engraving = () => {
	return (
		<div className="numberChoice">
			<button className="buttonAdd">&plus;Add</button>
			<div className="numberWindows">
				<p className="infosNumber">Your Text</p>
				<div className="chooseWindows">
					<div className="chooseWindows_input">
						<input type="text" name="textSelection" id="textSelection"/>
						<div className="selectButtonNumber">
							<Right />
							<Wrong />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Engraving;