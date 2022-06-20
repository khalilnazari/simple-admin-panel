import React from 'react';
import { Chart, Sidebar, StatsCard, TableLarge } from '../../components';
import './dashboard.scss'
  
const Dashboard = () => {
    return (
        <div className='body-container dashboard'>
            <Sidebar />
            <div className="content-container">
                <div className="stats-cards">
                    <StatsCard />
                    <StatsCard />
                    <StatsCard />
                </div>
                <Chart />

                <TableLarge />
            </div>
        </div>
    );
};

export default Dashboard;