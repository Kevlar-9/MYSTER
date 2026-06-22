import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'




function Collections() {
  const navItems = ['All Items', 'Apparel', 'Objects', 'Textiles', 'Fragrance']

  return (
    <div className='bg-white text-black'>
      <Header />

      <main className='mx-auto max-w-7xl px-6 py-12'>
        <section className='grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-end'>
          <div className='space-y-3'>
            <p className='text-sm text-gray-500 tracking-[2.8px] uppercase'>THE CURATED ARCHIVE</p>
            <h1 className='font-[playfair] font-bold tracking-[-0.96px] text-5xl'>Essential Collection</h1>
          </div>

          <p className='text-gray-500 max-w-xl leading-7'>
            A definitive selection of foundational pieces, designed for longevity and defined by meticulous craftsmanship.
            Silent statements for the modern aesthetic.
          </p>
        </section>

        <section className='mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex flex-wrap gap-3'>
            {navItems.map((item) => (
              <button
                key={item}
                className='rounded-full border border-gray-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gray-600 transition hover:border-black hover:text-black'
                type='button'
              >
                {item}
              </button>
            ))}
          </div>

          <div className='flex items-center gap-3 text-sm text-gray-600'>
            <span>Sort by:</span>
            <select className='rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:outline-none'>
              <option>Newest</option>
              <option>Best Sellers</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </section>

        <section className='mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
          {Array.from({ length: 6 }).map((_, index) => (
            <article key={index} className='overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg'>
              <div className='h-80 bg-gray-100' />
              <div className='space-y-3 p-6'>
                <p className='text-xs uppercase tracking-[0.24em] text-gray-500'>Collection Piece</p>
                <h2 className='text-xl font-semibold text-black'>Essential Item {index + 1}</h2>
                <p className='text-sm leading-6 text-gray-600'>A minimal and enduring piece that fits the quiet luxury of the collection.</p>
              </div>
            </article>
          ))}
        </section>

        <section className='mt-14 border-t border-gray-200 py-10'>
          <div className='mx-auto flex max-w-fit items-center gap-4'>
            <button
              type='button'
              className='rounded-full border border-gray-300 px-3 py-2 text-sm text-gray-600 transition hover:border-black hover:text-black'
              aria-label='Previous page'
            >
              ‹
            </button>
            <div className='inline-flex items-center gap-3 rounded-full border border-gray-300 bg-white px-4 py-2'>
              <button className='h-10 w-10 rounded-full bg-black text-white'>1</button>
              <button className='h-10 w-10 rounded-full text-gray-700 transition hover:bg-gray-100'>2</button>
              <button className='h-10 w-10 rounded-full text-gray-700 transition hover:bg-gray-100'>3</button>
            </div>
            <button
              type='button'
              className='rounded-full border border-gray-300 px-3 py-2 text-sm text-gray-600 transition hover:border-black hover:text-black'
              aria-label='Next page'
            >
              ›
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Collections