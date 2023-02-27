import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { getUserDashboard } from '../services/userService';

const DashboardCard = ({ icon, figure, title, middle, bg, textColor }) => (
  <div
    className={`${
      middle && 'mt-[20px] md:my-0'
    } w-[260px] md:w-[300px] h-[90px] md:h-[111px] flex flex-col justify-center text-white dark:border dark:border-gray-200 rounded-[4px] shadow z-10`}
    style={{
      background: `${bg}`,
    }}
  >
    <div className='flex gap-[18px] items-center '>
      <img src={icon} className='mx-[15px] md:mx-[29px]' />
      <div className=''>
        <p className='text-[16px] font-[400] mb-[8px] md:mb-[14px] text-[#8db0c2]'>
          {title}
        </p>
        <p
          className={`text-${textColor} font-[700] text-[18px] md:text-[26px] leading-7`}
          style={{ color: textColor }}
        >
          {figure}
        </p>
      </div>
    </div>
  </div>
);

const subjectStyle = [
  {
    icon: '/images/icon/user.png',
    middle: false,
    bg: 'rgba(221,252,220,1)',
    textColor: '#1A8F56',
  },
  {
    icon: '/images/icon/quant.png',
    middle: true,
    bg: '#F6FAFD',
    textColor: '#3297EF',
  },
  {
    icon: '/images/icon/biology.png',
    middle: false,
    bg: '#FDF7F2',
    textColor: '#B65800',
  },
  {
    icon: '/images/icon/commerce.png',
    middle: true,
    bg: '#F8F5FC',
    textColor: '#9545F8',
  },
  {
    icon: '/images/icon/current.png',
    middle: false,
    bg: '#E7FDE3',
    textColor: '#33F110',
  },
  {
    icon: '/images/icon/football.png',
    middle: true,
    bg: '#F8F9FD',
    textColor: '#0012B6',
  },
  {
    icon: '/images/icon/user.png',
    middle: false,
    bg: 'rgba(221,252,220,1)',
    textColor: '#1A8F56',
  },
];

const dashboard = () => {
  const { tokenPayload, token } = useSelector((state) => state.user);
  const [userDashboard, setUserDashboard] = useState({
    subjects: [],
    assessmentsTaken: 0,
    wallet: 0,
    totalScore: 0,
    firstName: '',
    lastName: '',
  });

  useEffect(() => {
    const getDashboard = async () => {
      try {
        const { data } = await getUserDashboard(tokenPayload.id, token);
        setUserDashboard(data);
        console.log(data);
      } catch (err) {}
    };

    getDashboard();
  }, []);

  return (
    <>
      <DashboardLayout>
        <div className='dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white pt-[50px] md:pt-0'>
          <div className='md:flex w-[100%] gap-x-[13px] md:ml-[20px] pb-[15px]'>
            <div className=' md:w-[65%] mt-[30px] bg-white shadow pb-[30px] flex flex-col items-center dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white '>
              <div className=' md:flex items-center gap-x-[15px] px-[25px] pt-[30px] '>
                {/* <Link href="/total-votes"> */}
                <DashboardCard
                  icon='/images/icon/user.png'
                  figure={userDashboard.subjects[0]?.score}
                  title={userDashboard.subjects[0]?.title}
                  bg='rgba(221,252,220,1)'
                  textColor='#1A8F56'
                />
                {/* </Link> */}
                {/* <Link href="/nominees"> */}
                <DashboardCard
                  icon='/images/icon/quant.png'
                  middle
                  figure={userDashboard.subjects[1]?.score}
                  title={userDashboard.subjects[1]?.title}
                  bg='#F6FAFD'
                  textColor='#3297EF'
                />
                {/* </Link> */}
              </div>
              <div className=' md:flex items-center gap-x-[15px] py-[30px] px-[20px] '>
                {/* <Link href="/categories"> */}
                <DashboardCard
                  icon='/images/icon/biology.png'
                  figure={userDashboard.subjects[2]?.score}
                  title={userDashboard.subjects[2]?.title}
                  bg='#FDF7F2'
                  textColor='#B65800'
                />
                {/* </Link> */}
                {/* <Link href="/subcategories"> */}
                <DashboardCard
                  icon='/images/icon/commerce.png'
                  middle
                  figure={userDashboard.subjects[3]?.score}
                  title={userDashboard.subjects[3]?.title}
                  bg='#F8F5FC'
                  textColor='#9545F8'
                />
                {/* </Link> */}
              </div>
              <div className=' md:flex items-center gap-x-[15px] px-[20px] '>
                {/* <Link href="/candidates"> */}
                <DashboardCard
                  icon='/images/icon/current.png'
                  figure={userDashboard.subjects[4]?.score}
                  title={userDashboard.subjects[4]?.title}
                  bg='#E7FDE3'
                  textColor='#33F110'
                />
                {/* </Link> */}
                {/* <Link href="/reservations"> */}
                <DashboardCard
                  icon='/images/icon/football.png'
                  middle
                  figure={userDashboard.subjects[5]?.score}
                  title={userDashboard.subjects[5]?.title}
                  bg='#F8F9FD'
                  textColor='#0012B6'
                />
                {/* </Link> */}
              </div>
              <div className=' md:flex items-center gap-x-[15px] px-[20px] pt-[20px]'>
                {/* <Link href="/candidates"> */}
                <DashboardCard
                  icon='/images/icon/total.png'
                  figure={userDashboard.subjects[6]?.score}
                  title={userDashboard.subjects[6]?.title}
                  bg='#F8F8FB'
                  textColor='#4E4DA4'
                />
                {/* </Link> */}
                {/* <Link href="/reservations"> */}
                <DashboardCard
                  icon='/images/icon/test.png'
                  figure={userDashboard.assessmentsTaken}
                  middle
                  title='No. of test taken'
                  bg='#F6FCF9'
                  textColor='#4FE3A5'
                />
                {/* </Link> */}
              </div>
            </div>
            <div className='bg-white shadow h-[100vh] mt-[30px] md:w-[29%] pt-[18px] flex flex-col items-center dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white'>
              <div className=''>
                <div
                  className='w-[280px] h-[180px] flex flex-col justify-center text-white dark:border mt-[20px] mx-[10px] dark:border-gray-200 rounded-[4px] shadow z-10'
                  style={{
                    background: '#00A651',
                  }}
                >
                  <div className='pl-[80px] '>
                    <p className='text-[32px] font-[500] text-white'>
                      ₦{userDashboard.wallet}
                      <small className='text-[20px] font-[500] text-white'>
                        .00
                      </small>
                    </p>
                    <p
                      className={`text-white font-[500] text-[20px] leading-7 mt-[30px]`}
                    >
                      Earnings
                    </p>
                  </div>
                </div>
                <div className='px-[10px] pt-[30px] md:pt-[105px]'>
                  <Link href='/reservations'>
                    <div
                      className='w-[280px] h-[111px] flex flex-col justify-center text-white dark:border mt-[20px] mx-[10px] dark:border-gray-200 rounded-[4px] shadow z-10'
                      style={{
                        background: '#060720',
                      }}
                    >
                      <div className='flex gap-[18px] items-center pl-[18px] '>
                        <img src='/images/icon/total.png' alt='' />
                        <div className=''>
                          <p className='text-[16px] font-[400] text-white'>
                            Total Scores
                          </p>
                          <p
                            className={`text-white font-[700] text-[26px] leading-7`}
                          >
                            {userDashboard.totalScore}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default dashboard;
