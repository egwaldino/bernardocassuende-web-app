import {
    Box,
    Flex,
    Text,
    Link,
    Stack,
    Image,
    Button,
    IconButton,
} from "@chakra-ui/react";
import LogoHipnosave from "@/assets/logos/LogoHipnosave.webp"

import { useEffect, useState, type JSX } from "react";

interface NavItem {
    label: string;
    href?: string;
}

const NAV_ITEMS: NavItem[] = [
    { label: "Início", href: "#start-section" },
    { label: "Sobre", href: "#about-section" },
    { label: "Serviços", href: "#service-section" },
    { label: "Depoimentos", href: "#testimonials-section" },
];

const HamburgerSvg = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" {...props}>
        <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
    </svg>
);

const CloseSvg = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" {...props}>
        <path d="M18.3 5.71L12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.71 2.88 18.29 9.18 12 2.88 5.71 4.29 4.29 10.59 10.6 16.88 4.29z" />
    </svg>
);

export function Header(): JSX.Element {
    const logoColor = "blue.500";
    const linkColor = "gray.700";
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Flex
            py={4}
            w="100%"
            top={0}
            left={0}
            right={0}
            as="header"
            zIndex={1200}
            align="center"
            position="fixed"
            justify="space-between"
            px={{ base: 4, md: 8, lg: 16 }}
            boxShadow={scrolled ? "md" : "none"}
            bg={scrolled ? "gray.100/80" : "white"}
            backdropFilter={scrolled ? "blur(4px)" : "none"}
        >
            {/* Logo + Hamburguer */}
            <Flex align="center" justifyContent={{ base: "space-between", md: "space-between", lg: "flex-start" }} w={{ base: "100%", md: "100%", lg: "auto" }} gap={4}>
                <IconButton
                    size="md"
                    id="button"
                    bg="transparent"
                    onClick={() => setOpen((v) => !v)}
                    display={{ md: "inline-flex", lg: "none" }}
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    {open ? <CloseSvg /> : <HamburgerSvg />}
                </IconButton>

                <Link
                    data-aos="fade-down"
                    data-aos-duration="1200"
                    onClick={() => {
                        window.location.href = window.location.pathname;
                    }} focusRing="none" alignItems={{ md: "flex-end" }} color="blackAlpha.900" href="/" fontWeight="bold" fontSize="lg" _hover={{ textDecoration: "none" }}>
                    <Box w={"100px"} h={"40px"} id="logo">
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
            </Flex>

            {/* Desktop Nav */}
            <Flex
                flex={1}
                as="nav"
                align="center"
                justify="center"
                display={{ base: "none", md: "none", lg: "flex" }}
            >
                <Stack direction="row" gap={6} id="navbar">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            fontSize={15}
                            focusRing="none"
                            key={item.label}
                            fontWeight={500}
                            color={linkColor}
                            href={item.href ?? "#"}
                            transition="all 0.1s ease"
                            _hover={{ color: logoColor, textDecoration: "none", transform: "scale(1.05)", transition: "0.5s ease-in-out" }}
                            onClick={(e) => {
                                if (item.href?.startsWith("#")) {
                                    e.preventDefault();
                                    document
                                        .querySelector(item.href)
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </Stack>
            </Flex>

            <Flex display={{ base: "none", md: "none", lg: "inline" }} id="button">
                {/* Agendar Consulta */}
                <Link
                    rel="noopener noreferrer"
                >
                    <Button
                        size="md"
                        rounded="xl"
                        color="white"
                        bgColor="blue.600"
                        _hover={{ bgColor: "white", borderWidth: "1px", borderColor: "blue.600", color: "blue.600", transition: "0.5s ease-in-out" }}
                        onClick={() => {
                            const section = document.getElementById("contact-form-section");
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        <Text>Agendar Consulta</Text>
                    </Button>
                </Link>
            </Flex>

            {/* Mobile Nav */}
            {open && (
                <Flex
                    px={4}
                    py={6}
                    w="100%"
                    left={0}
                    right={0}
                    top="64px"
                    id="navbar"
                    pos="fixed"
                    zIndex={1300}
                    bg={scrolled ? "gray.100/80" : "white"}
                    backdropFilter={scrolled ? "blur(4px)" : "none"}
                >
                    <Stack gap={2}>
                        {NAV_ITEMS.map((item) => (
                            <Link
                                py={2}
                                key={item.label}
                                fontWeight={600}
                                color={linkColor}
                                href={item.href ?? "#"}
                                _hover={{ color: logoColor, textDecoration: "none" }}
                                onClick={(e) => {
                                    if (item.href?.startsWith("#")) {
                                        e.preventDefault();
                                        document
                                            .querySelector(item.href)
                                            ?.scrollIntoView({ behavior: "smooth" });
                                        setOpen(false);
                                    }
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Stack pt={2} borderTop="1px" gap={2} id="button">
                            <Link
                                rel="noopener noreferrer"
                                onClick={() => {
                                    const section = document.getElementById("contact-form-section");
                                    if (section) {
                                        section.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                            >
                                <Button
                                    w="100%"
                                    size="md"
                                    rounded="xl"
                                    color="white"
                                    bgColor="blue.600"
                                    _hover={{ bgColor: "white", borderWidth: "1px", borderColor: "black", color: "black", transition: "0.5s ease-in-out" }}

                                >
                                    <Text>Agendar Consulta</Text>
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Flex>
            )}
        </Flex>
    );
}
