import React from 'react'

const Products = () => {
  return (
    <div className='products-wrapper grid grid-cols-card gap-4'>
        <div className='product-item border hover:shadow-lg cursor-pointer transition-all select-none'>
            <div className="product-img">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Honeycrisp-Apple.jpg/640px-Honeycrisp-Apple.jpg" 
                    alt="" 
                    className='h-28 object-cover w-full border-b'
                />
            </div>
            <div className="product-info flex flex-col p-3">
                <span className='font-bold'>Elma</span>
                <span>12₺</span>
            </div>
        </div>
        <div className='product-item border hover:shadow-lg cursor-pointer transition-all select-none'>
            <div className="product-img">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Honeycrisp-Apple.jpg/640px-Honeycrisp-Apple.jpg" 
                    alt="apple" 
                    className='h-28 object-cover w-full border-b'
                />
            </div>
            <div className="product-info flex flex-col p-3">
                <span className='font-bold'>Elma</span>
                <span>12₺</span>
            </div>
        </div>
        <div className='product-item border hover:shadow-lg cursor-pointer transition-all select-none'>
            <div className="product-img">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Honeycrisp-Apple.jpg/640px-Honeycrisp-Apple.jpg" 
                    alt="" 
                    className='h-28 object-cover w-full border-b'
                />
            </div>
            <div className="product-info flex flex-col p-3">
                <span className='font-bold'>Elma</span>
                <span>12₺</span>
            </div>
        </div>
        <div className='product-item border hover:shadow-lg cursor-pointer transition-all select-none'>
            <div className="product-img">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Honeycrisp-Apple.jpg/640px-Honeycrisp-Apple.jpg" 
                    alt="apple" 
                    className='h-28 object-cover w-full border-b'
                />
            </div>
            <div className="product-info flex flex-col p-3">
                <span className='font-bold'>Elma</span>
                <span>12₺</span>
            </div>
        </div>
        <div className='product-item border hover:shadow-lg cursor-pointer transition-all select-none'>
            <div className="product-img">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Honeycrisp-Apple.jpg/640px-Honeycrisp-Apple.jpg" 
                    alt="" 
                    className='h-28 object-cover w-full border-b'
                />
            </div>
            <div className="product-info flex flex-col p-3">
                <span className='font-bold'>Elma</span>
                <span>12₺</span>
            </div>
        </div>
        <div className='product-item border hover:shadow-lg cursor-pointer transition-all select-none'>
            <div className="product-img">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Honeycrisp-Apple.jpg/640px-Honeycrisp-Apple.jpg" 
                    alt="apple" 
                    className='h-28 object-cover w-full border-b'
                />
            </div>
            <div className="product-info flex flex-col p-3">
                <span className='font-bold'>Elma</span>
                <span>12₺</span>
            </div>
        </div>
    </div>
  )
}

export default Products