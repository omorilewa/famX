import { fromEvent, FunctionEvent } from 'graphcool-lib'
import { GraphQLClient } from 'graphql-request'
import * as bcrypt from 'bcryptjs'
import * as validator from 'validator'

interface User {
  id: string
}

interface EventData {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirm: string
  phoneNum: string
}

const SALT_ROUNDS = 10

export default async (event: FunctionEvent<EventData>) => {
  console.log(event)

  try {
    const graphcool = fromEvent(event)
    const api = graphcool.api('simple/v1')

    const {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
      phoneNum } = event.data

    if (!validator.isEmail(email)) {
      return { error: 'Not a valid email' }
    }

    if (!validator.equals(password, passwordConfirm)) {
      return { error: 'Passwords do not match' }
    }

    if (!validator.isEmpty(firstName)) {
      return { error: 'This field is required' }
    }

    if (!validator.isEmpty(lastName)) {
      return { error: 'This field is required' }
    }

    if (!validator.isEmpty(phoneNum)) {
      return { error: 'This field is required' }
    }

    // check if user exists already
    const userExists: boolean = await getUser(api, email)
      .then(r => r.User !== null)
    if (userExists) {
      return { error: 'Email already in use' }
    }

    // create password hash
    const salt = bcrypt.genSaltSync(SALT_ROUNDS)
    const hash = await bcrypt.hash(password, SALT_ROUNDS)

    // create new user
    const userId = await createGraphcoolUser(api, firstName, lastName,email, password, passwordConfirm, hash)

    // generate node token for new User node
    const token = await graphcool.generateNodeToken(userId, 'User')

    return { data: { id: userId, token } }
  } catch (e) {
    console.log(e)
    return { error: 'An unexpected error occured during signup.' }
  }
}

async function getUser(api: GraphQLClient, email: string): Promise<{ User }> {
  const query = `
    query getUser($email: String!) {
      User(email: $email) {
        id
      }
    }
  `

  const variables = {
    email,
  }

  return api.request<{ User }>(query, variables)
}

async function createGraphcoolUser(api: GraphQLClient, firstName: string, lastName: string, email: string, password: string, passwordConfirm: string, phoneNum: string): Promise<string> {
  const mutation = `
    mutation createGraphcoolUser(
      $firstName: String!,
      $lastName: String!,
      $email: String!,
      $password: String!,
      $passwordConfirm: String!,
      $phoneNum: String!) {
      createUser(
        firstName: $firstName,
        lastName: $lastName,
        email: $email,
        password: $password,
        passwordConfirm: $passwordConfirm,
        phoneNum: $phoneNum
      ) {
        id
      }
    }
  `

  const variables = {
    firstName,
    lastName,
    email,
    password: password,
    passwordConfirm,
    phoneNum
  }

  return api.request<{ createUser: User }>(mutation, variables)
    .then(r => r.createUser.id)
}
