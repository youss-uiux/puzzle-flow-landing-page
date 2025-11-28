import Orb from './Orb';

function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div
        style={{ width: '100%', height: '100%', position: 'absolute' }}
        className="pointer-events-auto"
      >
        <Orb
          hoverIntensity={0.8}
          rotateOnHover={true}
          hue={240}
          forceHoverState={false}
        />
      </div>
      {/* Overlay très subtil pour ne pas masquer l'Orb */}
    </div>
  );
}

export default Background;


