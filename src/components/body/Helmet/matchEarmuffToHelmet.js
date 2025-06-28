const matchEarmuffToHelmet = (standardValue, setEarmuffInput, earmuffInput) => {
  let earmuffInside = earmuffInput.earmuffInsideStyle;
  let earmuffOutside = earmuffInput.earmuffOutsideStyle;
  if (standardValue.Interior !== 'tartan|red' || standardValue.Interior !== 'tartan|white') {
    earmuffInside = standardValue.Interior;
  }
  if(standardValue.Helmet_trim !== 'rubber|white') {
    earmuffOutside = standardValue.Helmet_trim;
  }
/*   if(standardValue.Helmet_trim === 'leather|black') {
    earmuffOutside = 'rubber|black';
  } */
  setEarmuffInput({
    earmuffInput: 'match',
    earmuffInsideStyle: earmuffInside,
    earmuffOutsideStyle: earmuffOutside,
  })
}
export default matchEarmuffToHelmet;

