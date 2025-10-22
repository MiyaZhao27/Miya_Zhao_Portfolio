export default function Art() {
  const artworks = Array.from({ length: 12 }, (_, i) => ({
    title: `Piece ${i + 1}`,
    height: [160, 180, 220, 260, 300][Math.floor(Math.random() * 5)],
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
          border-radius: 1rem;
          box-shadow: 0 4px 10px rgba(0,0,0,.3);
          background: #1e90ff;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
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
        }
      `}</style>

      <h1 className="art-header">Welcome to My Art Gallery!</h1>
      <p className="art-sub">take a peak hehe </p>

      <div className="masonry">
        {artworks.map((art, i) => (
          <div
            key={i}
            className="masonry-item"
            style={{ height: art.height }}
          >
            {art.title}
          </div>
        ))}
      </div>
    </>
  );
}
