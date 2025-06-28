import ZipperLeather from '../../svg/Zipper/ZipperLeather';
import ZipperNylon from '../../svg/Zipper/ZipperNylon';

const Zippers = ({setStandardValue, standardValue, traduction, mySku, setMySku}) => {
	return (
		<div className="varnishList">
			<div className={standardValue.flap === 'nylon' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, flap: 'nylon'}) & setMySku({...mySku, position8: 'xx'})}>
				<ZipperNylon />
				<span className="textAction">{traduction.Nylon}</span>
			</div>
			<div className={standardValue.flap === 'leather' ? 'Select' : 'allScrew'} onClick={() => setStandardValue({...standardValue, flap: 'leather'}) & setMySku({...mySku, position8: 'pl'})}>
				<ZipperLeather />
				<span className="textAction">{traduction.Leather}</span>
			</div>
		</div>
	)
}

export default Zippers;