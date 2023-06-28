export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-end w-full h-16 pb-2">
      <div className="flex items-center justify-center">
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <a
            className="hover:underline"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span className="font-bold">Facundo Venturi</span>
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
