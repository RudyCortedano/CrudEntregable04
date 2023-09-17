import { useContext } from 'react'
import FormUsers from './FormUsers'
import Navbar from './Navbar'
import Users from './Users'
import { CrudContext } from '../context/CrudContext'
import Spinner from '../spinner/Spinner'

const Home = () => {
  const {checked, loading} = useContext(CrudContext)

  if(loading){
    return <Spinner/>
  }
  
  return (
    <div className={checked ? "body__nigth" : "body__day"}>
      <Navbar/>
      <FormUsers/>
      <Users/>
    </div>
  )
}

export default Home