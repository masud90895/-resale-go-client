import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Dashboard = () => {
  const {user} = useContext(AuthContext);
  const { data: users = {} } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch(`http://localhost:5000/user/?email=${user?.email}`).then((res) =>
        res.json()
      ),
  });
  console.log(users);
   
    return (
        <div className='h-screen flex items-center justify-center'>
          <div >
            <h1 className='md:text-4xl text-2xl font-serif text-center'>Welcome Dear Honorable <span className='underline text-green-600'>{users?.role}</span>  </h1>
            <h1 className='mt-3 bg-gray-300 p-2 text-green-600 md:text-3xl text-2xl font-serif text-center'>{users?.name}</h1> 
            <p className='md:text-2xl my-4 text-center'>Thank you for coming  here! I hope you enjoy our product.If any problem contract us</p>
          </div>
        </div>
    );
};

export default Dashboard;