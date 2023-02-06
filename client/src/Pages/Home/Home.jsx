import React from 'react'
import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RigthSidebar/RightSidebar'
// import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'

const Home = () => {
    return (
        <div className='home-container-1'>
            <div style={{margin: '20', height : '100%',display: 'flex', justifyContent: 'space-between',
    margin: '0% auto',
    flex: '1 0 auto'}}>
            <LeftSidebar />
            </div>
            <div className='home-conatiner-1'>
                <RightSidebar/>

            </div>
        </div>
    )
}

export default Home