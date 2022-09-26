const { useState } = wp.element;
import ClassicNumber from "../../svg/Number/ClassicNumber";
import DirtNumber from "../../svg/Number/DirtNumber";
import PixelNumber from "../../svg/Number/PixelNumber";
import RacingNumber from "../../svg/Number/RacingNumber";
import Right from "../../svg/Right";
import Wrong from "../../svg/Wrong";



const LeftNumber = ({leftNumberWindow, setLeftNumberWindow, fileNames}) => {
	const [ openWindow, setOpenWindow ] = useState(false);
	return (
		<div className="numberChoice">
			{
				!leftNumberWindow ? 
					<button className="buttonAdd" onClick={()=>setLeftNumberWindow(true) & setOpenWindow(true)}>{`\u002B`} Add</button> :
					<button className="buttonAdd" onClick={()=>setLeftNumberWindow(false) & setOpenWindow(false)}>{`\u002D`} Delete</button>
			}
			<div className={!openWindow ? "numberWindows" : "openNumberWindows" }>
				<p className="infosNumber">Choose your style and your number</p>
				<div className="chooseWindows">
					<div className="chooseWindows_input">
						<input type="number" name="numberSelection" id="numberSelection"/>
						<div className="selectButtonNumber">
							<Right windowClose={setOpenWindow} setNumberWindow={setLeftNumberWindow} fileNames={fileNames}/>
							<Wrong windowClose={setOpenWindow} setNumberWindow={setLeftNumberWindow} />
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

export default LeftNumber;