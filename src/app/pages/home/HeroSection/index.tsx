import { Box, Button, Flex, Heading, HStack, Link, Stack, Text, Image } from "@chakra-ui/react";
import BernardoCassuendePsicologoHipnoterapeuta from "@/assets/images/HeroSection/bernardo-cassuente-psicologo-hipnoterapeuta.webp"

export function HeroSection() {
    return (
        <Flex
            id="start-section"
            w="100%"
            align="center"
            bgColor="gray.100"
            gap={{ base: "1rem" }}
            h={{ base: "50em", md: "50dvh", lg: "100dvh" }}
            px={{ base: "1rem", md: "2rem", lg: "14rem" }}
            flexDir={{ base: "column", md: "row", lg: "row" }}
            py={{ base: "2.5rem", md: "1rem", lgOnly: "1em" }}
            justify={{ base: "start", md: "space-between", lg: "space-between" }}
        >
            <Flex
                flexDir="column"
                marginTop={"70px"}
                gap={{ base: 4, md: 6, lg: 8 }}
                w={{ base: "100%", md: "50%", lg: "50%" }}
                align={{ base: "center", md: "flex-start", lg: "flex-start" }}
            >
                <Stack gap={{ base: 2, md: 2, lg: 6 }} data-aos="fade-up" data-aos-duration="3000">
                    <Heading id="hero-title" textAlign={{ base: "center", md: "start", lg: "start" }} fontSize={{ base: 28, md: 28, lg: 41 }} color="gray.500">Cuidando da sua mente,</Heading>
                    <Heading id="hero-subtitle" textAlign={{ base: "center", md: "start", lg: "start" }} fontSize={{ base: 28, md: 28, lg: 39 }} color="blue.500">transformamos a tua vida</Heading>
                </Stack>

                <Text id="hero-text" w={{ base: "100%", md: "100%", lg: "80%" }} fontSize={{ base: 12, md: 14, lg: 16 }} color="gray.400" textAlign={{ base: "center", md: "start", lg: "start" }}>Apoio psicológico profissional e compassivo para ajudar você a enfrentar os desafios da vida e descobrir sua força interior.</Text>
                <HStack gap={4}>
                    <Link
                        id="hero-button1"
                        rel="noopener noreferrer"
                        onClick={() => {
                            const section = document.getElementById("contact-form-section");
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        <Button
                            rounded="xl"
                            color="white"
                            bgColor="blue.600"
                            size={{ base: "xs", md: "sm", lg: "md" }}
                            _hover={{ bgColor: "gray.100", borderWidth: "1px", borderColor: "blue.600", color: "blue.600", transition: "0.5s ease-in-out" }}
                        >
                            <Text>Agendar Consulta</Text>
                        </Button>
                    </Link>
                    <Link
                        id="hero-button2"
                        rel="noopener noreferrer"
                        onClick={() => {
                            const section = document.getElementById("service-section");
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        <Button
                            rounded="xl"
                            color="blue.600"
                            bgColor="gray.100"
                            borderWidth="1px"
                            borderColor="blue.600"
                            size={{ base: "xs", md: "sm", lg: "md" }}
                            _hover={{ bgColor: "gray.100", borderWidth: "1px", borderColor: "gray.600", color: "gray.600", transition: "0.5s ease-in-out" }}
                        >
                            <Text>Saber mais</Text>
                        </Button>
                    </Link>
                </HStack>

            </Flex>
            <Box id="hero-image">
                <Image
                    w="100%"
                    boxShadow="sm"
                    objectFit="cover"
                    borderRadius="3xl"
                    transition="all 0.6s ease"
                    _hover={{ transform: "scale(1.05)" }}
                    src={BernardoCassuendePsicologoHipnoterapeuta}
                    h={{ base: "500px", md: "350px", lg: "450px" }}
                    alt={"Bernardo Cassuende - Psicologo e Hipnoterapeuta"}
                />
            </Box>
        </Flex>
    )
}