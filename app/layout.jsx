import "../styles/globals.css";
import Header from "/components/header";
import Footer from "/components/footer";
import Loading from "./loading";

const RootLayout = ({ children }) => {
  return (
    <html>
      <body className="font-serif">
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
};

export default RootLayout;
