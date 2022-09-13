import Right from "../../svg/Right";
import Wrong from "../../svg/Wrong";


const Engraving = ({backEngraving, setBackEngraving}) => {
	return (
		<div className="numberChoice">
			{
				!backEngraving ? 
					<button className="buttonAdd" onClick={()=>setBackEngraving(true)}>{`\u002B`} Add</button> :
					<button className="buttonAdd" onClick={()=>setBackEngraving(false)}>{`\u002D`} Delete</button>
			}
			<div className={!backEngraving ? "numberWindows" : "openNumberWindows" }>
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