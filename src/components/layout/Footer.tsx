const Footer = () => {
  return (
    <footer className="border-t bg-background mt-12">
      <div className="container py-10 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <h3 className="font-semibold text-foreground">Vinayak Supermarket</h3>
          <p className="text-muted-foreground">Since 1997 • Hazira, Gujarat</p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Contact</h4>
          <address className="not-italic text-muted-foreground leading-7">
            Hazira, Surat, Gujarat, India
            <br />
            Phone: +91 98765 43210
            <br />
            Email: hello@vinayaksupermarket.in
          </address>
        </div>
        <div>
          <h4 className="font-medium mb-2">Hours</h4>
          <p className="text-muted-foreground leading-7">
            Mon–Sun: 8:00 AM – 9:30 PM
          </p>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vinayak Supermarket. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
