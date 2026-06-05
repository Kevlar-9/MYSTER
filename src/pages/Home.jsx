import Model from '../assets/model.jpg'
function Home(){
  return (
    <main className="min-h-screen">
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Model})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
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

      <section>
    <div className="carousel carousel-center w-full  gap-2">
  <div className="carousel-item">
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
  </div>
  </div>
  
    <div className="carousel-item">
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
  </div>
  </div>

    <div className="carousel-item">
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
  </div>
  </div>

    <div className="carousel-item">
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
  </div>
  </div>

    <div className="carousel-item">
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
  </div>
  </div>

</div>
      </section>

      
    </main>
  )
}

export default Home