const RearLogo = ({setStandardValue, standardValue, traduction, mySku, setMySku}) => {
	return (
		<div className="sizeChoice">
			<span className={standardValue.Back_logo === 'none' ? 'selectButtonEarmuff' : 'buttonChoiceEarmuff'} onClick={() => setStandardValue({...standardValue, Back_logo:'none'}) & setMySku({...mySku, position19: 'xx'})}>{traduction.None}</span>
			<span className={standardValue.Back_logo === 'white' ? 'selectButtonEarmuff' : 'buttonChoiceEarmuff'} onClick={() => setStandardValue({...standardValue, Back_logo:'white'}) & setMySku({...mySku, position19: 'xx'})}>{traduction.White}</span>
			<span className={standardValue.Back_logo === 'black' ? 'selectButtonEarmuff' : 'buttonChoiceEarmuff'} onClick={() => setStandardValue({...standardValue, Back_logo:'black'}) & setMySku({...mySku, position19: 'xx'})}>{traduction.Black}</span>
		</div>
	)
}

export default RearLogo;