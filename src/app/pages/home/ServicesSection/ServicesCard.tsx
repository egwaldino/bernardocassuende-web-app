import { Box, Flex, Heading, Icon, List } from "@chakra-ui/react";
import type { JSX } from "react";
import { BsHypnotize } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

const servicescardinfo = [
    {
        icon: GiBrain,
        title: "Programação Neurolinguística",
        item: "Desenvolvimento Pessoal e Profissional",
        item1: "Gerenciamento Emocional",
        item2: "Superação de Desafios",
        item3: "Melhora nas Relações",
    },
    {
        icon: FaHandsHelping,
        title: "Terapia Cognitivo-Comportamental-TCC",
        item: "Transtorno Depressivo Maior",
        item1: "Transtorno de Pânico e Fobia Social ",
        item2: "Transtorno Obsessivo Compulsivo - TOC",
        item3: "Transtorno de Ansiedade Generalizada - TAG",
        item4: "Esgotamento Mental e Físico - Síndrome de Burnout"
    },
    {
        icon: BsHypnotize,
        title: "Hipnoterapia Clínica",
        item: "Ansiedade e Depressão",
        item1: "Transtorno Pós-traumático",
        item2: "Transtornos Psicossomáticos",
        item3: "Ataques de Pânico",
        item4: "Fobias",
    }
]

export function ServicesCard(): JSX.Element {
    return (
        <Flex h="100%" w={{base: "", md: "", lg: "75rem"}} gap={10} flexDir={{base: "column", md: "column", lg: "row"}}>
            {servicescardinfo.map((service, index) => (
                <Flex w={{base: "", md: "", lg: "40rem"}} key={index} flexDir="column" align="center" gap={8} p={6} bgColor="white" borderRadius={24} boxShadow={"sm"} borderBottomWidth={5} borderColor={"blue.600"}>
                    <Box bgColor="blue.600" p={5} rounded="full">
                        <Icon as={service.icon} boxSize={8} color={"white"} />
                    </Box>
                    <Heading fontSize={16}>{service.title}</Heading>
                    <List.Root fontSize={14}>
                        <List.Item>{service.item}</List.Item>
                        <List.Item>{service.item1}</List.Item>
                        <List.Item>{service.item2}</List.Item>
                        <List.Item>{service.item3}</List.Item>
                        {service.item4 && <List.Item>{service.item4}</List.Item>}
                    </List.Root>
                </Flex>
            ))}
        </Flex>
    )
}