const Size = ({setStandardValue,	standardValue, traduction}) => {
	return (
		<>
		<div className="titleSize">{traduction.ChooseSize}</div>
			<div className="sizeChoice">
				<span className={standardValue.Rear_text_size === 'XS' ? 'selectButtonEarmuff' : 'buttonChoiceEarmuff'} onClick={() => setStandardValue({...standardValue, Rear_text_size:'XS'})}>XS</span>
				<span className={standardValue.Rear_text_size === 'S' ? 'selectButtonEarmuff' : 'buttonChoiceEarmuff'} onClick={() => setStandardValue({...standardValue, Rear_text_size:'S'})}>S</span>
				<span className={standardValue.Rear_text_size === 'ML' ? 'selectButtonEarmuff' : 'buttonChoiceEarmuff'} onClick={() => setStandardValue({...standardValue, Rear_text_size:'ML'})}>M-L</span>
				<span className={standardValue.Rear_text_size === 'XL' ? 'selectButtonEarmuff' : 'buttonChoiceEarmuff'} onClick={() => setStandardValue({...standardValue, Rear_text_size:'XL'})}>XL</span>
			</div>
		</>
	)
}

export default Size;