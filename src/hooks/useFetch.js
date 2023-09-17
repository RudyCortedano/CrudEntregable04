import axios from 'axios'
import { useState } from 'react'

const useFetch = (baseUrl) => {
  const [infoApi, setInfoApi] = useState()
  const [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(true)

 // READ
  const getApi = (path) =>{
    setLoading(true)
    const url = `${baseUrl}${path}`
    axios.get(url)
    .then(res => {
      setInfoApi(res.data)
      setHasError(false)
    })
    .catch(err => {
      console.log(err)
      setHasError(true)
    })
    .finally(() => setLoading(false))
  }

 // CREATE
  const postApi = (path, data) =>{
    setLoading(true)
    const url = `${baseUrl}${path}`
    axios.post(url, data)
    .then(res => {
      setInfoApi([...infoApi, res.data])
      setHasError(false)
    })
    .catch(err => {
      console.log(err)
      setHasError(true)
    })
    .finally(() => setLoading(false))
  }

 // DELETE
  const deleteApi = (path, id) =>{
    setLoading(true)
    const url = `${baseUrl}${path}/${id}/`
    axios.delete(url)
    .then(res => {
      console.log(res.data)
      setInfoApi(infoApi.filter(e => e.id !== id))
      setHasError(false)
    })
    .catch(err => {
      console.log(err)
      setHasError(true)
    })
    .finally(() => setLoading(false))
  }

 // UPDATE
  const updateApi = (path, id,data) =>{
    setLoading(true)
    const url = `${baseUrl}${path}/${id}/`
    axios.put(url, data)
    .then(res => {
      setInfoApi(infoApi.map(e => (id === e.id) ? res.data : e))
      setHasError(false)
    })
    .catch(err => {
      console.log(err)
      setHasError(true)
    })
    .finally(() => setLoading(false))
  }

  return [infoApi, getApi, postApi, deleteApi, updateApi, loading]
}

export default useFetch

