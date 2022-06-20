import React from 'react';
import './TableLarge.scss';

const TableLarge = () => {
    return (
        <div className='tableLarge box-shadow'>
            <p className='title'>Latest transactions</p>
            <table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='avatar-wrapper'>
                            <img src="https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png" className='avatar' alt="" />
                            <p>Avatar Ownder</p>
                        </td>
                        <td>2 Jun 2021</td>
                        <td>$122.00</td>
                        <td><span className='approved'>Approved</span></td>
                    </tr>
                    <tr>
                        <td className='avatar-wrapper'>
                            <img src="https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png" className='avatar' alt="" />
                            <p>Avatar Ownder</p>
                        </td>
                        <td>2 Jun 2021</td>
                        <td>$122.00</td>
                        <td><span className='rejected'>Rejected</span></td>    
                    </tr>
                    <tr>
                        <td className='avatar-wrapper'>
                            <img src="https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png" className='avatar' alt="" />
                            <p>Avatar Ownder</p>
                        </td>
                        <td>2 Jun 2021</td>
                        <td>$122.00</td>
                        <td><span className='pending'>Pending</span></td>    
                    </tr>
                    <tr>
                        <td className='avatar-wrapper'>
                            <img src="https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png" className='avatar' alt="" />
                            <p>Avatar Ownder</p>
                        </td>
                        <td>2 Jun 2021</td>
                        <td>$122.00</td>
                        <td><span className='approved'>Approved</span></td>    
                    </tr>
                    <tr>
                        <td className='avatar-wrapper'>
                            <img src="https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png" className='avatar' alt="" />
                            <p>Avatar Ownder</p>
                        </td>
                        <td>2 Jun 2021</td>
                        <td>$122.00</td>
                        <td><span className='approved'>Approved</span></td>    
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default TableLarge;