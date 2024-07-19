import { useRouter } from 'next/router'
import {React,useEffect} from 'react'


const Dashboard = () => {
    const router = useRouter()
    useEffect(() => {
      if(!localStorage.getItem('token')){
        router.push('/')
      }
    
    }, [])
    

    return (
        <div>
            dashboard
        </div>
    )
}

export default Dashboard
