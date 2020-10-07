import request from 'superagent'

export function getJournalSpread(){
  return request.get('/')
  .then(res => { return res.body } )
  .catch( err => console.log(err))
}

export function addSpread(spreadObject) {
  return request.post('/v1/spreads/addSpread')
  .send(spreadObject)
  .then( res => {return res.body})
  .catch(err => console.log(err))
}
