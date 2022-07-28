import ZipperLeather from '../../svg/Zipper/ZipperLeather';
import ZipperNylon from '../../svg/Zipper/ZipperNylon';

const Zippers = () => {
	return (
		<div className="varnishList">
			<div className="allScrew">
				<ZipperNylon />
				<span className="textAction">Nylon</span>
			</div>
			<div className="allScrew">
				<ZipperLeather />
				<span className="textAction">Leather</span>
			</div>
		</div>
	)
}

export default Zippers;