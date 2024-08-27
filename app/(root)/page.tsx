import React from 'react'

//Components Imports
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RigthSidebar from '@/components/RigthSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Home =async()=>{

    const loggedIn =await getLoggedInUser()
    return(
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn.name || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.0}
                    />
                </header>

                Recent Transaticons
            </div>

            <RigthSidebar
                user={loggedIn}
                transactions={[]}
                banks ={[{currentBalance:132.50 },{currentBalance:124.0}]}
            />
        </section>
    )
}

export default Home