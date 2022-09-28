import VarnishGlossy from "../../svg/Varnish/VarnishGlossy";
import VarnishMat from "../../svg/Varnish/VarnishMat";

const Varnish = ({setVarnishHelmet, varnishHelmet}) => {
	return (
		<div className="varnishList">
			<div className={varnishHelmet ? 'Select' : 'allScrew'} onClick={() => setVarnishHelmet(true)}>
				<VarnishGlossy />
				<span className="textAction">Glossy</span>
			</div>
			<div className={varnishHelmet ? 'allScrew' : 'Select'} onClick={() => setVarnishHelmet(false)}>
				<VarnishMat />
				<span className="textAction">Mat</span>
			</div>
		</div>
	)
}

export default Varnish;