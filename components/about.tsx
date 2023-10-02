"use client";


import React from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
        ref={ref} 
        className="mb-28 max-w-[45rem]
        text-center leading-8 sm:mb-40
        scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175}}
        id="about"
        >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3 font-bold">
            After spending 15 years in the{" "}
            <span className="font-medium">Restaurant</span> industry, I decided to embark on a 
            new challenge and become a web developer. I enrolled in several courses on the{" "}
            <span className="font-medium">Udemy</span> platform and learned{" "}
            <span className="font-medium">full-stack web development</span>.{" "}
            <span className="italic">What I love most about programming</span>{" "}
            is problem-solving.{" "}
            <span className="underline">I enjoy</span>{" "}
            the feeling of finally finding a solution to a problem. My core stack is{" "}
            <span className="font-medium">
            React, Next.js and, Tailwind CSS
            </span>
            . I also have experience with Typescript, Python and, Django. 
            I'm always eager to learn new technologies. Currently, I'm on the lookout for{" "}
            <span className="font-medium">projects</span> and, just like in my previous
             profession, I aim to meet my clients' expectations to the best of my abilities.
        </p>
        <p>
            <span className="italic">When I'm not coding</span>, I enjoy watching movies and TV 
            series (Team Marvel). I also like going out with my friends and{" "}
            <span className="font-medium">traveling</span>{" "}
            to explore new cultures and meet new people.
        </p>
    </motion.section>
  )
}



// "use client";


// import React from "react"
// import SectionHeading from "./section-heading"
// import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";

// export default function About() {
//   const { ref } = useSectionInView('About');

//   return (
//     <motion.section
//         ref={ref} 
//         className="mb-28 max-w-[45rem]
//         text-center leading-8 sm:mb-40
//         scroll-mt-28"
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.175}}
//         id="about"
//         >
//         <SectionHeading>About me</SectionHeading>
//         <p className="mb-3">
//             Après avoir passé 15 ans dans la{" "}
//             <span className="font-medium">Restauration</span>, j'ai décidé de me lancer dans
//             un nouveau défi et de devenir développeur web. Je me suis inscrit à plusieurs 
//             cours sur la plateforme{" "}
//             <span className="font-medium">Udemy</span> et j'ai appris{" "}
//             <span className="font-medium">le développement web full-stack</span>.{" "}
//             <span className="italic">Ce que je préfère dans la programmation</span>{" "}
//             c'est l'aspect résolution de problèmes.{" "}
//             <span className="underline">J'aime</span>{" "}
//             le sentiment de trouver enfin une 
//             solution à un problème. J'utilise principalement{" "}
//             <span className="font-medium">
//             React, Next.js et, Tailwind CSS
//             </span>
//             . Je connais également Typescript, Python et son framework Django.
//             Je cherche toujours à apprendre de nouvelles technologies. Je suis actuellement à la recherche de{" "}
//             <span className="font-medium">missions</span> et, comme 
//             dans mon métier précédent, je veux pouvoir répondre au mieux aux attentes de mes 
//             clients.
//         </p>
//         <p>
//             <span className="italic">Quand je ne code pas</span>, j'aime regarder des films 
//             et des séries (Team Marvel). J'aime aussi sortir voir mes amis et{" "}
//             <span className="font-medium">voyager</span>{" "}
//             pour découvrir de nouvelles cultures et rencontrer de nouvelles personnes.
//         </p>
//     </motion.section>
//   )
// }