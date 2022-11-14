import VarnishGlossy from "../../svg/Varnish/VarnishGlossy";
import VarnishMat from "../../svg/Varnish/VarnishMat";

const Varnish = ({setVarnishChin, varnishChin, traduction}) => {
	return (
		<div className="varnishList">
			<div className={varnishChin ? 'Select' : 'allScrew'} onClick={()=>setVarnishChin(true)}>
				<VarnishGlossy />
				<span className="textAction">{traduction.Glossy}</span>
			</div>
			<div className={varnishChin ? 'allScrew' : 'Select'} onClick={()=>setVarnishChin(false)}>
				<VarnishMat />
				<span className="textAction">{traduction.Mat}</span>
			</div>
		</div>
	)
}

export default Varnish;