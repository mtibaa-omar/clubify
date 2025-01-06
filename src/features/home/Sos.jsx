import HomeRow from "../../ui/HomeRow";
import HomeCard from "./HomeCard";

function Sos() {
  return (
    <div>
      <HomeCard>
        <p>Club sos, قلوب وحدة و هدف واحد</p>
        <p>Club sos, املنا كبير و عطاؤنا أكبر</p>
        <p>Club sos, يوصل الفكرة لكل الناس</p>
      </HomeCard>

      <div className="flex flex-col gap-4 mt-2 sm:mt-4 sm:grid sm:grid-cols-2">
        <HomeRow title="Notre Vision">
          Chaque enfant a sa place dans une famille et grandit dans un climat
          d&apos;affection,de respect et de sécurité.
        </HomeRow>
        <HomeRow title="Notre Mission">
          Nous donnons une famille aux enfants en difficulté, les aidons à bâtir
          leur propre avenir et participons au développement des communautés
          locales.
        </HomeRow>
        <HomeRow title="Notre Objectif">
          Nous prenons actuellement soin de 5083 enfants dans les villages SOS
          et notre objectif est d&apos;atteindre 8000 enfants.
        </HomeRow>
        <HomeRow title="Nos Valeurs">
          <p>Courage</p>
          <p>Engagement</p>
          <p>Confiance</p>
          <p>Responsabilité</p>
        </HomeRow>
      </div>
    </div>
  );
}

export default Sos;
