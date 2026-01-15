export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 py-8 text-white bg-gray-900 lg:px-8 lg:pl-24">
      <div className="max-w-6xl mx-auto text-center">
        <p className="animate-fade-in-up">
          &copy; {year} Reyhand Astra. Built with passion and lots of coffee ☕
        </p>
      </div>
    </footer>
  );
}
