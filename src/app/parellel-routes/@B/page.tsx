export default async function Slot() {
  await new Promise((r) => setTimeout(r, 3000));
  return <div className="w-90 h-48 rounded-xl border-2 border-green-200 shadow-xl flex items-center justify-center">
    Loaded Component B</div>;
}
