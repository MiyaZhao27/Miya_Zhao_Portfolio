export default function Art() {
  const artworks = Array.from({ length: 12 }, (_, i) => ({
    title: `Piece ${i + 1}`,
    // random-ish heights for the collage look
    height: [160, 180, 220, 260, 300][Math.floor(Math.random() * 5)],
  }));

  return (
    <>
      {/* Masonry styles (scoped to this page) */}
      <style>{`
        .masonry {
          column-count: 4;
          column-gap: 1.5rem;
          padding-top: 100px; /* keep content below fixed header */
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
          margin: 0 0 1.5rem;
        }
        .art-sub {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 2rem;
        }
      `}</style>

      <h1 className="art-header">Art Portfolio</h1>
      <p className="art-sub">A collage-style gallery with varied piece sizes.</p>

      <div className="masonry">
        {artworks.map((art, i) => (
          <div
            key={i}
            className="masonry-item"
            style={{ height: art.height }}
            title={art.title}
          >
            {art.title}
          </div>
        ))}
      </div>
    </>
  );
}
