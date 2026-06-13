import Model from '../assets/model.jpg'

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

      <section className='bg-white text-black shadow-md shadow-black h-full'>
        <div className='flex items-center justify-between p-10'>
              <div>
                <h1 className='text-4xl font-[playfair] mb-2 font-semilight'>New Arrivals</h1>
                <p className='font-[playfair] text-gray-600'>Curated essentials for the modern minimalist.</p>
              </div>
              <div>
                <h1 className='border-b-2 text-md hover:border-b'>VIEW ALL</h1>
              </div>
        </div>
        <div className='px-10 flex'>
          <div className='w-full'>1</div>
          <div className='w-full'>2</div>
          <div className='w-full'>3</div>
          <div className='w-full'>4</div>
        </div>
      </section>
  







      
    </main>
  )
}

export default Home