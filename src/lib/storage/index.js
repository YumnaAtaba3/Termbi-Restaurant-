/* eslint-disable no-unused-vars */
function checkIsBrowser() {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

const defaultGetStorage = () => (checkIsBrowser() ? localStorage : null);

export const dataStorage = (key, getStorage = defaultGetStorage) => {
  const storage = getStorage();

  return {
    set: (data) => {
      if (checkIsBrowser() && storage) {
        storage.setItem(key, JSON.stringify(data));

        //  Make it reactive (important for useIsLoggedIn)
        window.dispatchEvent(new Event("storage"));
      }
    },

    get: () => {
      if (!checkIsBrowser() || !storage) return undefined;
      const json = storage.getItem(key);
      if (!json) return undefined;

      try {
        return JSON.parse(json);
      } catch {
        return json;
      }
    },

    remove: () => {
      if (checkIsBrowser() && storage) {
        storage.removeItem(key);

        //  Notify listeners that user logged out
        window.dispatchEvent(new Event("storage"));
      }
    },
  };
};

// Persistent user token storage
export const userStorage = dataStorage("token", defaultGetStorage);
