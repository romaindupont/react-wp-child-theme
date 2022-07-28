import Right from "../../svg/Right";
import Wrong from "../../svg/Wrong";
import ClassicNumber from "../../svg/Number/ClassicNumber";
import DirtNumber from "../../svg/Number/DirtNumber";
import PixelNumber from "../../svg/Number/PixelNumber";
import RacingNumber from "../../svg/Number/RacingNumber";
const BackNumber = () => {
	return (
		<div className="numberChoice">
			<button className="buttonAdd">&plus;Add</button>
			<div className="numberWindows">
				<p className="infosNumber">Choose your style and your number</p>
				<div className="chooseWindows">
					<div className="chooseWindows_input">
						<input type="number" name="numberSelection" id="numberSelection" />
						<div className="selectButtonNumber">
							<Right />
							<Wrong />
						</div>
					</div>
						<div className="chooseStyleNumber">
							<div className="allScrew">
								<ClassicNumber />
								<span className="textAction">Classic</span>
							</div>
							<div className="allScrew">
								<DirtNumber />
								<span className="textAction">Dirt</span>
							</div>
							<div className="allScrew">
								<PixelNumber />
								<span className="textAction">Pixel</span>
							</div>
							<div className="allScrew">
								<RacingNumber />
								<span className="textAction">Racing</span>
							</div>
						</div>
					</div>
				
			</div>
		</div>
	)
}

export default BackNumber;