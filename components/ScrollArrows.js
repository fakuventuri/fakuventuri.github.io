export default function ScrollArrows({
  isArrowVisible,
  topArrowVisible,
  setOpen,
  scrollToParam,
}) {
  return (
    <>
      <div className={"fixed justify-center bottom-5 right-1/2 left-1/2"}>
        <div
          className={`bg-neutral-950 p-2 w-10 h-10 ring-1 ring-slate-200/20 shadow-neutral-800 shadow-lg rounded-full flex items-center justify-center md:cursor-pointer ${
            isArrowVisible ? "animate-bounce" : "animate-fadeOut"
          }`}
          onClick={() => {
            scrollToParam("skills");
          }}
        >
          <svg
            className="w-6 h-6 text-violet-700"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <div className={"fixed justify-center bottom-5 right-5"}>
        <div
          className={`animate-bounce bg-neutral-950 p-2 w-10 h-10 ring-1 ring-slate-200/20 shadow-neutral-800 shadow-lg rounded-full flex items-center justify-center md:cursor-pointer ${
            topArrowVisible ? "animate-fadeIn" : "invisible"
          }`}
          onClick={() => {
            scrollToParam("top");
            setOpen(false);
          }}
        >
          <svg
            className="w-6 h-6 text-violet-700"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M15.5 16.5L12 13L8.5 16.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />{" "}
            <path
              d="M15.5 10.5L12 7L8.5 10.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
