import React from 'react'
import { UserOutlined,
    SearchOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    CopyOutlined,
    BarChartOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Input,Badge } from 'antd';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='border-b mb-6'>
        <header className='py-4 px-6 flex justify-between items-center gap-10'>
            <div className="logo">
                <Link to="/">
                    <h2 className='text-2xl font-bold md:text-4xl'>
                      LOGO
                    </h2>
                </Link>
            </div>
            <div className="header-search flex-1 flex justify-center">
                <Input size="large" placeholder="Ürün Ara..." prefix={<SearchOutlined />} className='rounded-full'/>
            </div>
            <div className="menu-links flex justify-between items-center gap-7
            md:static fixed z-50 bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t
            md:px-0 px-4 md:py-0 py-2">
                <Link 
                    to={"/"} 
                    className='flex flex-col hover:text-[#40a9ff] transition-all'
                >
                    <HomeOutlined className='text-xl md:text-2xl'/>
                    <span className='text-[10px] md:text-xs'>Ana Sayfa</span>
                </Link>
                <Badge count={5} offset={[0,6]} className='md:flex hidden'>
                    <Link 
                        to={"/cart"} 
                        className='flex flex-col hover:text-[#40a9ff] transition-all'
                    >
                        <ShoppingCartOutlined className='md:text-2xl text-xl'/>
                        <span className='text-[10px] md:text-xs'>Sepet</span>
                    </Link>
                </Badge>
                <Link 
                    to={"/bills"} 
                    className='flex flex-col hover:text-[#40a9ff] transition-all'
                >
                    <CopyOutlined className='text-xl md:text-2xl'/>
                    <span className='text-[10px] md:text-xs'>Faturalar</span>
                </Link>
                <Link 
                    to={"/customers"} 
                    className='flex flex-col hover:text-[#40a9ff] transition-all'
                >
                    <UserOutlined className='text-xl md:text-2xl'/>
                    <span className='text-[10px] md:text-xs'>Müşteriler</span>
                </Link>
                <Link 
                    to={"/statistic"} 
                    className='flex flex-col hover:text-[#40a9ff] transition-all'
                >
                    <BarChartOutlined className='text-xl md:text-2xl'/>
                    <span className='text-[10px] md:text-xs'>İstatistikler</span>
                </Link>
                <Link 
                    to={"/"} 
                    className='flex flex-col hover:text-[#40a9ff] transition-all'
                >
                    <LogoutOutlined className='text-xl md:text-2xl'/>
                    <span className='text-[10px] md:text-xs'>Çıkış</span>
                </Link>
            </div>
            <Badge count={5} offset={[0,6]} className='md:hidden flex'>
                <Link 
                    to={"/"} 
                    className='flex flex-col hover:text-[#40a9ff] transition-all'
                >
                    <ShoppingCartOutlined className='text-2xl'/>
                    <span className='text-xs'>Sepet</span>
                    </Link>
            </Badge>
        </header>
    </div>
  )
}
