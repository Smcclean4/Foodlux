import axios from 'axios'

describe('creating tests for user data fetch', () => {
  test('calling for username fetches some sort of data', async () => {
    const data = await axios.get(`http://localhost:${process.env.REACT_APP_PORT}/userAuth/fetchUserName`)
    expect(data).toBeDefined();
    expect(data.status).toBe(200);
    expect(data.data).not.toBeUndefined();
  })
})