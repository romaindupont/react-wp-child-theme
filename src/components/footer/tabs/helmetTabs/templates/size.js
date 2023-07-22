const Size = ({setStandardValue,	standardValue, traduction}) => {
	return (
		<>
		<div className="titleSize">{traduction.ChooseSize}</div>
			<div className="sizeChoice">
				<span className={standardValue.Rear_text_size === 'S' ? 'selectButton' : 'buttonChoice'} onClick={() => setStandardValue({...standardValue, Rear_text_size:'S'})}>XS-S</span>
				<span className={standardValue.Rear_text_size === 'M' ? 'selectButton' : 'buttonChoice'} onClick={() => setStandardValue({...standardValue, Rear_text_size:'M'})}>M-L</span>
				<span className={standardValue.Rear_text_size === 'XL' ? 'selectButton' : 'buttonChoice'} onClick={() => setStandardValue({...standardValue, Rear_text_size:'XL'})}>XL-XXL</span>
			</div>
		</>
	)
}

export default Size;