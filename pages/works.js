import { Container, Heading, SimpleGrid, Divider, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { GridItem } from '../components/grid-item'

import thumbPinnet from '../public/images/projects/pinnet/pinnet_eyecatch.png'
import thumbPrometheus from '../public/images/projects/prometheus/prometheus_eyecatch.png'
import thumbTau from '../public/images/projects/tau/tau_eyecatch.png'
import thumbDoodle from '../public/images/projects/doodle/doodle_eyecatch.jpg'
import thumbBlog from '../public/images/projects/blog-template/blog_eyecatch.png'
import thumbShell from '../public/images/projects/cshell/cshell_eyecatch.png'
import thumbWM from '../public/images/projects/wm/wm_eyecatch.png'
import thumbVoxel from '../public/images/projects/voxel/voxel_eyecatch.png'
import thumbAlgebra from '../public/images/projects/algebra/algebra_eyecatch.png'
import thumbHM from '../public/images/projects/homemed/homemed_eyecatch.png'
import thumbImaa from '../public/images/projects/imaa/imaa_eyecatch.png'
import thumbXOR from '../public/images/projects/xor/xor_eyecatch.png'
import thumbNNS from '../public/images/projects/nns/nns_eyecatch.png'
import thumbSAV from '../public/images/projects/sav/sav_eyecatch.png'
import thumbBHOP from '../public/images/projects/bhop/bhop_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container maxW="42rem" bg={useColorModeValue('#f0e7db', '#202023')}>
      <Heading as="h3" fontSize={20} mb={4}>
        Works (Top 15)
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="prometheus" title="Project Prometheus" thumbnail={thumbPrometheus}>
            A modular C Game Engine from scratch with a 2D side-scrolling shooter demo game.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="tau"
            title="Tau Editor"
            thumbnail={thumbTau}
          >
            A hackable nano-like text editor made in 1000 LoC in C.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <GridItem
            href="https://github.com/michaelradu/tau"
            title="ChakraUI NextJS Starter Blog Template"
            thumbnail={thumbBlog}
          >
            A customizable easy to use starter blog template that uses NextJS and ChakraUI.
          </GridItem>
        </Section>
        <Section delay={0.1}>
          <GridItem href="https://github.com/michaelradu/mcsh" thumbnail={thumbShell} title="Custom C Shell">
            An experimental Unix shell made to recreate the functionalities ZSH has in my workflow.
          </GridItem>
        </Section>
        
        <Section delay={0.1}>
          <WorkGridItem
            id="voxelengine"
            title="Voxel Engine"
            thumbnail={thumbVoxel}
          >
            A custom Python Voxel Engine similar to Minecraft&apos;s.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="waylandcompositor" thumbnail={thumbWM} title="Rust Wayland Compositor">
            A custom wayland compositor/window manager built using Rust.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="linearalgebra"
            title="Rust Linear Algebra Library"
            thumbnail={thumbAlgebra}
          >
            A custom linear algebra library made in rust.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="doodlenn" thumbnail={thumbDoodle} title="Doodle Identifier">
            A neural network trained to identify doodles.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="homemed" thumbnail={thumbHM} title="Homemed">
            A platform designed for doctors and patients to manage medical records, appointments, and consultations. 
            Created for FIICode 2023.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="imaacity"
            thumbnail={thumbImaa}
            title="ImaaCity Brand Design"
          >
            A unique brand identity design system for a local real estate agency.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <GridItem href="https://github.com/michaelradu/xor-ransomware" thumbnail={thumbXOR} title="XOR Ransomware">
            A POC ransomware to troll your friends. Encrypt and Decrypt a Windows computer using basic xor encryption.
          </GridItem>
        </Section>
        <Section delay={0.5}>
          <GridItem
            href="https://github.com/michaelradu/NeuralNetworkFromScratch"
            thumbnail={thumbNNS}
            title="Neural Network From Scratch"
          >
            A minimal implementation of a feedforward Neural Network (Multi-layer perceptron).
          </GridItem>
        </Section>
        <Section delay={0.6}>
          <GridItem href="https://github.com/michaelradu/sorting-algorithm-visualizer" thumbnail={thumbSAV} title="Sorting Algorithm Visualizer">
            A tool that visualizes common sorting algorithms with random data sets.
          </GridItem>
        </Section>
        <Section delay={0.6}>
          <GridItem href="https://github.com/michaelradu/tiny-cs-bhop" thumbnail={thumbBHOP} title="Tiny CS Bhop">
            A tiny external CS:GO Bhop cheat made in Python.
          </GridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="pinnet" thumbnail={thumbPinnet} title="Pinnet">
            A social media platform experiment.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
