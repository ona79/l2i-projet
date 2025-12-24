import Layout from "@/components/Layout";
import { Section3_1, Section3_2, Section3_4 } from "@/components/Page3Components";

/**
 * PAGE 3 : LE DEPARTEMENT INFORMATIQUE
 * Cette page est subdivisée en 3 sections chaque section représente un composant React :
 * - Section 1 : présentation du département. (<Section3_1/>)
 * - Section 2 : contact du département avec les icones Facebook, Instagram, tweeter et WhatsApp. (<Section3_2/>)
 * - Section 3 : un petit formulaire (formulaire 2) de prise de contact. (<Section3_4/>)
 */
export default function Departement() {
  return (
    <Layout>
      <div className="flex flex-col">
        {/* Section 1 : présentation du département */}
        <Section3_1 />
        
        {/* Section 2 : contact du département avec les icones */}
        <Section3_2 />
        
        {/* Section 3 : formulaire 2 de prise de contact */}
        <Section3_4 />
      </div>
    </Layout>
  );
}
