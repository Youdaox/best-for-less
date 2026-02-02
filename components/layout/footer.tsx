import { Separator } from "@radix-ui/react-separator";
import {
  RiWechatFill as WechatFillIcon,

} from "@remixicon/react";


const Footer = () => {
  return (
    <footer className="max-w-full bg-slate-800">
      <div className="flex flex-row justify-around items-start p-12 rounded-lg text-white">
        <div className="max-w-sm gap-2 flex flex-col">
          <h1 className="text-4xl font-extrabold">BEST FOR LESS</h1>
          <p className="my-4">Best for Less mover is a Man with a Van business with over 20 years of professionalism. We are equipped with a team of experienced workers and a 20 cubic metre truck ready to handle your move.</p>
          <div className="flex flex-row gap-4">
            <WechatFillIcon size={30} />
            <WechatFillIcon size={30} />
            <WechatFillIcon size={30} />
          </div>
        </div>
        <div className="flex flex-row justify-between items-start gap-50">
          <div className="container flex justify-center flex-row">
            <div>
              <h1 className="text-3xl font-bold">Contact us</h1>
              <ul>
                <li>Email: email@example.com</li>
                <li>Phone: +1 234 567 890</li>
                <li>Address: 123 Main St</li> 
              </ul>
            </div>
          </div>
          <div className="container flex justify-center flex-col">
            <h1 className="text-3xl font-bold">Services</h1>
            <ul>
              <li>Moving services</li>
              <li>Packing services</li>
              <li>Storage services</li> 
            </ul>
          </div>
        </div>
      </div>
      <Separator className="mx-auto max-w-7xl p-px rounded-2xl bg-white/10"/>
      <div className="mx-auto py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Best For Less.
      </div>
    </footer>
  );
};

export default Footer;