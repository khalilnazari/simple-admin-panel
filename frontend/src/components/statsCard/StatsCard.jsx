import { ArrowDownwardOutlined } from '@material-ui/icons';
import React from 'react';
import './StatsCard.scss'

const StatsCard = () => {
    return (
        <div className='stats-card box-shadow'>
            <p className='title'>Revenue</p>
            <div>
                <h3>$2,415</h3>
                <p className='indicator'>-11.4 <ArrowDownwardOutlined className='icon-red'/></p>
            </div>
            <p>Compared to last month</p>
        </div>
    );
};

export default StatsCard;