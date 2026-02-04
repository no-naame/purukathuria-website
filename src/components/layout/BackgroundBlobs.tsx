export function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="blob top-[-200px] left-[-200px]" />
      <div className="blob bottom-[-200px] right-[-200px]" />
    </div>
  );
}
