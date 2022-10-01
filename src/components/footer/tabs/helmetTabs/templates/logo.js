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
import { useHorizontalScroll } from "../../../../../../utils/useHorizontalScroll";

const Logo = ({setStandardValue, standardValue, traduction}) => {
	const scrollRef = useHorizontalScroll();
	const scrollEffect = (e) => {
		let ratio = 4.5;
		if(e.target.getBoundingClientRect().width < 900) {
			let calcul = e.target.clientWidth/ratio - e.target.scrollLeft;
			if (calcul < `-${e.target.clientWidth/5}`) {
				e.target.style.transform = `translate3d(-${calcul}, 0px, 0px)`; 
			}
			else {
				e.target.style.transform = `translate3d(${calcul}px, 0px, 0px)`; 
			}
		}
	}
	return (
		<>
		<div className="sizeChoice">
			<span className={standardValue.Logo_color === 'none' ? 'selectButton' : 'buttonChoice'} onClick={() => setStandardValue({...standardValue, Logo_color:'none'})}>{traduction.None}</span>
			<span className={standardValue.Logo_color === 'white' ? 'selectButton' : 'buttonChoice'} onClick={() => setStandardValue({...standardValue, Logo_color:'white'})}>{traduction.White}</span>
			<span className={standardValue.Logo_color === 'black' ? 'selectButton' : 'buttonChoice'} onClick={() => setStandardValue({...standardValue, Logo_color:'black'})}>{traduction.Black}</span>
		</div>
		<div className="patternList" onScroll={scrollEffect} ref={scrollRef}>
			<div className={standardValue.Logo === 'Boxed_Multiply' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Logo:'Boxed_Multiply'})}>
				<LogoBoxedMultiply />
				<span className="textAction">Boxed-Multiply</span>
			</div>
			<div className={standardValue.Logo === 'Boxed_Plus' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Logo:'Boxed_Plus'})}>
				<LogoBoxedPlus />
				<span className="textAction">Boxed-Plus</span>
			</div>
			<div className={standardValue.Logo === 'Boxed_Text' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Logo:'Boxed_Text'})}>
				<LogoBoxedText />
				<span className="textAction">Boxed-text</span>
			</div>
			<div className={standardValue.Logo === 'Circle' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Logo:'Circle'})}>
				<LogoCircle />
				<span className="textAction">Circle</span>
			</div>
			<div className={standardValue.Logo === 'Heart' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Logo:'Heart'})}>
				<LogoHeart />
				<span className="textAction">Heart</span>
			</div>
			<div className={standardValue.Logo === 'Multiply' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Logo:'Multiply'})}>
				<LogoMultiply />
				<span className="textAction">Multiply</span>
			</div>
			<div className={standardValue.Logo === 'Plus' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Logo:'Plus'})}>
				<LogoPlus />
				<span className="textAction">Plus</span>
			</div>
			<div className={standardValue.Logo === 'Square' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Logo:'Square'})}>
				<LogoSquare />
				<span className="textAction">Square</span>
			</div>
			<div className={standardValue.Logo === 'Text' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Logo:'Text'})}>
				<LogoText />
				<span className="textAction">Text</span>
			</div>
			<div className={standardValue.Logo === 'V' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Logo:'V'})}>
				<LogoV />
				<span className="textAction">V</span>
			</div>
			<div className={standardValue.Logo === 'V_Text' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Logo:'V_Text'})}>
				<LogoVText />
				<span className="textAction">V-text</span>
			</div>
		</div>
		</>

	)
}

export default Logo;