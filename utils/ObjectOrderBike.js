
export function MakeAnObjectToOrderBike(
		standardValue,
		aerationHelmet,
		varnishHelmet,
		backNumberWindow,
		backNumberInput,
		rightNumberWindow,
		rightNumberInput,
		leftNumberWindow,
		leftNumberInput,
		backEngraving,
		engravingInput,
		screwPosition,
		withChin,
		aerationChin,
		varnishChin,
		withVisor,
		varnishVisor,
		earmuffInput
	) {
	let configuration;
	return configuration = `{
		"Helmet": {
			"Helmet_aeration": "${aerationHelmet}",
			"Helmet_first_color": "${standardValue.Helmet_color_type} | ${standardValue.Helmet_color}",
			"Helmet_design": "${standardValue.Helmet_design}",
			"Helmet_design_type": "${standardValue.Helmet_design_type} | ${standardValue.Helmet_design_color}",
			"Varnish": "${varnishHelmet}",
			"Trim": "${standardValue.Helmet_trim}",
			"Interior": "${standardValue.Interior}",	
			"Logo": "${standardValue.Logo} | ${standardValue.Logo_color}",
			"BackLogo": "${standardValue.Back_logo}",
			"Size": "${standardValue.Rear_text_size}",
			"strap": "${standardValue.Strap_color}",
			"BackNumber": {
				"Apply": "${backNumberWindow}",
				"Configuration": {
					"Text": "${backNumberInput.numberText}",
					"Police": "${backNumberInput.numberStyle}",
					"Color": "${backNumberInput.numberColorType} | ${backNumberInput.numberColor}"
				}
			},
			"LeftNummber": {
				"Apply": "${rightNumberWindow}",
				"Configuration": {
					"Text": "${rightNumberInput.numberText}",
					"Police": "${rightNumberInput.numberStyle}",
					"Color": "${rightNumberInput.numberColorType} | ${rightNumberInput.numberColor}"
				}
			},
			"RightNummber": {
				"Apply": "${leftNumberWindow}",
				"Configuration": {
					"Text": "${leftNumberInput.numberText}",
					"Police": "${leftNumberInput.numberStyle}",
					"Color": "${leftNumberInput.numberColorType} | ${leftNumberInput.numberColor}"
				}
			},
			"Engraving": {
				"Apply": "${backEngraving}",
				"Configuration": {
					"Text": "${engravingInput.text}",
					"Police": "${engravingInput.textStyle}"
				}
			}
		},
		"Screws": {
			"Screws_finition": "${standardValue.Metal_pieces}"
		},
		"Chinguard": {
			"With_Chin": "${withChin}",
			"Chinguard_first_color": "${standardValue.Chinguard_color_type} | ${standardValue.Chinguard_color}",
			"Varnish": "${varnishChin}",
			"Trim": "${standardValue.Chinguard_trim}"
		},
		"Visor": {
			"With_Visor": "${withVisor}",
			"visor_Color": "${standardValue.Visor_color}"
		},
		"Earmuff": {
			"Earmuff_inside": "${earmuffInput.earmuffInsideStyle}",
			"Earmuff_outside": "${earmuffInput.earmuffOutsideStyle}"
		}
	}`;	
}