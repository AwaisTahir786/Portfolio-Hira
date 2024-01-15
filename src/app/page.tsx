import Header from "./components/header";
import NavbarUi from "./components/navbarUi";
import AboutMe from "./components/aboutMe";
import ProjetsSection from "./components/projetsSection";
import EmailSection from "./components/emailSection";
import Footer from "./components/footer";
import AchievementsSection from "./components/achievementsSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-[#00000]">
      <div>
        <NavbarUi />
      </div>
      <div className="container mx-auto py-12 px-4 mt-24">
        <Header />
        <AchievementsSection />
        <AboutMe />
        <ProjetsSection/>
        < EmailSection />
      </div>
      <Footer />
    </main>
  );
}
