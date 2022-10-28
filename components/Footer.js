const navigation = [
  { name: "About", href: "#" },
  { name: "Shop", href: "#" },
  { name: "Jobs", href: "#" },
  { name: "Terms and Conditions", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-color font-fancy-font">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          {navigation.map((item, i) => (
            <div className="px-6 py-2" key={i}>
              <a
                href={item.href}
                className="text-secondary-color hover:text-secondary-color"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-secondary-color">
          &copy; 2022 Mesmerra, All right reserved.
        </p>
      </div>
    </footer>
  );
}
