import ZipperLeather from '../../svg/Zipper/ZipperLeather';
import ZipperNylon from '../../svg/Zipper/ZipperNylon';

const Zippers = ({setStandardValue, standardValue}) => {
	return (
		<div className="varnishList">
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, flap: 'nylon'})}>
				<ZipperNylon />
				<span className="textAction">Nylon</span>
			</div>
			<div className="allScrew" onClick={()=>setStandardValue({...standardValue, flap: 'leather'})}>
				<ZipperLeather />
				<span className="textAction">Leather</span>
			</div>
		</div>
	)
}

export default Zippers;