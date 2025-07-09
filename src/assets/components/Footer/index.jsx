import NavbarList from "../NavbarList";
import "./index.css";
import Mail from "../../../assets/images/mail.svg";
import Ado from "../../../assets/images/ado.svg";
import Cloud from "../../../assets/images/cloud.svg";
import Label from "../../../assets/images/label.svg";

const Footer = () => {
  return (
    <footer className="footer-style">
      <main className="main-style">
        <div>
            <NavbarList className="footer-1" label="Company" href="/Company" />
            <NavbarList className="footer" label="Us" href="/Company" />
            <NavbarList className="footer" label="Our services" href="/Company" />
            <NavbarList className="footer" label="Privacy policies" href="/Company" />
            <NavbarList className="footer" label="Affiliate" href="/Company" />
        </div>
        <div>
            <NavbarList className="footer-1" label="Help" href="/Help" />
            <NavbarList className="footer" label="Questions" href="/Company" />
            <NavbarList className="footer" label="Shopping" href="/Company" />
            <NavbarList className="footer" label="Shipments" href="/Company" />
            <NavbarList className="footer" label="Order status" href="/Company" />
            <NavbarList className="footer" label="Pay" href="/Company" />
        </div>
        <div>
            <NavbarList className="footer-1" label="Shop" href="/Shop" />
            <NavbarList className="footer" label="Clothes" href="/Company" />
            <NavbarList className="footer" label="Mens" href="/Company" />
            <NavbarList className="footer" label="Women" href="/Company" />
        </div>
        <div>
            <NavbarList className="footer-1" label="Follow us" href="/Follow_s" />
            <main className="main-footer">
                <div className="img-footer"><img src={Ado} alt="" /></div>
                <div className="img-footer"><img src={Cloud} alt="" /></div>
                <div className="img-footer"><img src={Label} alt="" /></div>
                <div className="img-footer"><img src={Mail} alt="" /></div>
            </main>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
