import {
    Box,
    Flex,
    Text,
    Link,
    Stack,
    Button,
    IconButton,
} from "@chakra-ui/react";

import React, { type JSX } from "react";

interface NavItem {
    label: string;
    href?: string;
}

const NAV_ITEMS: NavItem[] = [
    { label: "Sobre", href: "#" },
    { label: "Palestras", href: "#" },
    { label: "Serviços", href: "#" },
    { label: "Benefícios", href: "#" },
    { label: "Depoimentos", href: "#" },
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
    const [open, setOpen] = React.useState(false);

    const linkColor = "gray.700";
    const logoColor = "blue.500";

    return (
        <Flex w="100%" py={4} px={4} align="center" justify="space-between" position="fixed" borderBottom="1px solid #d4d4d8">
            {/* Logo + Hamburguer */}
            <Flex align="center" justifyContent={{ base: "space-between", md: "space-between", lg: "flex-start" }} w={{ base: "100%", md: "100%", lg: "auto" }} gap={4}>
                <IconButton
                    size="md"
                    onClick={() => setOpen((v) => !v)}
                    display={{ md: "inline-flex", lg: "none" }}
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    {open ? <CloseSvg /> : <HamburgerSvg />}
                </IconButton>

                <Link focusRing="none" alignItems={{ md: "flex-end" }} color="blackAlpha.900" href="/" fontWeight="bold" fontSize="lg" _hover={{ textDecoration: "none" }}>
                    Logo Image
                </Link>
            </Flex>

            {/* Desktop Nav */}
            <Flex
                as="nav"
                align="center"
                justify="center"
                flex={1}
                display={{ base: "none", md: "none", lg: "flex" }}
            >
                <Stack direction="row" gap={6}>
                    {NAV_ITEMS.map((item) => (
                        <Link
                            focusRing="none"
                            key={item.label}
                            fontWeight={500}
                            color={linkColor}
                            href={item.href ?? "#"}
                            _hover={{ color: logoColor, textDecoration: "none", transition: "0.5s ease-in-out" }}
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

            <Flex display={{ base: "none", md: "none", lg: "inline" }}>
                {/* Agendar Consulta */}
                <Link
                    rel="noopener noreferrer"
                    href="#"
                >
                    <Button
                        size="md"
                        rounded="xl"
                        color="white"
                        bgColor="blue.600"
                        colorScheme="whatsapp"
                        _hover={{ bgColor: "white", borderWidth: "1px", borderColor: "black", color: "black", transition: "0.5s ease-in-out" }}
                    >
                        <Text>Agendar Consulta</Text>
                    </Button>
                </Link>
            </Flex>

            {/* Mobile Nav */}
            {open && (
                <Box
                    pos="absolute"
                    top="60px"
                    left={0}
                    w="100%"
                    bg="white"
                    px={4}
                    pb={4}
                    display={{ md: "flex", lg: "none" }}
                    shadow="md"
                    rounded="md"
                >
                    <Stack gap={2}>
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.label}
                                py={2}
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

                        <Stack pt={2} borderTop="1px" gap={2}>
                            <Link
                                rel="noopener noreferrer"
                                href="#"
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
                </Box>
            )}
        </Flex>
    );
}
