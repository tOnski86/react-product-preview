function App() {
  return (
    <div className='grid sm:grid-cols-2 sm:max-w-3xl bg-white m-4 rounded-xl overflow-hidden'>
      <div>
        <img src='/image-product-mobile.jpg' className='sm:hidden block ' />
        <img src='/image-product-desktop.jpg' className='sm:block hidden' />
      </div>
      <div>TEST</div>
    </div>
  );
}

export default App;

// white: 'hsl(0, 0%, 100%)',
// cream: 'hsl(30, 38%, 92%)',
// green: 'hsl(158, 36%, 37%)',
// grey: 'hsl(228, 12%, 48%)',
// blue: 'hsl(212, 21%, 14%)',
