import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import type { JSX } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi";

const aboutcardinfo = [
    {
        icon: HiAcademicCap,
        title: "Educação & Credenciais",
        subtitle: "Licenciado em Psicologia pela Universidade Independente de Angola, CEP: Nº003973. Formado em Programação Neurolinguística - PNL e Hipnoterapia Clínica & Classica"
    },
    {
        icon: BsFillPeopleFill,
        title: "Abordagem Psicologica",
        subtitle: "Minha abordagem integrativa combina a clareza da Terapia Cognitivo-Comportamental, a praticidade da PNL e a profundidade da Hipnoterapia Clínica, ajudando você a transformar pensamentos, emoções e comportamentos de forma rápida e duradoura."
    },
]

export function AboutCard():JSX.Element {
    return (
        <Flex data-aos="fade-left" data-aos-duration="1200" data-delay="500"  align={"center"} justify={"center"} flexDir="column" gap={6} paddingLeft={{base: "none", md: "none", lg: 32}}>
            {aboutcardinfo.map((item, index) => (
                <Flex align={{base: "center", md: "start", lg: "start"}} flexDir={{base: "column", md: "row", lg: "row"}} h={{base: "15rem", md: "11rem", lg: "11rem"}} key={index} gap={{base: 4, md: 8, lg: 8}} p={4} bgColor="gray.100" borderRadius={16} boxShadow={"sm"} borderLeftWidth={5} borderColor={"blue.600"}>
                    <Icon as={item.icon} boxSize={{base: 9, md: 6, lg: 6}} color={"blue.600"} />
                    <Flex textAlign={{base: "center", md: "start", lg: "start"}} flexDir="column" align={{base: "center", md: "start", lg: "start"}} justify={{base: "center", md: "start", lg: "start"}} gap={2}>
                        <Heading fontSize={{ base: 14, md: 16, lg: 16 }}>{item.title}</Heading>
                        <Text fontSize={{ base: 12, md: 14, lg: 14 }}>{item.subtitle}</Text>
                    </Flex>
                </Flex>
            ))}
        </Flex>
    )
}