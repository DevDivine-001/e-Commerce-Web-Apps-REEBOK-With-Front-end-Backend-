

const Homepage = () => {
  return (
  <div>
    <div className="relative h-32 w-32 ...">
  <div className="absolute left-0 top-0 h-16 w-16 ...">01</div>
</div>

{/* <!-- Span top edge --> */}
<div className="relative h-32 w-32 ...">
  <div className="absolute inset-x-0 top-0 h-16 ...">02</div>
</div>

{/* <!-- Pin to top right corner --> */}
<div className="relative h-32 w-32 ...">
  <div className="absolute top-0 right-0 h-16 w-16 ...">03</div>
</div>

{/* <!-- Span left edge --> */}
<div className="relative h-32 w-32 ...">
  <div className="absolute inset-y-0 left-0 w-16 ...">04</div>
</div>

{/* <!-- Fill entire parent --> */}
<div className="relative h-32 w-32 ...">
  <div className="absolute inset-0 ...">05</div>
</div>

{/* <!-- Span right edge --> */}
<div className="relative h-32 w-32 ...">
  <div className="absolute inset-y-0 right-0 w-16 ...">06</div>
</div>

{/* <!-- Pin to bottom left corner --> */}
<div className="relative h-32 w-32 ...">
  <div className="absolute bottom-0 left-0 h-16 w-16 ...">07</div>
</div>

{/* <!-- Span bottom edge --> */}
<div className="relative h-32 w-32 ...">
  <div className="absolute inset-x-0 bottom-0 h-16 ...">08</div>
</div>

{/* <!-- Pin to bottom right corner --> */}
<div className="relative h-32 w-32 ...">
  <div className="absolute bottom-0 right-0 h-16 w-16 ...">09</div>
</div>
  </div>
  )
}

export default Homepage