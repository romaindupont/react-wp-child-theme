import { useHorizontalScroll } from "../../../../../../utils/useHorizontalScroll";
import EarmuffLeatherBlack from "../../svg/Interior/earmuff/earmuffLeatherBlack";
import EarmuffLeatherBlue from "../../svg/Interior/earmuff/earmuffLeatherBlue";
import EarmuffLeatherBrown from "../../svg/Interior/earmuff/earmuffLeatherBrown";
import EarmuffLeatherRed from "../../svg/Interior/earmuff/earmuffLeatherRed";
import EarmuffRubberBlack from "../../svg/Interior/earmuff/earmuffRubberBlack";
import InteriorFabricBeige from "../../svg/Interior/InteriorFabricBeige";
import InteriorLeatherBlack from "../../svg/Interior/InteriorLeatherBlack";
import InteriorLeatherBrown from "../../svg/Interior/InteriorLeatherBrown";
import InteriorLeatherRed from "../../svg/Interior/InteriorLeatherRed";
import InteriorSuedeBlack from "../../svg/Interior/InteriorSuedeBlack";
import InteriorSuedeBlue from "../../svg/Interior/InteriorSuedeBlue";
import matchEarmuffToHelmet from '../../../../body/Helmet/matchEarmuffToHelmet';

const Earmuff = ({setEarmuffHelmet, earmuffHelmet, traduction, earmuffInput, setEarmuffInput, setMySku, mySku, standardValue}) => {
	const scrollRef = useHorizontalScroll();
	const scrollEffect = (e) => {
		let ratio = 2.5;
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
		<div className="aerationList">
			<div className="aerationDisplay">
				<span className={earmuffHelmet ? 'buttonChoiceEarmuff' : 'selectButtonEarmuff'} onClick={() => setEarmuffHelmet(false)}>{traduction.Hide}</span>
				<span className={earmuffHelmet ? 'selectButtonEarmuff' : 'buttonChoiceEarmuff'} onClick={() => setEarmuffHelmet(true)}>{traduction.Show}</span>
				
			</div>
		</div>
		<div className={earmuffHelmet ? "openColorList" : "openColorClose"}>
		<div className="colorListType">
			<span className={earmuffInput.earmuffSide === 'match' ? 'selectButtonEarmuff' : 'buttonChoiceEarmuff'} onClick={()=>matchEarmuffToHelmet(standardValue, setEarmuffInput, earmuffInput)}>{traduction.MatchAllHelmet}</span>	
			<span className={earmuffInput.earmuffSide === 'inside' ? 'selectButtonEarmuff' : 'buttonChoiceEarmuff'} onClick={() => setEarmuffInput({...earmuffInput, earmuffSide:'inside'})}>{traduction.Inside}</span>
			<span className={earmuffInput.earmuffSide === 'outside' ? 'selectButtonEarmuff' : 'buttonChoiceEarmuff'} onClick={() => setEarmuffInput({...earmuffInput, earmuffSide:'outside'})}>{traduction.Outside}</span>
		</div>
		<br/>
		
		{earmuffInput.earmuffSide === 'inside' ? <div className="colorList" onScroll={scrollEffect} ref={scrollRef}>
			<div className={earmuffInput.earmuffInsideStyle === 'suede|blue' ? 'Select' : 'allScrew'} onClick={() => setEarmuffInput({...earmuffInput, earmuffInsideStyle:'suede|blue'}) & setMySku({...mySku, position8: 'sb'})}>
				<InteriorSuedeBlue />
				<span className="textAction">{traduction.SuedeBlue}</span>
			</div>
			<div className={earmuffInput.earmuffInsideStyle === 'suede|black' ? 'Select' : 'allScrew'} onClick={() => setEarmuffInput({...earmuffInput, earmuffInsideStyle:'suede|black'}) & setMySku({...mySku, position8: 'sb'})}>
				<InteriorSuedeBlack />
				<span className="textAction">{traduction.SuedeBlack}</span>
			</div>
			<div className={earmuffInput.earmuffInsideStyle === 'suede|beige' ? 'Select' : 'allScrew'} onClick={() => setEarmuffInput({...earmuffInput, earmuffInsideStyle:'suede|beige'}) & setMySku({...mySku, position8: 'sb'})}>
				<InteriorFabricBeige />
				<span className="textAction">{traduction.FabricBeige}</span>
			</div>
			<div className={earmuffInput.earmuffInsideStyle === 'leather|brown' ? 'Select' : 'allScrew'} onClick={() => setEarmuffInput({...earmuffInput, earmuffInsideStyle:'leather|brown'}) & setMySku({...mySku, position8: 'lb'})}>
				<InteriorLeatherBrown />
				<span className="textAction">{traduction.LeatherBrown}</span>
			</div>
			<div className={earmuffInput.earmuffInsideStyle === 'leather|black' ? 'Select' : 'allScrew'} onClick={() => setEarmuffInput({...earmuffInput, earmuffInsideStyle:'leather|black'}) & setMySku({...mySku, position8: 'lb'})}>
				<InteriorLeatherBlack />
				<span className="textAction">{traduction.LeatherBlack}</span>
			</div>
			<div className={earmuffInput.earmuffInsideStyle === 'leather|red' ? 'Select' : 'allScrew'} onClick={() => setEarmuffInput({...earmuffInput, earmuffInsideStyle:'leather|red'}) & setMySku({...mySku, position8: 'lb'})}>
				<InteriorLeatherRed />
				<span className="textAction">{traduction.LeatherRed}</span>
			</div>
			</div>
			: earmuffInput.earmuffSide === 'outside' ? 
			<div className="colorList colorListEarmuff">
			<div className={earmuffInput.earmuffOutsideStyle === 'rubber|black' ? 'Select' : 'allScrew'} onClick={() => setEarmuffInput({...earmuffInput, earmuffOutsideStyle:'rubber|black'}) & setMySku({...mySku, position16: 'xxx'})}>
				<EarmuffRubberBlack />
				<span className="textAction">{traduction.BlackRubber}</span>
			</div>
			<div className={earmuffInput.earmuffOutsideStyle === 'leather|blue' ? 'Select' : 'allScrew'} onClick={() => setEarmuffInput({...earmuffInput, earmuffOutsideStyle:'leather|blue'}) & setMySku({...mySku, position16: 'xlb'})}>
				<EarmuffLeatherBlue />
				<span className="textAction">{traduction.BlueRubber}</span>
			</div>
			<div className={earmuffInput.earmuffOutsideStyle === 'leather|brown' ? 'Select' : 'allScrew'} onClick={() => setEarmuffInput({...earmuffInput, earmuffOutsideStyle:'leather|brown'}) & setMySku({...mySku, position16: 'xlb'})}>
				<EarmuffLeatherBrown />
				<span className="textAction">{traduction.LeatherBrown}</span>
			</div>
			<div className={earmuffInput.earmuffOutsideStyle === 'leather|black' ? 'Select' : 'allScrew'} onClick={() => setEarmuffInput({...earmuffInput, earmuffOutsideStyle:'leather|black'}) & setMySku({...mySku, position16: 'xlb'})}>
				<EarmuffLeatherBlack />
				<span className="textAction">{traduction.LeatherBlack}</span>
			</div>
			<div className={earmuffInput.earmuffOutsideStyle === 'leather|red' ? 'Select' : 'allScrew'} onClick={() => setEarmuffInput({...earmuffInput, earmuffOutsideStyle:'leather|red'}) & setMySku({...mySku, position16: 'xlb'})}>
				<EarmuffLeatherRed />
				<span className="textAction">{traduction.LeatherRed}</span>
			</div>
			</div>
			:<></>
		}
		</div>
		</>
		)
}

export default Earmuff;