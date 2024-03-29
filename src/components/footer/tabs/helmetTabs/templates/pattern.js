import PatternShellBand from "../../svg/PatternShell/PatternShellBand";
import PatternShellChecker from "../../svg/PatternShell/PatternShellChecker";
import PatternShellChester from "../../svg/PatternShell/PatternShellChester";
import PatternShellContour from "../../svg/PatternShell/PatternShellContour";
import PatternShellDots from "../../svg/PatternShell/PatternShellDots";
import PatternShellDual from "../../svg/PatternShell/PatternShellDual";
import PatternShellExtend from "../../svg/PatternShell/PatternShellExtend";
import PatternShellGradient from "../../svg/PatternShell/PatternShellGradient";
import PatternShellHalf from "../../svg/PatternShell/PatternShellHalf";
import PatternShellHorizontal from "../../svg/PatternShell/PatternShellHorizontal";
import PatternShellOutline from "../../svg/PatternShell/PatternShellOutline";
import PatternShellParabol from "../../svg/PatternShell/PatternShellParabol";
import PatternShellPlain from "../../svg/PatternShell/PatternShellPlain";
import PatternShellStars from "../../svg/PatternShell/PatternShellStars";
import PatternShellVertical from "../../svg/PatternShell/PatternShellVertical";
import { useHorizontalScroll } from "../../../../../../utils/useHorizontalScroll";

const Pattern = ({setStandardValue, standardValue, traduction, mySku, setMySku}) => {
	const scrollRef = useHorizontalScroll();
	const scrollEffect = (e) => {
		let ratio = 3.5;
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
		<div className="patternList" onScroll={scrollEffect} ref={scrollRef}>
				<div className={standardValue.Helmet_design === '' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_design:''}) & setMySku({...mySku, position5: 'xx'})}>
					<PatternShellPlain />
				<span className="textAction">{traduction.Plain}</span>
			</div>
			<div className={standardValue.Helmet_design === 'band' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_design:'band'}) & setMySku({...mySku, position5: 'hb'})}>
				<PatternShellBand />
				<span className="textAction">{traduction.Band}</span>
			</div>
			<div className={standardValue.Helmet_design === 'dual' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_design:'dual'}) & setMySku({...mySku, position5: 'hd'})}>
				<PatternShellDual />
				<span className="textAction">{traduction.Dual}</span>
			</div>
			<div className={standardValue.Helmet_design === 'half' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_design:'half'}) & setMySku({...mySku, position5: 'hh'})}>
				<PatternShellHalf />
				<span className="textAction">{traduction.Half}</span>
			</div>
			<div className={standardValue.Helmet_design === 'horizontal' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_design:'horizontal'}) & setMySku({...mySku, position5: 'hz'})}>
				<PatternShellHorizontal />
				<span className="textAction">{traduction.Horizontal}</span>
			</div>
			<div className={standardValue.Helmet_design === 'vertical' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_design:'vertical'}) & setMySku({...mySku, position5: 'hv'})}>
				<PatternShellVertical />
				<span className="textAction">{traduction.Vertical}</span>
			</div>
			<div className={standardValue.Helmet_design === 'contour' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_design:'contour'}) & setMySku({...mySku, position5: 'hc'})}>
				<PatternShellContour />
				<span className="textAction">{traduction.Around}</span>
			</div>
			<div className={standardValue.Helmet_design === 'outline' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_design:'outline'}) & setMySku({...mySku, position5: 'ho'})}>
				<PatternShellOutline />
				<span className="textAction">{traduction.Outline}</span>
			</div>
			<div className={standardValue.Helmet_design === 'extend' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_design:'extend'}) & setMySku({...mySku, position5: 'he'})}>
				<PatternShellExtend />
				<span className="textAction">{traduction.Extend}</span>
			</div>
			<div className={standardValue.Helmet_design === 'parabol' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_design:'parabol'}) & setMySku({...mySku, position5: 'hp'})}>
				<PatternShellParabol />
				<span className="textAction">{traduction.Parabol}</span>
			</div>
			<div className={standardValue.Helmet_design === 'gradient' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_design:'gradient'}) & setMySku({...mySku, position5: 'hg'})}>
				<PatternShellGradient />
				<span className="textAction">{traduction.Gradient}</span>
			</div>
			<div className={standardValue.Helmet_design === 'dots' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_design:'dots'}) & setMySku({...mySku, position5: 'ht'})}>
				<PatternShellDots />
				<span className="textAction">{traduction.Dots}</span>
			</div>
			<div className={standardValue.Helmet_design === 'star' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_design:'star'}) & setMySku({...mySku, position5: 'hs'})}>
				<PatternShellStars />
				<span className="textAction">{traduction.Stars}</span>
			</div>
			<div className={standardValue.Helmet_design === 'chester' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_design:'chester'}) & setMySku({...mySku, position5: 'hr'})}>
				<PatternShellChester />
				<span className="textAction">{traduction.Chester}</span>
			</div>
			<div className={standardValue.Helmet_design === 'checker' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Helmet_design:'checker'}) & setMySku({...mySku, position5: 'hk'})}>
				<PatternShellChecker />
				<span className="textAction">{traduction.Checker}</span>
			</div>
		</div>
	)
}

export default Pattern;