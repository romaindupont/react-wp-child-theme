import VarnishGlossy from "../../svg/Varnish/VarnishGlossy";
import VarnishMat from "../../svg/Varnish/VarnishMat";

const Varnish = ({setVarnishHelmet, varnishHelmet, traduction}) => {
	return (
		<div className="varnishList">
			<div className={varnishHelmet ? 'Select' : 'allScrew'} onClick={() => setVarnishHelmet(true)}>
				<VarnishGlossy />
				<span className="textAction">{traduction.Glossy}</span>
			</div>
			<div className={varnishHelmet ? 'allScrew' : 'Select'} onClick={() => setVarnishHelmet(false)}>
				<VarnishMat />
				<span className="textAction">{traduction.Mat}</span>
			</div>
		</div>
	)
}

export default Varnish;