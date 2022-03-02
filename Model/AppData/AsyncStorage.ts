import AsyncStorage from '@react-native-async-storage/async-storage';

export function setAsyncStorage(key: string, value: string) {
  if (value != undefined && value != null) {
    AsyncStorage.setItem(key, value).catch(ex => {
      console.log('Ошибка записи в AsyncStorage ' + ex);
    });
  }
}

export function getAsyncStorage(key: string) {
  let store = AsyncStorage.getItem(key);
  return store;
}
