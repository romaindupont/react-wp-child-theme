import ZipperLeather from '../../svg/Zipper/ZipperLeather';
import ZipperNylon from '../../svg/Zipper/ZipperNylon';

const Zippers = ({setStandardValue, standardValue}) => {
	return (
		<div className="varnishList">
			<div className={standardValue.flap === 'nylon' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, flap: 'nylon'})}>
				<ZipperNylon />
				<span className="textAction">Nylon</span>
			</div>
			<div className={standardValue.flap === 'leather' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, flap: 'leather'})}>
				<ZipperLeather />
				<span className="textAction">Leather</span>
			</div>
		</div>
	)
}

export default Zippers;