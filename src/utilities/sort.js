export const sort = (field, state, setState) => {
  const copy = [...state]; //devo fare la copia altrimenti per react non fa il refresh perchè per lui l'array sortato è sempre lo stesso
  copy.sort((a, b) => (a[field] > b[field]) ? 1 : -1);
  setState(copy);
}