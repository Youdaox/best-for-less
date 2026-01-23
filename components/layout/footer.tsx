const Footer = () => {
  return (
    <div className="max-w-full">
      <div className="bg-border flex flex-col md:flex-row lg:flex-row justify-center mx-30 rounded-lg">
        <div className="container mx-auto flex justify-center px-24 flex-col mt-10 py-6">
          <h1 className="text-3xl font-bold">Contact us</h1>
          <ul>
            <li>Email: email@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Main St</li> 
          </ul>
        </div>
        <div className="container mx-auto flex justify-center px-24 flex-col mt-10 py-6">
          <h1 className="text-3xl font-bold">FAQ</h1>
          <ul>
            <li>Email: email@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Main St</li> 
          </ul>
        </div>
        <div className="container mx-auto flex justify-center px-24 flex-col mt-10 py-6">
          <h1 className="text-3xl font-bold">Services</h1>
          <ul>
            <li>Moving services</li>
            <li>Packing services</li>
            <li>Storage services</li> 
          </ul>
        </div>
      </div>
      <footer className="w-full bg-background/50 border-t border-border mt-10">
        <div className="mx-auto py-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Best For Less.
        </div>
      </footer>
    </div>
  );
};

export default Footer;