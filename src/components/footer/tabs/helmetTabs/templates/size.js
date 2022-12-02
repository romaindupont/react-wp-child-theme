const Size = ({setStandardValue,	standardValue}) => {
	return (
		<>
			<div className="sizeChoice">
				<span className={standardValue.Rear_text_size === 'S' ? 'selectButton' : 'buttonChoice'} onClick={() => setStandardValue({...standardValue, Rear_text_size:'S'})}>XS-S</span>
				<span className={standardValue.Rear_text_size === 'M' ? 'selectButton' : 'buttonChoice'} onClick={() => setStandardValue({...standardValue, Rear_text_size:'M'})}>M-L</span>
				<span className={standardValue.Rear_text_size === 'XL' ? 'selectButton' : 'buttonChoice'} onClick={() => setStandardValue({...standardValue, Rear_text_size:'XL'})}>XL-XXL</span>
			</div>
			<div className="certifChoice">
				<span className={standardValue.Rear_text_certification === 'ECE' ? 'selectButton' : 'buttonChoice'} onClick={() => setStandardValue({...standardValue, Rear_text_certification:'ECE'})}>ECE R22-05</span>
				<span className={standardValue.Rear_text_certification === 'DOT' ? 'selectButton' : 'buttonChoice'} onClick={() => setStandardValue({...standardValue, Rear_text_certification:'DOT'})}>DOT - CCC</span>
			</div>
		</>
	)
}

export default Size;