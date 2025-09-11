import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Virtual } from "swiper/modules";
import type { JSX } from "react";

const TestimonialsCardProps = [
    {
        name: "Pedro Lima",
        message: "Dr. Bernardo, muito obrigado! Desde a sessão de hipnose, já não sinto vontade de beber ou fumar. O desejo simplesmente desapareceu! Até o meu sono melhorou — agora durmo com músicas hipnóticas e tudo flui de forma leve, como uma pena."
    },
    {
        name: "Adriano Gomba",
        message: "Dr. Bernardo, agradeço imensamente pela consulta de hipnoterapia. Sinto-me muito bem e feliz com a experiência que tive. Hoje sou uma pessoa diferente! Desejo que continue a transformar e curar a vida de muitas pessoas que precisam de ajuda. Muito obrigado!"
    },
    {
        name: "Laurinda Isabel Kito",
        message: "Bom dia, Dr. Bernardo. Antes sentia-me vazia e sem confiança, mas graças à hipnoterapia aprendi a me amar e minha autoestima cresceu. Agradeço seu empenho e profissionalismo. Sinto-me renascida e pronta para ser feliz!"
    },
    {
        name: "Mateus Ndalu",
        message: "Dr. Bernardo, agradeço imenso! Antes sentia-me perdida e insegura, mas a hipnoterapia mudou tudo. Hoje tenho confiança, amor-próprio e alegria de viver. Sinto-me renovada e pronta para novos desafios!"
    },
    {
        name: "Anabela Silva",
        message: "Bom dia, Dr. Bernardo. Antes vivia cheia de dúvidas e medo, mas graças à hipnoterapia aprendi a confiar em mim e a valorizar-me. Sinto-me mais leve e feliz. Muito obrigado pelo seu apoio e profissionalismo!"
    }
]

// Duplicar os slides para efeito contínuo
const duplicatedTestimonials = [...TestimonialsCardProps, ...TestimonialsCardProps];

export function TestimonialsCarousel(): JSX.Element {
    return (
        <Box w="100%" py={6} >
            <style>
                {` @media (max-width: 768px) { 
                    .swiper-button-next,
                    .swiper-button-prev {
                        display: none; 
                        } 
                    }
                        .swiper-wrapper: {transition timming function: linear !important}
                    .swiper-slide { padding-bottom: 20px }
                    .swiper-button-next, .swiper-button-prev { color: #2B59FF; }
                    .swiper-pagination-bullet { background: #2B59FF !important; }
                    .swiper { padding: 20px; padding-right: 10px; padding-left: 10px }
                    .swiper-pagination-bullet-active { background: #2B59FF !important; }
                    .swiper-button-next:hover, .swiper-button-prev:hover { color: #2B59FF; }
                `}
            </style>
            <Swiper
                slidesPerView="auto"
                spaceBetween={30}
                freeMode={{
                    enabled: true,
                    momentum: false,
                    sticky: false,
                }}
                loop={true}
                speed={8000}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                style={{ pointerEvents: "none" }}
                modules={[Virtual, FreeMode, Autoplay]}
                onSwiper={(swiper) => {
                    if (swiper.wrapperEl) {
                        swiper.wrapperEl.style.transitionTimingFunction = "linear";
                    }
                }}
            >

                {duplicatedTestimonials.map((testimonials, index) => (
                    <SwiperSlide key={index} virtualIndex={index} style={{ width: "300px" }}>
                        <Flex justify="center" align="center" maxH="20rem" w="100%" px={1} >
                            <Flex
                                p={6}
                                gap={6}
                                h={{ base: "18em", md: "20em", lg: "20em" }}
                                color="black"
                                borderWidth={1}
                                flexDir="column"
                                divideY="0.1rem"
                                borderRadius={24}
                                bgColor="gray.100"
                                divideColor="gray.200"
                                borderColor="gray.200"
                                justify="space-between"
                                data-aos="fade-up" data-aos-duration="1200" data-delay="200" 
                            >
                                <Text fontSize={{ base: 14, md: 14, lg: 16 }}>{testimonials.message}</Text>
                                <Heading fontSize={{ base: 12, md: 14, lg: 14 }} color="gray.700" pt={4}>{testimonials.name}</Heading>
                            </Flex>
                        </Flex>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}