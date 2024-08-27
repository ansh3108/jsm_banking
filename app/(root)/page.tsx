import Headerbox from "@/components/Headerbox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Ansh" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Headerbox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox />
        </header>
      </div>
    </section>
  );
};

export default Home;
