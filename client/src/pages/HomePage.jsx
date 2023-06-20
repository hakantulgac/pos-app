import CartTotals from "../components/cart/CartTotals";
import Categories from "../components/categories/Categories";
import { Header } from "../components/header/Header";
import Products from "../components/products/Products";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="home pl-2 pr-8 flex flex-col md:flex-row
      justify-between gap-10 md:pb-0 pb-20">
        <div className="categories overflow-auto max-h-[calc(85vh)]">
          <Categories/>
        </div>
        <div className="products overflow-auto max-h-[calc(85vh)] flex-[8]">
          <Products/>
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] 
        md:-mt-[24px] border ">
          <CartTotals/>
        </div>
      </div> 
    </>
  )
}

export default HomePage