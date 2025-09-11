import { BiPhone } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import EgwaldinoPhotoProfile from "@/assets/images/egwaldino-cassuente-programador-web.webp"
import LogoHipnosave from "@/assets/logos/LogoHipnosave.webp"
import { IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import { Heading, HStack, VStack, Text, Icon, Link, Flex, Image, Box } from "@chakra-ui/react";


export function Footer() {
    return (
        <VStack divideY="1px" divideColor="gray.300" h="100%" w="100%" color="black" gap={20}>
            <HStack flexDir={{ base: "column", md: "column", lg: "row" }} w="full" h="40vh" gap={"13em"} py={20} px={{ base: 13, md: 24, lg: 24 }} align={{ base: "center", md: "start", lg: "start" }}>
                <VStack data-aos="fade-right" data-aos-duration="1200" data-delay="200" w={{ base: "100%", md: "100%", lg: "30%" }} align={{ base: "center", md: "center", lg: "start" }} gap={8}>
                    <Link focusRing="none" alignItems={{ md: "flex-end" }} color="blackAlpha.900" href="/" fontWeight="bold" fontSize="lg" _hover={{ textDecoration: "none" }}>
                        <Box w={"100px"} h={"40px"}>
                            <Image
                                w="100%"
                                h="100%"
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
                        w={{ base: "22em", md: "22em", lg: "15em" }}
                        textAlign={{ base: "center", md: "center", lg: "start" }}
                    >
                        Serviços psicológicos com profissionais focados na sua saúde mental e no seu bem estar.
                    </Text>
                    <HStack justify={{ base: "center", md: "center", lg: "start" }} w="full">
                        <Link transition="all 0.6s ease" _hover={{ transform: "scale(1.3)" }} href="http://wa.me/244923435995" target="_blank">
                            <Icon color="blue.600" boxSize={6} bg="none">
                                <IoLogoWhatsapp />
                            </Icon>
                        </Link>
                        <Link transition="all 0.6s ease" _hover={{ transform: "scale(1.3)" }} href="https://www.instagram.com/bfcassuende_official/" target="_blank">
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

                <HStack data-aos="fade-left" data-aos-duration="1200" data-delay="200" w="100%" h="100%" flexDir={{ base: "column", md: "column", lg: "row" }} justifyContent={{ base: "center", md: "center", lg: "flex-end" }} align={{ base: "center", md: "center", lg: "start" }} gap={16}>
                    <Flex flexDir="column" align={{ base: "center", md: "center", lg: "start" }} justify="space-between" gap={{ base: 4, md: 8, lg: 8 }}>
                        <Heading fontSize={{ base: 12, md: 14, lg: 16 }}>Informações de Contacto</Heading>

                        <Link transition="all 0.6s ease" _hover={{ transform: "scale(1.05)" }} href="tel:+244923435995" target="_blank" fontSize={{ base: 12, md: 14, lg: 14 }} color="black">
                            <Icon>
                                <BiPhone size={20} />
                            </Icon>
                            +351 923 435 995
                        </Link>
                        <Link transition="all 0.6s ease" _hover={{ transform: "scale(1.05)" }} href="mailto:bfcassuende04@gmail.com?subject=Quero%20saber%20mais&body=Olá!%20Gostaria%20de%20informações." target="_blank" fontSize={{ base: 12, md: 14, lg: 14 }} color="black">
                            <Icon>
                                <HiOutlineMail size={20} />
                            </Icon>
                            bfcassuende04@gmail.com
                        </Link>
                    </Flex>

                    <Flex data-aos="fade-left" data-aos-duration="1200" data-delay="600" flexDir="column" justify="space-between" align={{ base: "center", md: "center", lg: "start" }} gap={8}>
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
            <HStack marginTop={{ base: "25rem", md: "25rem", lg: "1rem" }} w="full" h="100%" py={5} px={20} justify="center">
                <Link href={"https://www.instagram.com/egwaldinodinis.ao?igsh=YW96NWF5N2U3ZHRr&utm_source=qr"} target="_blank">
                    <Flex
                        gap={"0.5rem"}
                        align={"center"}
                        flexDir={"column"}
                        justifyContent={"center"}
                    >

                        <Text
                            color={"black"}
                            fontWeight={"semibold"}
                            fontSize={{ base: 12, md: 14, lg: 16 }}
                        >
                            Desenvolvido por:
                        </Text>
                        <Flex
                            h={"3rem"}
                            gap={"0.7rem"}
                            color={"Black"}
                            align={"center"}
                            rounded={"full"}
                            fontWeight={"semibold"}
                            justifyContent={"center"}
                            backdropFilter={"blur(20px)"}
                            w={{ base: "12rem", md: "12rem" }}
                            bg="linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))"
                            border="1px solid rgba(255,255,255,0.3)"
                            boxShadow="inset 1px 1px 2px rgba(255,255,255,0.3), 
                    inset -2px -2px 4px rgba(0,0,0,0.25),
                    0 8px 25px rgba(0,0,0,0.3)"
                            _hover={{
                                bg: "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))",
                                transform: "scale(1.05)",
                                transition: "all 0.3s ease-in-out",
                            }}
                            _active={{
                                transform: "scale(0.97)",
                            }}
                        >
                            <Image
                                w={"35px"}
                                h={"35px"}
                                rounded={"full"}
                                src={EgwaldinoPhotoProfile}
                                alt={'Egwaldino Cassuente - Programador Web'}
                            />
                            <Text fontSize={{ base: "0.7rem", md: "0.8rem" }}>
                                Egwaldino Cassuente
                            </Text>
                        </Flex>
                    </Flex>
                </Link>
            </HStack>
        </VStack >
    )
}