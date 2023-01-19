export default function Header({ title = "Payement Mania Mantap" }) {
  return (
    <header className="fixed top-0 z-50  w-full border-b bg-white py-4 dark:border-none dark:bg-primary">
      <div className="container mx-auto flex flex-row items-center justify-between px-4">
        <div className="gap- flex flex-row items-center gap-5 lg:gap-10">
          <span className="flex-row gap-2 capitalize lg:flex">{title}</span>
        </div>
      </div>
    </header>
  );
}
