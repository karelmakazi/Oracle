import request from 'superagent'

export function addSpread(spreadObject) {
  return request.post('/v1/spreads/addSpread')
  .send(spreadObject)
  .then( res => {return res.body})
  .catch(err => console.log(err))
}
