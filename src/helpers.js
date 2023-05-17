const choice = (items) => items[Math.floor(Math.random() * items.length)];
const remove = (items, item) => {
  const element = items.splice(items.indexOf(item), 1);
  return element ? item : undefined;
};
export {choice,remove};
