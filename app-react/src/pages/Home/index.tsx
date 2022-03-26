import "./styles.css";
import border from '../../assets/border.png';
import Header from "../../components/Header";
import AccountField from "../../components/AccountField";
import UsedValues from "../../components/UsedValues";

const Page = () => {
  return (
    <div className="container">

      <div className="calculation-fields">
        <Header />      
        <AccountField />
      </div>
      

      <section>
        <div className="net-salary">

          <span>Seu salário liquido será</span>
          <span className="net-salary--value"> --</span>

        </div>
      </section>

      <section>
        <UsedValues />
      </section>


    </div>
  );
}

export default Page;
