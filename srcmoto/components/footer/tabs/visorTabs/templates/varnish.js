import VarnishGlossy from "../../svg/Varnish/VarnishGlossy";
import VarnishMat from "../../svg/Varnish/VarnishMat";

const Varnish = ({setVarnishVisor, varnishVisor, traduction}) => {
	return (
		<div className="varnishList">
			<div className={varnishVisor ? 'Select' : 'allScrew'} onClick={()=>setVarnishVisor(true)}>
				<VarnishGlossy />
				<span className="textAction">{traduction.Glossy}</span>
			</div>
			<div className={varnishVisor ? 'allScrew' : 'Select'} onClick={()=>setVarnishVisor(false)}>
				<VarnishMat />
				<span className="textAction">{traduction.Mat}</span>
			</div>
		</div>
	)
}

export default Varnish;