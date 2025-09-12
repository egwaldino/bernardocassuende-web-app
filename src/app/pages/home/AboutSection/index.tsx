import { VStack, Text, Heading, Image, Flex } from "@chakra-ui/react";
import BernardoCassuendePsicologoHipnoterapeuta from "@/assets/images/AboutSection/bernardo-cassuende-psicologo-hipnoterapeuta2.webp"
import { AboutCard } from "./AboutCard";

export function AboutSection() {
    return (
        <VStack
            id="about-section"
            py={16}
            gap={16}
            w="100%"
            h="100vh"
            align="center"
            color="gray.600"
            justify="center"
            marginTop={{ base: "10rem", md: "0.5rem", lg: "2rem" }}
            marginBottom="10rem"
            px={{ base: "1rem", md: "2rem", lg: "14rem" }}
        >
            <VStack
                gap={4}
                w={{ base: "90%", md: "50%", lg: "50%" }}
            >
                <Heading data-aos="fade-up" data-aos-duration="800" data-delay="200" fontSize={{ base: 16, md: 16, lg: 18 }}>Sobre Dr. Bernardo Cassuende</Heading>
                <Text data-aos="fade-up" data-aos-duration="1200" data-delay="400" fontSize={{ base: 12, md: 14, lg: 14 }} textAlign="center">
                    Nossa missão é oferecer uma abordagem terapêutica integrativa, 
                    fundamentada em evidências científicas, para apoiar você na 
                    construção de mudanças positivas e duradouras em sua vida.
                </Text>
            </VStack>
            <Flex
                w="100%"
                align="center"
                gap={{ base: 10 }}
                flexDir={{ base: "column", md: "column", lg: "row" }}
                justify={{ base: "center", md: "center", lg: "space-between" }}
            >
                <Flex minW={"250px"} maxW={"650px"} minH={"250px"} maxH={"290px"} px={5}>
                    <Image
                        data-aos="fade-right" data-aos-duration="1200" data-delay="400"
                        rounded="100%"
                        objectFit="cover"
                        transition="all 0.6s ease"
                        _hover={{ transform: "scale(1.05)" }}
                        src={BernardoCassuendePsicologoHipnoterapeuta}
                        w={{ base: "250px", md: "250px", lg: "200px" }}
                        h={{ base: "250px", md: "250px", lg: "200px" }}
                        alt={"Bernardo Cassuende - Psicologo e Hipnoterapeuta"}
                    />

                </Flex>
                <AboutCard />
            </Flex>
        </VStack>
    )
}