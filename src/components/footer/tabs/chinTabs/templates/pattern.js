
import { useHorizontalScroll } from "../../../../../../utils/useHorizontalScroll";
import PatternChinBand from "../../svg/PatternChin/PatternChinBand";
import PatternChinChecker from "../../svg/PatternChin/PatternChinChecker";
import PatternChinContour from "../../svg/PatternChin/PatternChinContour";
import PatternChinDots from "../../svg/PatternChin/PatternChinDots";
import PatternChinDual from "../../svg/PatternChin/PatternChinDual";
import PatternChinExtend from "../../svg/PatternChin/PatternChinExtend";
import PatternChinHalf from "../../svg/PatternChin/PatternChinHalf";
import PatternChinOutline from "../../svg/PatternChin/PatternChinOutline";
import PatternChinParabol from "../../svg/PatternChin/PatternChinParabol";
import PatternChinPlain from "../../svg/PatternChin/PatternChinPlain";
import PatternChinStars from "../../svg/PatternChin/PatternChinStars";

const Pattern = () => {
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
		<div className="patternList" onScroll={scrollEffect} ref={scrollRef} style={{ overflow: "auto" }}>
			<div className="allScrew">
				<PatternChinBand />
				<span className="textAction">Band</span>
			</div>
			<div className="allScrew">
				<PatternChinChecker />
				<span className="textAction">Checker</span>
			</div>
			<div className="allScrew">
				<PatternChinContour />
				<span className="textAction">Contour</span>
			</div>
			<div className="allScrew">
				<PatternChinDots />
				<span className="textAction">Dots</span>
			</div>
			<div className="allScrew">
				<PatternChinDual />
				<span className="textAction">Dual</span>
			</div>
			<div className="allScrew">
				<PatternChinExtend />
				<span className="textAction">Extend</span>
			</div>
			<div className="allScrew">
				<PatternChinHalf />
				<span className="textAction">Half</span>
			</div>
			<div className="allScrew">
				<PatternChinOutline />
				<span className="textAction">Outline</span>
			</div>
			<div className="allScrew">
				<PatternChinParabol />
				<span className="textAction">Parabol</span>
			</div>
			<div className="allScrew">
				<PatternChinPlain />
				<span className="textAction">Plain</span>
			</div>
			<div className="allScrew">
				<PatternChinStars />
				<span className="textAction">Stars</span>
			</div>
		</div>
	)
}

export default Pattern;