import React from 'react';
import { Chart, StatsCard, TableLarge } from '../../components';
import './dashboard.scss'
  
const Dashboard = () => {
    return (
        <div className='body-container dashboard'>
            
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