export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center animate-spin">
      <div className="w-40 h-40 border-t-4 border-b-4 rounded-full animate-breath border-violet-700"></div>
    </div>
  );
}
