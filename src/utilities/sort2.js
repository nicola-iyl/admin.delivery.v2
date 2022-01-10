export const sort2 = (field, state, setState, up, callback) => {
  const copy = [...state]; //devo fare la copia altrimenti per react non fa il refresh perchè per lui l'array sortato è sempre lo stesso
  if(up){
    copy.sort((a, b) => (a[field] > b[field]) ? 1 : -1);    
  }
  else{
    copy.sort((a, b) => (a[field] < b[field]) ? 1 : -1);
  }
  setState(copy);
  callback();
}