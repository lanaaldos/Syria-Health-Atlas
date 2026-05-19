export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b1020",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Syria Health Atlas
        </h1>

        <p
          style={{
            fontSize: "24px",
            lineHeight: "1.6",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          A humanitarian health workforce platform connecting Syrian diaspora
          physicians with areas of greatest medical need across Syria.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              backgroundColor: "#2563eb",
              border: "none",
              padding: "16px 28px",
              borderRadius: "12px",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Join the Network
          </button>

          <button
            style={{
              backgroundColor: "transparent",
              border: "1px solid #475569",
              padding: "16px 28px",
              borderRadius: "12px",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            View Health Map
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px 100px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        {[
          {
            title: "Interactive Health Map",
            text: "Visualize physician shortages, specialty gaps, and healthcare access challenges across Syria.",
          },
          {
            title: "Diaspora Physician Network",
            text: "Connect Syrian physicians worldwide with hospitals, NGOs, and healthcare initiatives.",
          },
          {
            title: "Telemedicine Support",
            text: "Enable remote consultations, mentorship, and specialist support for underserved communities.",
          },
          {
            title: "Health Systems Recovery",
            text: "Support long-term rebuilding of Syria’s healthcare workforce and infrastructure.",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#111827",
              padding: "28px",
              borderRadius: "20px",
              border: "1px solid #1e293b",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                marginBottom: "16px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.7",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </section>

      {/* MISSION SECTION */}
      <section
        style={{
          backgroundColor: "#111827",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "24px",
            }}
          >
            Rebuilding Healthcare Through Connection
          </h2>

          <p
            style={{
              fontSize: "20px",
              color: "#cbd5e1",
              lineHeight: "1.8",
            }}
          >
            Syria Health Atlas was created to support healthcare recovery by
            connecting Syrian diaspora physicians with communities and
            healthcare facilities facing critical shortages. By combining health
            systems data, humanitarian coordination, and physician engagement,
            the platform aims to strengthen access to care across conflict and
            post-conflict settings.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "40px",
          textAlign: "center",
          color: "#94a3b8",
          fontSize: "14px",
        }}
      >
        Syria Health Atlas © 2026
      </footer>
    </main>
  );
}
