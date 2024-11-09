import { userInputOptions } from "../Constants";

export const getSelectOptions = (optionsArr, currState) => {
  let formattedOptions = [];
  switch(currState){
    case 1:
      for (let optionObj of optionsArr) {
        formattedOptions.push({
          id: optionObj.code,
          label: optionObj.stockExchange,
          value: {options: optionObj.topStocks, reply: optionObj.stockExchange},
        });
      }
      break;
    case 2: 
      for (let optionObj of optionsArr) {
        formattedOptions.push({
          id: optionObj.code,
          label: optionObj.stockName,
          value: {options: userInputOptions, price: optionObj.price, reply: optionObj.stockName},
        });
      }
      break;
    case 3: 
      formattedOptions = optionsArr;
      break;
  }
  return formattedOptions;
};
