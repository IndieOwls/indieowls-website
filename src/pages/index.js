import React from 'react'
import styled from 'styled-components'

import Layout from '../layout'
import { Section } from '../components'

function IndexPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <StyledHeader>
        <OverlayContainer>
          <HeaderContent>Lorem Ipsum</HeaderContent>
        </OverlayContainer>
      </StyledHeader>
      {/* Brief Introduction */}
      <Section>
        <h2>Who We Are</h2>
        <p>
          Indie Owls Creative specializes in delivering next-generation software solutions to small
          businesses and indie startups. With a focus on crafting scalable and innovative products,
          we strive for lasting impact. Working closely alongside you, we turn your crazy ideas into
          real achievements.
        </p>
      </Section>
      {/* Services */}
      <Section>
        <h2>What We Do</h2>
        <ul>
          At Indie Owls Creative, we pride ourselves on delivering an extensive array of software
          solutions tailored to your unique needs. Our services include:
          <li>
            JavaScript Engineering: JavaScript is a widely used programming language for web
            development, making it a highly sought-after skill.
          </li>
          <li>
            React Engineering: React is a popular and versatile library for building user
            interfaces, making it an in-demand service for creating web applications.
          </li>
          <li>
            AI Apps: Artificial intelligence applications have become increasingly popular in recent
            years, as they help businesses automate processes, make data-driven decisions, and offer
            personalized user experiences.
          </li>
        </ul>
      </Section>
      {/* Call to Action */}
      <Section>
        <h2>Contact Us</h2>
        <p>
          Discover your startup's potential with Indie Owls Creative! Contact us for a consultation
          and let's achieve greatness together. [Schedule Now!]
        </p>
      </Section>
    </Layout>
  )
}

const StyledHeader = styled.header`
  /* box */
  position: relative;
  background-image: url('https://via.placeholder.com/1600x500');
  background-size: cover;
  background-position: center;
  height: 500px;
  width: 100%;
`

const OverlayContainer = styled.div`
  /* box */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* flex */
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderContent = styled.div`
  color: white;
  font-size: 1em;
  text-align: center;
  margin: 0;
`

export default IndexPage
