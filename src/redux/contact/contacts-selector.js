// селектор получения части стейта массива контактов
export const getContacts = state => state.contacts.items;
// селектор получения части стейта хранящего значение фильтра

export const getFilter = state => state.contacts.filter;
//Составной селектор для получения отфильтрованных контактов
export const getfilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  if (filter !== '') {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  } else {
    return contacts;
  }
};
