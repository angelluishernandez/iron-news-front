export const alertConstants = {
  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR',
  CLEAR: 'ALERT_CLEAR'
};

export const userConstants = {
  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',

  LOGOUT: 'USERS_LOGOUT',

  GETALL_REQUEST: 'USERS_GETALL_REQUEST',
  GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
  GETALL_FAILURE: 'USERS_GETALL_FAILURE'
};

export const foldersConstants = {
  CREATE_FOLDER: "CREATE_FOLDER", 
  LIST_FOLDERS: "LIST_FOLDERS", 
  GET_FOLDER: "GET_FOLDER", 
  UPDATE_FOLDERS: "UPDATE_FOLDER", 
  DELETE_FOLDER: "DELETE_FOLDER"
}

export const sourcesConstants = {
  FETCH_SOURCES: "FETCH_SOURCES", 
  ADD_SOURCE: "ADD_SOURCE", 
  DELETE_SOURCE: "DELETE_SOURCE", 
  FETCH_USER_SOURCES: "FETCH_USER_SOURCES"
  
}