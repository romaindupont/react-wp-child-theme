import VarnishGlossy from "../../svg/Varnish/VarnishGlossy";
import VarnishMat from "../../svg/Varnish/VarnishMat";

const Varnish = ({setVarnishChin}) => {
	return (
		<div className="varnishList">
			<div className="allScrew" onClick={()=>setVarnishChin(true)}>
				<VarnishGlossy />
				<span className="textAction">Glossy</span>
			</div>
			<div className="allScrew" onClick={()=>setVarnishChin(false)}>
				<VarnishMat />
				<span className="textAction">Mat</span>
			</div>
		</div>
	)
}

export default Varnish;