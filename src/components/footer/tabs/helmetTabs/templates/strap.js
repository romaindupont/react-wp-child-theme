import { useHorizontalScroll } from "../../../../../../utils/useHorizontalScroll";
import StrapBlack from "../../svg/Strap/StrapBlack";
import StrapBlue from "../../svg/Strap/StrapBlue";
import StrapBrown from "../../svg/Strap/StrapBrown";
import StrapCream from "../../svg/Strap/StrapCream";
import StrapGrey from "../../svg/Strap/StrapGrey";
import StrapRed from "../../svg/Strap/StrapRed";

const Strap = ({setStandardValue,	standardValue, traduction }) => {
	const scrollRef = useHorizontalScroll();
	const scrollEffect = (e) => {
		let ratio = 3;
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
		<div className="colorList" onScroll={scrollEffect} ref={scrollRef}>
			<div className={standardValue.Strap_color === 'black' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Strap_color:'black'})}><StrapBlack /><span className="textAction">{traduction.Black}</span></div>
			<div className={standardValue.Strap_color === 'blue' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Strap_color:'blue'})}><StrapBlue /><span className="textAction">{traduction.Blue}</span></div>
			<div className={standardValue.Strap_color === 'grey' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Strap_color:'grey'})}><StrapGrey /><span className="textAction">{traduction.Grey}</span></div>
			<div className={standardValue.Strap_color === 'brown' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Strap_color:'brown'})}><StrapBrown /><span className="textAction">{traduction.Brown}</span></div>
			<div className={standardValue.Strap_color === 'cream' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Strap_color:'cream'})}><StrapCream /><span className="textAction">{traduction.Cream}</span></div>
			<div className={standardValue.Strap_color === 'red' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, Strap_color:'red'})}><StrapRed /><span className="textAction">{traduction.Red}</span></div>
		</div>
	)
}

export default Strap;