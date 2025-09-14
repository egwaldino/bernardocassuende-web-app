import { BiPhone } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import LogoHipnosave from "@/assets/logos/LogoHipnosave.webp"
import { IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import { Heading, HStack, VStack, Text, Icon, Link, Flex, Image, Box } from "@chakra-ui/react";


export function Footer() {
    return (
        <VStack divideY="1px" divideColor="gray.300" h="100%" w="100%" color="black" gap={20}>
            <HStack flexDir={{ base: "column", md: "column", lg: "row" }} w="full" py={20} px={{ base: 13, md: 24, lg: 24 }} align={{ base: "center", md: "start", lg: "start" }}>
                <VStack data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200" w={{ base: "100%", md: "100%", lg: "30%" }} align={{ base: "center", md: "center", lg: "start" }} gap={8}>
                    <Link focusRing="none" alignItems={{ md: "flex-end" }} color="blackAlpha.900" href="/" fontWeight="bold" fontSize="lg" _hover={{ textDecoration: "none" }}>
                        <Box w={"280px"} h={"110px"}>
                            <Image
                                w="100%"
                                h="100%"
                                loading="lazy" 
                                decoding="async"
                                objectFit="cover"
                                src={LogoHipnosave}
                                transition="all 0.6s ease"
                                alt={"Foto de Bernardo Cassuende"}
                                _hover={{ transform: "scale(1.05)" }}
                            />
                        </Box>
                    </Link>
                    <Text
                        fontSize={{ base: 12, md: 16, lg: 18 }}
                        w={{ base: "22em", md: "22em", lg: "18em" }}
                        textAlign={{ base: "center", md: "center", lg: "justify" }}
                    >
                        Serviços psicológicos com profissionais focados na sua saúde mental e no seu bem estar.
                    </Text>
                    <HStack justify={{ base: "center", md: "center", lg: "start" }} w="full">
                        <Link transition="all 0.6s ease" _hover={{ transform: "scale(1.3)" }} href="http://wa.me/244923435995" target="_blank">
                            <Icon color="blue.600" boxSize={6} bg="none">
                                <IoLogoWhatsapp />
                            </Icon>
                        </Link>
                        <Link transition="all 0.6s ease" _hover={{ transform: "scale(1.3)" }} href="https://www.instagram.com/hipnosave?igsh=Yjg0Y2N4cTlkaWw=" target="_blank">
                            <Icon color="blue.600" boxSize={7} bg="none">
                                <IoLogoInstagram />
                            </Icon>
                        </Link>
                        <Link transition="all 0.6s ease" _hover={{ transform: "scale(1.3)" }} href="https://www.linkedin.com/in/bernardo-cassuende-60919237a/?originalSubdomain=ao" target="_blank">
                            <Icon color="blue.600" boxSize={7} bg="none">
                                <IoLogoLinkedin />
                            </Icon>
                        </Link>
                    </HStack>
                </VStack>

                <HStack data-aos="fade-left" data-aos-duration="1200" py={20} w="100%" flexDir={{ base: "column", md: "column", lg: "row" }} justifyContent={{ base: "center", md: "center", lg: "flex-end" }} align={{ base: "center", md: "center", lg: "start" }} gap={16}>
                    <Flex flexDir="column" align={{ base: "center", md: "center", lg: "start" }} justify="space-between" gap={{ base: 4, md: 8, lg: 8 }}>
                        <Heading fontSize={{ base: 12, md: 14, lg: 16 }}>Informações de Contactos</Heading>

                        <Link transition="all 0.6s ease" _hover={{ transform: "scale(1.05)" }} href="tel:+244923435995" target="_blank" fontSize={{ base: 12, md: 14, lg: 14 }} color="black">
                            <Icon>
                                <BiPhone size={20} />
                            </Icon>
                            +244 923 435 995
                        </Link>
                        <Link transition="all 0.6s ease" _hover={{ transform: "scale(1.05)" }} href="mailto:hipnosaveangola@gmail.com?subject=Quero%20saber%20mais&body=Olá!%20Gostaria%20de%20informações." target="_blank" fontSize={{ base: 12, md: 14, lg: 14 }} color="black">
                            <Icon>
                                <HiOutlineMail size={20} />
                            </Icon>
                            hipnosaveangola@gmail.com
                        </Link>
                    </Flex>

                    <Flex data-aos="fade-left" data-aos-duration="800" flexDir="column" justify="space-between" align={{ base: "center", md: "center", lg: "start" }} gap={8}>
                        <Heading fontSize={{ base: 12, md: 14, lg: 16 }}>Horário de Atendimento</Heading>

                        <HStack w="full" justifyContent="space-between" fontSize={{ base: 12, md: 14, lg: 14 }}>
                            <Text color="black">Segunda - Sexta</Text>
                            <Text color="black">16:30 AM - 18:00 PM</Text>
                        </HStack>
                        <HStack w="full" justify="space-between" fontSize={{ base: 12, md: 14, lg: 14 }}>
                            <Text color="black">Sábado</Text>
                            <Text color="black">09:00 AM - 11:00 PM</Text>
                        </HStack>
                        <HStack w="full" justify="space-between" fontSize={{ base: 12, md: 14, lg: 14 }}>
                            <Text color="black">Domingo</Text>
                            <Text color="black">Encerrado</Text>
                        </HStack>
                        <Text fontSize={{ base: 10, md: 12, lg: 12 }}>Suporte de emergência disponível 24 horas por dia, <br /> 7 dias por semana</Text>
                    </Flex>
                </HStack>
            </HStack>
        </VStack >
    )
}