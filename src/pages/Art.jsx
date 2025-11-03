export default function Art() {
  // Explicit list for mixed file extensions and skipped numbers
  const artworks = [
    "mzgallery1.png",
    "mzgallery2.png",
    "mzgallery3.png",
    "mzgallery4.png",
    "mzgallery5.png",
    "mzgallery6.png",
    "mzgallery7.png",
    "mzgallery8.JPG",
    "mzgallery9.JPG",
    "mzgallery10.JPG",
    "mzgallery12.png",
  ].map((file, i) => ({
    src: `${import.meta.env.BASE_URL}${file}`,
    title: `Artwork ${i + 1}`,
  }));

  return (
    <>
      <style>{`
        .masonry {
          column-count: 4;
          column-gap: 1.5rem;
          padding: 140px 1rem 2rem; 
        }
        @media (max-width: 1200px) { .masonry { column-count: 3; } }
        @media (max-width: 900px)  { .masonry { column-count: 2; } }
        @media (max-width: 600px)  { .masonry { column-count: 1; } }

        .masonry-item {
          break-inside: avoid;
          margin: 0 0 1.5rem;
          overflow: hidden;
          border-radius: 1rem;
          box-shadow: 0 4px 10px rgba(0,0,0,.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: #111;
        }

        .masonry-item img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 1rem;
          transition: transform 0.3s ease;
        }

        .masonry-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,.6);
        }

        .masonry-item:hover img {
          transform: scale(1.05);
        }

        .art-header {
          text-align: center;
          margin-top: 100px;
          margin-bottom: 1.5rem;
        }
        .art-sub {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 2rem;
          color: #ddd;
        }
      `}</style>

      <h1 className="art-header">Welcome to My Art Gallery!</h1>
      <p className="art-sub">A collection of my digital pieces and creative sketches.</p>

      <div className="masonry">
        {artworks.map((art, i) => (
          <div key={i} className="masonry-item">
            <img src={art.src} alt={art.title} loading="lazy" />
          </div>
        ))}
      </div>
    </>
  );
}
