import LogoBoxedMultiply from "../../svg/Logo/LogoBoxedMultiply";
import LogoBoxedPlus from "../../svg/Logo/LogoBoxedPlus";
import LogoBoxedText from "../../svg/Logo/LogoBoxedText";
import LogoCircle from "../../svg/Logo/LogoCircle";
import LogoHeart from "../../svg/Logo/LogoHeart";
import LogoMultiply from "../../svg/Logo/LogoMultiply";
import LogoPlus from "../../svg/Logo/LogoPlus";
import LogoSquare from "../../svg/Logo/LogoSquare";
import LogoText from "../../svg/Logo/LogoText";
import LogoV from "../../svg/Logo/LogoV";
import LogoVText from "../../svg/Logo/LogoVText";

const Logo = () => {
	return (
		<>
		<div className="sizeChoice">
			<span className="buttonChoice">None</span>
			<span className="buttonChoice">White</span>
			<span className="buttonChoice">Black</span>
		</div>
		<div className="patternList">
			<div className="allScrew">
				<LogoBoxedMultiply />
				<span className="textAction">Boxed-Multiply</span>
			</div>
			<div className="allScrew">
				<LogoBoxedPlus />
				<span className="textAction">Boxed-Plus</span>
			</div>
			<div className="allScrew">
				<LogoBoxedText />
				<span className="textAction">Boxed-text</span>
			</div>
			<div className="allScrew">
				<LogoCircle />
				<span className="textAction">Circle</span>
			</div>
			<div className="allScrew">
				<LogoHeart />
				<span className="textAction">Heart</span>
			</div>
			<div className="allScrew">
				<LogoMultiply />
				<span className="textAction">Multiply</span>
			</div>
			<div className="allScrew">
				<LogoPlus />
				<span className="textAction">Plus</span>
			</div>
			<div className="allScrew">
				<LogoSquare />
				<span className="textAction">Square</span>
			</div>
			<div className="allScrew">
				<LogoText />
				<span className="textAction">Text</span>
			</div>
			<div className="allScrew">
				<LogoV />
				<span className="textAction">V</span>
			</div>
			<div className="allScrew">
				<LogoVText />
				<span className="textAction">V-text</span>
			</div>
		</div>
		</>

	)
}

export default Logo;