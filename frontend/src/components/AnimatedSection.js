import { Box, Heading } from "@chakra-ui/react";

function AnimatedSection({ title, children }) {

    return (

        <Box className="animate__animated animate__fadeInUp" mb={6}>
            <Heading as="h2" size="lg" mb={4}>{title}</Heading>
            {children}
        </Box>

    )

}

export default AnimatedSection;