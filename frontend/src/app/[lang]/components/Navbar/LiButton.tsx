export default function LiButton() {
  return (
    <>
      <span className="border-l border-gray-400 h-"></span>

      <li className="flex">
        <button
          className={`flex items-center mx-4 -mb-1  dark:border-transparent`}
        >
          {'Call me'}
        </button>
      </li>

      <span className="border-l border-gray-400 h-"></span>

      <li className="flex">
        <div
          className={`flex items-center mx-4 -mb-1  dark:border-transparent`}
        >
          {'+7 (911) 818-34-10'}
        </div>
      </li>
    </>
  );
}
