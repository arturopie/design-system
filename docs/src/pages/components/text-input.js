import React from "react";
import { Helmet } from "react-helmet";
import Highlight from "react-highlight";
import {
  Box, SectionTitle, SubsectionTitle, Title, Input, Link,
} from "@nulogy/components";
import {
  Layout, Intro, DocSection, CheckList,
} from "../../components";

export default () => (
  <Layout>
    <Helmet>
      <title>Text input</title>
    </Helmet>
    <Box mt="x2" mb="x6">
      <Title mb="none">Text input</Title>
      <Intro>An input field that users can type into.</Intro>
    </Box>
    <DocSection>
      <Input placeholder="I'm an input" />
      <Highlight className="jsx">
        {`import { Input } from @nulogy/components;

<Input placeholder="I'm an input" />`}
      </Highlight>
    </DocSection>
    <DocSection>
      <SectionTitle>Use when</SectionTitle>
      <CheckList>Users need to enter information that is best communicated in text form.</CheckList>
      <CheckList>You need to collect information that varies from one user to another and can’t be represented as a set of pre-determined choices.</CheckList>
    </DocSection>
    <DocSection>
      <SectionTitle>Variations</SectionTitle>
      <Box mb="x6">
        <SubsectionTitle>Disabled</SubsectionTitle>
        <Input placeholder="I'm an input" disabled />
        <Highlight className="jsx">
          {"<Input placeholder=\"I'm an input\" disabled />"}
        </Highlight>
      </Box>
      <Box mb="x6">
        <SubsectionTitle>Error</SubsectionTitle>
        <Input placeholder="I'm an input" error />
        <Highlight className="jsx">
          {"<Input error />"}
        </Highlight>
      </Box>
    </DocSection>
    <DocSection>
      <SectionTitle>Guidelines</SectionTitle>
      <CheckList>Whenever possible match the width of the input field with the expected length of the input. If that is not possible then fill the entire width of the container.</CheckList>
    </DocSection>
    <DocSection>
      <SectionTitle>Props</SectionTitle>
      <table>
        <thead>
          <tr>
            <td>Prop</td>
            <td>Type</td>
            <td>Default</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>disabled</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Marks the field as disabled and disallows user input</td>
          </tr>
          <tr>
            <td>error</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Marks the field as invalid and turns red</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>String</td>
            <td>null</td>
            <td>A hint to the expected format for the field. Not a replacement for a label.</td>
          </tr>
          <tr>
            <td>required</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Makes the field require selection before the form will submit</td>
          </tr>
        </tbody>
      </table>
    </DocSection>
    <DocSection>
      <SectionTitle>Resources</SectionTitle>
      <Link href="https://storybook.nulogy.design/?selectedKind=Input">View in Storybook</Link>
    </DocSection>
  </Layout>
);
