import { Heading, VStack, Text, Link, Flex } from "@chakra-ui/react";
import { ServicesCard } from "./ServicesCard";


export function ServicesSection() {
    return (
        <Flex
            id="service-section"
            py={28}
            px={4}
            gap={20}
            h="100%"
            w="100%"
            align="center"
            flexDir="column"
            color="gray.600"
            bgColor="gray.100"
            justify="space-between"
        >
            <VStack w={{ base: "100%", md: "100%", lg: "30%" }} gap={4}>
                <Heading data-aos="fade-up" data-aos-duration="800" data-delay="200"  fontSize={{ base: 16, md: 16, lg: 18 }}>Serviços Psicoterapêuticos</Heading>
                <Text data-aos="fade-up" data-aos-duration="1200" data-delay="400"  fontSize={{ base: 12, md: 14, lg: 14 }} textAlign="center">
                    Suporte abrangente de saúde mental adaptado
                    às tuas necessidades e objetivos específicos
                </Text>
            </VStack>

            <Flex h="100%" justify="center" data-aos="fade-up" data-aos-duration="1800" data-delay="600" >
                <ServicesCard />
            </Flex>

            <VStack lineHeight={1}>
                <Text data-aos="fade-up" data-aos-duration="800" data-delay="200"  color="gray.400" fontSize={{ base: 12, md: 14, lg: 14 }} textAlign="center">
                    Não sabe qual serviço é o ideal para você?
                </Text>
                <Link data-aos="fade-up" data-aos-duration="1200" data-delay="400"  fontSize={{ base: 12, md: 14, lg: 14 }} color="blue.600" fontWeight="semibold" textDecor="underline" textAlign="center">
                    Agende uma consulta para discutir as tuas necessidades
                </Link>
            </VStack>

        </Flex>
    )
}