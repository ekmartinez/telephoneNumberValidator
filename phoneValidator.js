function telephoneCheck(str) {

    const reg = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/
    return reg.test(str);
  }
  
  telephoneCheck("555-555-5555");