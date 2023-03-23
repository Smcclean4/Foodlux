import axios from 'axios'
import { LoginInterface } from './Login';

describe('checking if login page correctly fetches data', () => {
  const exampleUserLoginInfo = { username: "testman", password: "test123" };
  const exampleWrongUserLoginInfo = { username: "testguy", password: "test456" };
  const exampleUserLoginInfoInterface = {
    username: expect.any(String),
    password: expect.any(String)
  }
  test('making sure that userAuth is being correctly used', async () => {
    const expectedResponse = { token: "logged in!" }
    const response = await axios.post(`http://localhost:${process.env.REACT_APP_PORT}/userAuth`, exampleUserLoginInfo)

    expect(response.status).toBe(200);
    expect(response.data).toEqual(expectedResponse);
  })

  test('making sure that userAuth is being correctly used when error occurs', async () => {
    await expect(axios.post(`http://localhost:${process.env.REACT_APP_PORT}/userAuth`, exampleWrongUserLoginInfo)).rejects.toThrow()
  })

  test('check that user info that is being submitted is adhering to login interface', () => {
    expect(exampleUserLoginInfo,).toMatchObject<LoginInterface>(exampleUserLoginInfoInterface)
  })
})