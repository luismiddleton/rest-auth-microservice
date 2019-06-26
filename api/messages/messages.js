import { SUCCESS, FORBIDDEN, ERROR, UNAUTHORIZED } from './status.types'
import { MSG_USER_UNDEFINED, MSG_NO_USERS, MSG_INVALID_CREDENTIALS } from './messages.types'

// response messages
export const IS_SUCCESSFUL = {
  status: SUCCESS
}

export const IS_FORBIDDEN = {
  status: FORBIDDEN
}

export const HAS_ERROR = {
  status: ERROR
}

export const IS_UNAUTHORIZED = {
  status: UNAUTHORIZED
}

// by response type
export const USER_UNDEFINED = {
  error: MSG_USER_UNDEFINED
}

export const NO_USERS = {
  error: MSG_NO_USERS
}

export const INVALID_CREDENTIALS = {
  ...IS_UNAUTHORIZED,
  error: MSG_INVALID_CREDENTIALS
}
