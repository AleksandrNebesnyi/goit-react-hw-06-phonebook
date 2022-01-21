Телефонная книга Выполни рефакторинг кода приложения «Телефонная книга» добавив
управление состоянием при помощи библиотеки Redux Toolkit.

Пусть Redux-состояние выглядит следующим образом.

{ contacts: { items: [], filter: '' } } Создай хранилище с configureStore()
Создай действия сохранения и удаления контакта, а также обновления фильтра.
Используй функцию createAction(). Создай редюсеры контактов и фильтра. Используй
функцию createReducer() или createSlice(). Свяжи React-компоненты с
Redux-логикой при помощи хуков бибилиотеки react-redux.