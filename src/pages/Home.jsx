import Model from '../assets/model.jpg'
import Watch from '../assets/watch.svg'
import Linen from '../assets/Linen.svg'
import lbox from '../assets/lbox.svg'
import journal from '../assets/Journal.svg'
import philosophy from '../assets/Philosophy.svg'
import leaf from '../assets/leaf.svg'
import star from '../assets/star.svg'
import warranty from '../assets/warranty.svg'



function Home(){
  return (
    <main className="min-h-screen">
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Model})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/80">
            AESTHETICALLY SILENT
          </p>
          <h1 className="text-5xl font-serif uppercase leading-tight text-white md:text-7xl">
            The Noir Collection
          </h1>
          <button className="mt-8 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase text-black shadow-lg shadow-black/20 transition hover:bg-white/90">
            Explore the Monolith
          </button>
        </div>
      </section>

      <section className='bg-white text-black shadow-md shadow-black h-full pb-10'>
        <div className='flex items-center justify-between p-10'>
              <div>
                <h1 className='text-4xl font-[playfair] mb-2 font-semilight'>New Arrivals</h1>
                <p className='font-[playfair] text-gray-600'>Curated essentials for the modern minimalist.</p>
              </div>
              <div>
                <h1 className='border-b-2 text-md hover:border-b cursor-pointer'>VIEW ALL</h1>
              </div>
        </div>
        <div className='px-10 gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
          <div className='w-full hover:shadow-sm shadow-black/50 transition duration-200'>
            <div>
              <img className='w-full' src={Linen} alt="Ether Carafe product image" />
            </div>
            <div className='text-center text-sm pt-3 font-[dominine]'>
              <h3 className='font-semibold'>Ether Carafe</h3>
              <h5>$380</h5>
            </div>
          </div> 

          <div className='w-full hover:shadow-sm shadow-black/50 transition duration-200'>
            <div>
              <img className='w-full' src={Watch} alt="Obsidian Chronograph watch product image" />
            </div>
            <div className='text-center text-sm pt-3 font-[dominine]'>
              <h3 className='font-semibold'>Obsidian Chronograph</h3>
              <h5>$1,520</h5>
            </div>
          </div>

          <div className='w-full hover:shadow-sm shadow-black/50 transition duration-200'>
            <div>
              <img className='w-full' src={Linen} alt="Ether Carafe product image" />
            </div>
            <div className='text-center text-sm pt-3 font-[dominine]'>
              <h3 className='font-semibold'>Ether Carafe</h3>
              <h5>$380</h5>
            </div>
          </div> 

          <div className='w-full hover:shadow-sm shadow-black/50 transition duration-200'>
            <div>
              <img className='w-full' src={Watch} alt="Obsidian Chronograph watch product image" />
            </div>
            <div className='text-center text-sm pt-3 font-[dominine]'>
              <h3 className='font-semibold'>Obsidian Chronograph</h3>
              <h5>$1,520</h5>
            </div>
          </div>         
        </div>
      </section>
  

      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12">
          <div
            className="md:col-span-2 relative h-106 bg-cover bg-center rounded-md overflow-hidden"
            style={{ backgroundImage: `url(${lbox})` }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex h-full flex-col justify-end p-8 text-left text-white">
              <p className="text-xs uppercase tracking-widest text-white/80">HERITAGE</p>
              <h2 className="text-4xl font-serif font-bold leading-tight">The Atelier</h2>
              <button className="mt-4 w-40 rounded border border-white px-4 py-2 text-sm bg-transparent hover:bg-white/10">
                Discover History
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div
              className="relative h-50 bg-cover bg-center rounded-md overflow-hidden"
              style={{ backgroundImage: `url(${philosophy})` }}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10 p-4 text-white text-sm font-semibold">Philosophy</div>
            </div>

            <div
              className="relative h-50 bg-cover bg-center rounded-md overflow-hidden"
              style={{ backgroundImage: `url(${journal})` }}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10 p-4 text-white text-sm font-semibold">Journal</div>
            </div>
          </div>
        </div>
      </section>

    <section className='bg-white text-black py-16 px-6'>
      <div className='w-full gap-12'>
        <div>
          <div className='mb-8'>
            <h1 className='text-4xl text-center font-serif font-bold mb-6'>Quiet Luxury, Defined</h1>
          </div>
          <div className='mb-12'>
            <p className='text-gray-700 text-center leading-relaxed text-lg'>We believe that true sophistication lies in the unseen details. Myster was
              founded on the principle that quality should be felt, not shouted. Our pieces
              are crafted with an obsessive focus on materiality and form, designed to
              exist harmoniously within your world.
            </p>
          </div>
          <div className='grid grid-cols-3 gap-6'>
            <div className='text-center'>
              <img src={star} alt="Artisanal craft icon" className='w-7 h-7 mx-auto mb-3' />
              <h3 className='text-xs font-semibold tracking-widest uppercase'>ARTISANAL CRAFT</h3>
            </div>
            <div className='text-center'>
              <img src={leaf} alt="Sustainably sourced icon" className='w-7 h-7 mx-auto mb-3' />
              <h3 className='text-xs font-semibold tracking-widest uppercase'>SUSTAINABLY SOURCED</h3>
            </div>
            <div className='text-center'>
              <img src={warranty} alt="Lifetime warranty icon" className='w-7 h-7 mx-auto mb-3' />
              <h3 className='text-xs font-semibold tracking-widest uppercase'>LIFETIME WARRANTY</h3>
            </div>
          </div>
        </div>
      </div>
        <div className='mt-18 p-10 rounded-md flex flex-col justify-center'>
          <h2 className='text-3xl font-serif font-bold mb-4'>Join the Inner Circle</h2>
          <p className='text-gray-700 leading-relaxed'>Receive early access to collections and exclusive editorial content</p>
        </div>
    </section>




      
    </main>
  )
}

export default Home