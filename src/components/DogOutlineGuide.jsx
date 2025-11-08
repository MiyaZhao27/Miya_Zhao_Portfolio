import { useState } from "react";

export default function DogOutlineGuide({ sections }) {
  const [showOutline, setShowOutline] = useState(false);

  const scrollToSection = (title) => {
    let id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const outlineItemStyle = {
    display: "block",
    padding: "clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.4rem, 1.2vw, 0.5rem)",
    color: "#ddd",
    textDecoration: "none",
    fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
    lineHeight: "1.4",
    cursor: "pointer",
    borderRadius: "6px",
    transition: "all 0.2s ease",
    marginBottom: "0.25rem",
  };

  return (
    <>
      <style>{`
        .dog-guide-container {
          position: fixed;
          bottom: 20px;
          left: 20px;
          z-index: 1000;
        }
        
        .dog-content-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        
        .speech-bubble {
          background: white;
          color: #333;
          padding: 8px 16px;
          border-radius: 18px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          position: relative;
          align-self: center;
        }
        
        .speech-bubble::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid white;
        }
        
        .dog-icon {
          width: 120px;
          height: 120px;
          cursor: pointer;
          transition: transform 0.2s ease;
          align-self: center;
        }
        
        .dog-icon:hover {
          transform: scale(1.1);
        }
        
        @media (max-width: 768px) {
          .dog-guide-container {
            bottom: 15px;
            left: 15px;
          }
          
          .dog-icon {
            width: 80px;
            height: 80px;
          }
          
          .speech-bubble {
            font-size: 0.75rem;
            padding: 6px 12px;
          }
        }
        
        @media (max-width: 480px) {
          .dog-guide-container {
            bottom: 10px;
            left: 10px;
          }
          
          .dog-icon {
            width: 60px;
            height: 60px;
          }
          
          .speech-bubble {
            font-size: 0.7rem;
            padding: 5px 10px;
          }
        }
        
        .dog-outline-sidebar {
          position: absolute;
          bottom: 100%;
          left: 0;
          background: #1a1a1a;
          border: 2px solid #666;
          border-radius: 12px;
          padding: 1.5rem;
          width: max-content;
          min-width: 250px;
          max-width: 400px;
          max-height: 400px;
          overflow-y: auto;
          margin-bottom: 10px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.5);
          animation: slideIn 0.3s ease-out;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .dog-outline-sidebar h3 {
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.1rem;
          color: #fff;
        }
        
        .dog-outline-section:not(:first-child) h3 {
          margin-top: 1.5rem;
        }
        
        @media (max-width: 1024px) {
          .dog-guide-container {
            position: relative;
            top: 0;
            left: 0;
            margin-bottom: 2rem;
          }
          
          .dog-outline-sidebar {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            width: 100% !important;
            max-width: 100% !important;
            margin-bottom: 1rem !important;
          }
        }
      `}</style>

      <div className="dog-guide-container">
        <div className="dog-content-wrapper">
          {showOutline && (
            <div className="dog-outline-sidebar">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="dog-outline-section">
                  <h3>{section.title}</h3>
                  {section.items.map((item, idx) => (
                    <a
                      key={idx}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item);
                      }}
                      style={outlineItemStyle}
                      onMouseEnter={(e) => {
                        e.target.style.background = "#333";
                        e.target.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "transparent";
                        e.target.style.color = "#ddd";
                      }}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
          <div className="speech-bubble">need a guide?</div>
          <img 
            src={`${import.meta.env.BASE_URL}inloveplushearts.png`}
            alt="Guide dog"
            className="dog-icon"
            onClick={() => setShowOutline(!showOutline)}
          />
        </div>
      </div>
    </>
  );
}
