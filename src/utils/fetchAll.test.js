import axios from 'axios'
import {fetchAll} from './fetchAll'
jest.mock('axios')

describe('Testing get all data from JSON', () => {
  it('fetches a JSON', async () => {
    const expectedURL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'

    await fetchAll();

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(expectedURL)
  })

//   it('returns the response data', async () => {
    
//     const res = await fetchAll()
    

//     // expect(res).toBe(typeof(Array));
//         expect(res.length).toBeEqual(1337);
    

//     // expect(data).toEqual(expectedData)
//   })
})