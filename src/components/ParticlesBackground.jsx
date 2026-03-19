import './ParticlesBackground.css';

const ParticlesBackground = () => {
  return (
    <div className="particles-bg">
      <div className="particles-container">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              '--delay': `${i * 0.05}s`,
              '--duration': `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticlesBackground;
