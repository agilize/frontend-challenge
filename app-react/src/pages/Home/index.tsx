import "./styles.css";
import Header from "../../components/Header";
import AccountField from "../../components/AccountField";
import UsedValues from "../../components/UsedValues";
import NetSalarySection from "../../components/NetSalarySection";

const Page = () => {
  return (
    <div className="container">

      <div className="container-area">

        <Header />    
      
        <AccountField />
      
        <NetSalarySection />

        <UsedValues />

      </div>
      
    </div>
  );
}

export default Page;
