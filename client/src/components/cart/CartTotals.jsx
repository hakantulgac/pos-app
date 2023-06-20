import { Button } from 'antd'
import React from 'react'
import {ClearOutlined,PlusCircleOutlined,MinusCircleOutlined} from '@ant-design/icons'
const Cart = () => {
  return (
    <div className="cart h-full max-h-[90vh] min-h-[90vh] flex flex-col">
        <h2 className='bg-blue-600 text-center py-4
        text-white font-bold tracking-wide'>
          Sepetteki Ürünler
        </h2>
        <ul className="cart-items px-2 my-2 flex flex-col gap-y-3 pt-2 overflow-auto">
          <li className="cart-item flex justify-between">
            <div className='flex items-center'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Honeycrisp-Apple.jpg/640px-Honeycrisp-Apple.jpg"
                alt="" className='w-16 h-16 object-cover' 
              />
              <div className="flex flex-col ml-2">
                <b>Elma</b>
                <span>12₺ x 2</span>
              </div>
            </div>
            <div className='flex items-center gap-x-2'>
                <Button
                  type='primary'
                  size='small'
                  className='w-full flex items-center
                  justify-center !rounded-full'
                  icon={<PlusCircleOutlined/>}
                />
                <b className='mr-1'>1</b>
                <Button
                  type='primary'
                  size='small'
                  className='w-full flex items-center
                  justify-center !rounded-full'
                  icon={<MinusCircleOutlined/>}
                />
              </div>
          </li>
          <li className="cart-item flex justify-between">
            <div className='flex items-center'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Honeycrisp-Apple.jpg/640px-Honeycrisp-Apple.jpg"
                alt="" className='w-16 h-16 object-cover' 
              />
              <div className="flex flex-col ml-2">
                <b>Elma</b>
                <span>12₺ x 2</span>
              </div>
            </div>
            <div className='flex items-center gap-x-2'>
                <Button
                  type='primary'
                  size='small'
                  className='w-full flex items-center
                  justify-center !rounded-full'
                  icon={<PlusCircleOutlined/>}
                />
                <b>1</b>
                <Button
                  type='primary'
                  size='small'
                  className='w-full flex items-center
                  justify-center !rounded-full'
                  icon={<MinusCircleOutlined/>}
                />
              </div>
          </li>
          <li className="cart-item flex justify-between">
            <div className='flex items-center'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Honeycrisp-Apple.jpg/640px-Honeycrisp-Apple.jpg"
                alt="" className='w-16 h-16 object-cover' 
              />
              <div className="flex flex-col ml-2">
                <b>Elma</b>
                <span>12₺ x 2</span>
              </div>
            </div>
            <div className='flex items-center gap-x-2'>
                <Button
                  type='primary'
                  size='small'
                  className='w-full flex items-center
                  justify-center !rounded-full'
                  icon={<PlusCircleOutlined/>}
                />
                <b>1</b>
                <Button
                  type='primary'
                  size='small'
                  className='w-full flex items-center
                  justify-center !rounded-full'
                  icon={<MinusCircleOutlined/>}
                />
              </div>
          </li>
          <li className="cart-item flex justify-between">
            <div className='flex items-center'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Honeycrisp-Apple.jpg/640px-Honeycrisp-Apple.jpg"
                alt="" className='w-16 h-16 object-cover' 
              />
              <div className="flex flex-col ml-2">
                <b>Elma</b>
                <span>12₺ x 2</span>
              </div>
            </div>
            <div className='flex items-center gap-x-2'>
                <Button
                  type='primary'
                  size='small'
                  className='w-full flex items-center
                  justify-center !rounded-full'
                  icon={<PlusCircleOutlined/>}
                />
                <b>1</b>
                <Button
                  type='primary'
                  size='small'
                  className='w-full flex items-center
                  justify-center !rounded-full'
                  icon={<MinusCircleOutlined/>}
                />
              </div>
          </li>
          <li className="cart-item flex justify-between">
            <div className='flex items-center'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Honeycrisp-Apple.jpg/640px-Honeycrisp-Apple.jpg"
                alt="" className='w-16 h-16 object-cover' 
              />
              <div className="flex flex-col ml-2">
                <b>Elma</b>
                <span>12₺ x 2</span>
              </div>
            </div>
            <div className='flex items-center gap-x-2'>
                <Button
                  type='primary'
                  size='small'
                  className='w-full flex items-center
                  justify-center !rounded-full'
                  icon={<PlusCircleOutlined/>}
                />
                <b>1</b>
                <Button
                  type='primary'
                  size='small'
                  className='w-full flex items-center
                  justify-center !rounded-full'
                  icon={<MinusCircleOutlined/>}
                />
              </div>
          </li>
        </ul>
        <div className="cart-totals mt-auto">
            <div className='border-t border-b'>
                <div className='flex justify-between p-2'>
                   <b>Ara Toplam</b>
                   <span>99₺</span>
                </div>
                <div className='flex justify-between p-2'>
                   <b>KDV %8</b>
                   <span className='text-red-700'>+7.92₺</span>
                </div>
            </div>
            <div className='mt-4 border-b'>
                <div className='flex justify-between p-2'>
                   <b className='text-xl text-green-500'>Genel Toplam</b>
                   <span className='text-xl'>106.92₺</span>
                </div>
            </div>
            <div className='py-4 px-2'>
                <Button type='primary' size='large' className='w-full'>
                  Sipariş Oluştur
                </Button>
                <Button icon={<ClearOutlined/>} type='primary' size='large' 
                  className='w-full mt-2 flex items-center justify-center' danger
                >
                  Temizle
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Cart