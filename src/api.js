import { apiUrl } from './config'

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
      return new Promise(()=>{})
    } else {
      return res
    }
  }
  _buildQueryString(data){
    return '?' + Object.keys(data).map(d=>d+'='+encodeURIComponent(data[d]))
  }
}

export class MainApi extends Api{
  constructor(options){
    super(options)
    this.prefix = '/api'
  }
}
