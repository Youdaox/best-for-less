const Footer = () => {
  return (
    <div>
      <div className="bg-border mt-100 flex flex-row justify-center mx-30 rounded-lg">
        <div className="container mx-auto flex justify-center px-24 flex-col mt-10 py-6">
          <h1>Contact us</h1>
          <ul>
            <li>Email: email@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Main St</li> 
          </ul>
        </div>
        <div className="container mx-auto flex justify-center px-24 flex-col mt-10 py-6">
          <h1>FAQ</h1>
          <ul>
            <li>Email: email@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Main St</li> 
          </ul>
        </div>
        <div className="container mx-auto flex justify-center px-24 flex-col mt-10 py-6">
          <h1>Services</h1>
          <ul>
            <li>Moving services</li>
            <li>Packing services</li>
            <li>Storage services</li> 
          </ul>
        </div>
        </div>
      <footer className="w-full bg-background/50 border-t border-border mt-10">
        <div className="max-w-7xl mx-auto py-6 px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Best For Less.
        </div>
      </footer>
    </div>
  );
};

export default Footer;