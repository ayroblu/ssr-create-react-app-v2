import { apiUrl } from './config'
import _ from 'lodash'

class Api {
  constructor(options){
    this.apiUrl = apiUrl
    this.prefix = ''
    if (!options){
      return
    }
    const {token} = options
    this.token = token
  }
  getJsonHeaders(){
    return {
      'Accept': 'application/json'
    }
  }
  postJsonHeaders(){
    return {
      'Accept': 'application/json'
    , 'Content-Type': 'application/json'
    }
  }
  setToken(token){
    this.token = token
  }
  handleUnauthed(res){
    if (res.status === 401) {
      //this.navigateTo('login', {reset: true})
      //db.cleanDb()
      return new Promise(()=>{})
    } else {
      return res
    }
  }
  _buildQueryString(data){
    return '?' + Object.keys(data).map(d=>d+'='+encodeURIComponent(data[d]))
  }
  _handleStatus(response){
    const status = response.status
    const ok = response.ok
    if (status >= 500) {
      console.error('Sorry, server had a problem, status code:', status)
      return new Promise(()=>{})
    }
    const promise = Promise.resolve(response.json())
    if (!ok){
      return promise.then(r=>{
        const message = (r && r.message) || 'No answer from server'
        console.error('Sorry, you made a bad request, status code:', status, message)
      })
    } else {
      return promise
    }
  }
}

export class MainApi extends Api{
  constructor(options){
    super(options)
    this.prefix = '/api'
  }
}
