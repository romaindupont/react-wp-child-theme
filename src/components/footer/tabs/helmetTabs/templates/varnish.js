import VarnishGlossy from "../../svg/Varnish/VarnishGlossy";
import VarnishMat from "../../svg/Varnish/VarnishMat";

const Varnish = () => {
	return (
		<div className="varnishList">
			<div className="allScrew">
				<VarnishGlossy />
				<span className="textAction">Glossy</span>
			</div>
			<div className="allScrew">
				<VarnishMat />
				<span className="textAction">Mat</span>
			</div>
		</div>
	)
}

export default Varnish;