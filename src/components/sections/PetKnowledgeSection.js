// src/components/PetKnowledgeSection.js
import React from "react";
import PetKnowledgeCard from "../PetKnowledgeCard";

const petKnowledgeData = [
  {
    title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
    description:
      "The Pomeranian, also known as the Pom dog, is always one of the top cutest pets. The small, lovely, smart, friendly, and skillful dog is a favorite among pet lovers.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/164b/8551/c113c74555b6aeaec9a5b979c2ee53d4?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hsRWAQrWUe9iupTxSSoCIX2vgcBsCnGmLng-akJZoUDtAB5icJez8LoTcPQYmEVyHSrZift9Y-9cQoD5IZMcnXfGqJeTI2IK7TaD3p9Bl546kqX6VG~tWi~EhLoZZyGZOPaFW1xO1QYOHFNi8yz-ZEkSBFNjb~Ug36uxTCKhQM9PNRF7~-w9nXKGezjDBCVN3KLUU33wgCEwb3SRfXcCPZO-LZOnIc~8s0jrpLq1MnIGu3X6LG8TSsYisWrqdYn0~JBBVdKZM05JezLO2He3llzKjrI1ZCi-hKqJzuDBaHhhzU3Ys34JHswL0hraJ6TvYUbC7TzF-T5tsXGfVPeyUg__",
    tag: "Pet knowledge",
  },
  {
    title: "Dog Diet You Need To Know",
    description:
      "Dividing a dog's diet may seem simple, but there are some rules you should know so that your dog can easily absorb the nutrients.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5e97/6f4f/0a476f3dabcbcedb02310d51a05973ad?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Apm52RBuDHoa7iRy~lDgmm1K-zljgshyEy3DtkuN4lWvrliSQGexbqnfq5fdKiipMVct0YLexk5g2hjMf8jqklsrSNcE8krX2P5yQIWjnluAVS1e3tT6pyOYJ4boUNr0bJXoXrfej7PLNxMz21a~w7LyFxmxw-SRAZ8JiVMAkBNWMwvPZpowjVJ-mpeBrQFV~5oboHWYdNAq0HX0vIXaOepynLz1JLssb--Iu6mbuEtMp9WQO6aDrpYr-I~0hURDmZStt9GLKESmvkfMDPxaZevouKHxL-Ka794s69kjbDiw9ork~GAjV-~jJ4clAMZOKgsX-KP3Bmq4hrz2gJ1JUA__",
    tag: "Pet knowledge",
  },
  {
    title:
      "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
    description:
      "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/9c94/ebaa/40056d6caaf1af31cf6dd3725c34eb7f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J70gJS7oN75s3fHGhIBonrsiTxnn35j02vqiAGh0SDpmcI0TMc0f6esJ4QA8sY7T4A9JGkbOGe6gU5w4CYd49~mPnstCun4k5EJE7UIY3N7O3IgBTk71TWsqzSXpUlgSLFCmVZgznjsxKZqvOV-2GXv1yEeSTAL~WVBAnj-n3yRxCT7pnVis~IHE-PzXJLdYLb2v3f90k3mA3OqqkqNoT~bXCpx2KSrxIHEKX-cZGQ7PeVdfPSVNDVHFswLoTmeoQs6WuKivnryGW8McPLWqMoLr33G4SDkGXIkPznNlEflzGSegm-Pw-mCgoXW~Vuj4UwFxA3lBL8Hag7ccipJfbQ__",
    tag: "Pet knowledge",
  },
];

const PetKnowledgeSection = () => {
  return (
    <div className="container mx-auto px-[130px] py-8 bg-white pb-20">
      <div className="mb-6">
        <p className="text-gray-500 text-[16px]">You already know?</p>
        <div className="flex flex-row justify-between">
          <h1 className="text-[24px] font-bold text-blue-950">
            Useful Pet Knowledge
          </h1>
          <button className="bg-white text-blue-950 font-medium border-2 border-blue-950 w-[151px] h-[44px] flex items-center justify-center space-x-2 rounded-full  hover:bg-blue-50">
            <span className="text-blue-950 font-medium text-[14px]">
              View more &gt;
            </span>
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        {petKnowledgeData.map((item, index) => (
          <PetKnowledgeCard
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            tag={item.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default PetKnowledgeSection;
