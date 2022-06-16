const TokenKey = 'Token'
const AUTH_MENUS = 'auth_menus'
const AUTH_BUTTONS = 'auth_buttons'
const UserKey = 'auth_user'
const InitKey = 'router_init'
const AesKey = 'aes_key'
const DebugKey = 'debug_key'

export function clearAll() {
  sessionStorage.clear()
  localStorage.clear()
}

export function getUser() {
  const userjson = sessionStorage.getItem(UserKey)
  if (userjson) {
    return JSON.parse(userjson)
  }
  return {}
}

export function setUser(user) {
  sessionStorage.setItem(UserKey, JSON.stringify(user))
}

export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token)
}

export function getAesKey() {
  return sessionStorage.getItem(AesKey)
}

export function setAesKey(key) {
  return sessionStorage.setItem(AesKey, key)
}


export function getDebug() {
  return sessionStorage.getItem(DebugKey) === 'true'
}

export function setDebug(debug) {
  return sessionStorage.setItem(DebugKey, debug)
}

export function setInit(val) {
  return sessionStorage.setItem(InitKey, val)
}

export function getInit() {
  return sessionStorage.getItem(InitKey)
}


export function removeToken() {
  return sessionStorage.removeItem(TokenKey)
}

export function setMenus(menus) {
  sessionStorage.setItem(AUTH_MENUS, JSON.stringify(menus))
}

export function getMenus() {
  const menus = sessionStorage.getItem(AUTH_MENUS)
  if (menus) {
    return JSON.parse(menus)
  } else {
    return undefined
  }
}

export function setButtons(buttons) {
  sessionStorage.setItem(AUTH_BUTTONS, JSON.stringify(buttons))
}

export function getButtons() {
  const buttons = sessionStorage.getItem(AUTH_BUTTONS)
  if (buttons) {
    return JSON.parse(buttons)
  } else {
    return undefined
  }
}

export function removeMenus() {
  return sessionStorage.removeItem(AUTH_MENUS)
}


export function getJsonData(key) {
  let str = sessionStorage.getItem(key)
  if (str) {
    return JSON.parse(str)
  } else {
    return {}
  }
}
