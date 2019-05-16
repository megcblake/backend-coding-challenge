const convertProvince = (code) => {
  let province = '';
  switch (code) {
    case '01':
      province = 'AB';
      break;
    case '02':
      province = 'BC';
      break;
    case '03':
      province = 'MB';
      break;
    case '04':
      province = 'NB';
      break;
    case '05':
      province = 'NL';
      break;
    case '07':
      province = 'NS';
      break;
    case '08':
      province = 'ON';
      break;
    case '09':
      province = 'NS';
      break;
    case '10':
      province = 'QC';
      break;
    case '11':
      province = 'SK';
      break;
    case '12':
      province = 'YT';
      break;
    case '13':
      province = 'NT';
      break;
    case '14':
      province = 'NU';
      break;
    default:
      province = code;
  }
  return province;
};

module.exports = { convertProvince };
