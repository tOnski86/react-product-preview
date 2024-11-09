function Card() {
  return (
    <div className='grid sm:grid-cols-2 sm:max-w-3xl sm:items-center bg-white m-4 rounded-xl overflow-hidden'>
      <div>
        <img src='/image-product-mobile.jpg' className='sm:hidden block ' />
        <img src='/image-product-desktop.jpg' className='sm:block hidden' />
      </div>
      <div className='p-6 md:p-7 flex flex-col'>
        <h3 className='tracking-[.15em] uppercase mb-3 md:tracking-[.3em] md:mb-4'>
          Perfume
        </h3>
        <h2 className='font-fraunces font-bold text-3xl text-blue mb-4 md:text-5xl md:mb-6'>
          Gabrielle Essence Eau De Parfum
        </h2>
        <p className='mb-5 md:mb-6'>
          A floral, solar and voloptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>

        <div className='flex items-center gap-5 mb-5 md:mb-8'>
          <p className='font-fraunces font-bold text-green text-3xl md:text-4xl'>
            $149.99
          </p>
          <p className='line-through'>$169.99</p>
        </div>
        <button className='bg-green text-white py-4 rounded-lg font-bold tracking-wider hover:bg-[#1E4033] transition-all flex justify-center items-center gap-3'>
          <svg width='15' height='16' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z'
              fill='#FFF'
            />
          </svg>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}

export default Card;
