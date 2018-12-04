import { User } from '@devhub/core/src/types/graphql'
import { createAction, createErrorAction } from '../helpers'

export function loginRequest(payload: {
  appToken: string
  githubScope: string[] | undefined
  githubToken: string
  githubTokenCreatedAt: string
  githubTokenType: 'bearer' | string
}) {
  return createAction('LOGIN_REQUEST', payload)
}

export function loginSuccess(payload: { appToken: string; user: User }) {
  return createAction('LOGIN_SUCCESS', payload)
}

export function loginFailure(error: any) {
  return createErrorAction('LOGIN_FAILURE', error)
}

export function logout() {
  return createAction('LOGOUT')
}