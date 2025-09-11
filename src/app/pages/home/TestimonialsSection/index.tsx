import { Heading, VStack, Text } from "@chakra-ui/react";
import { TestimonialsCarousel } from "./TestimonialsCarousel";


export function TestimonialsSection() {
    return (
        <VStack id="testimonials-section" h="100%" w="100%" py={24}>
            <VStack w="100%" color="gray.600" gap={4}>
                <Heading data-aos="fade-right" data-aos-duration="800" data-delay="200"  fontSize={{ base: 16, md: 16, lg: 18 }}>O que os clientes dizem ?</Heading>
                <Text data-aos="fade-left" data-aos-duration="1200" data-delay="400"  px={4} fontSize={{ base: 12, md: 14, lg: 16 }} textAlign="center">
                    Histórias reais de pessoas que encontraram cura e crescimento por meio da Psicoterapia
                </Text>
            </VStack >
                <TestimonialsCarousel />
        </VStack>
    )
}