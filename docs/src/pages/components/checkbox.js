import React from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  SectionTitle,
  SubsectionTitle,
  Title,
  Checkbox,
  Link,
  ListItem,
  List
} from "@nulogy/components";
import Highlight from "react-highlight";
import {
  Layout,
  Intro,
  IntroText,
  DocSection,
  PropsTable
} from "../../components";
import radioProps from "../../shared/radioProps";

export default () => (
  <Layout>
    <Helmet>
      <title>Checkbox</title>
    </Helmet>
    <Intro>
      <Title>Checkbox</Title>
      <IntroText>
        Checkboxes allow users to select any number of options from a list.
      </IntroText>
    </Intro>
    <DocSection>
      <Checkbox id="checkbox" labelText="I am a checkbox" />
      <Highlight className="js">
        {`import { Checkbox } from "@nulogy/components";

<Checkbox id="checkbox" labelText="I am a checkbox" />
`}
      </Highlight>
    </DocSection>
    <DocSection>
      <SectionTitle>Variations</SectionTitle>

      <Box mb="x6">
        <SubsectionTitle>Disabled</SubsectionTitle>
        <Checkbox labelText="I am a checkbox" disabled />
        <Highlight className="js">
          {
            '<Checkbox id="disabled-checkbox" labelText="I am a checkbox" disabled />'
          }
        </Highlight>
      </Box>

      <Box mb="x6">
        <SubsectionTitle>Error</SubsectionTitle>
        <Checkbox labelText="I am a checkbox" error />
        <Highlight className="js">
          {'<Checkbox id="error-checkbox" labelText="I am a checkbox" error />'}
        </Highlight>
      </Box>

      <Box>
        <SubsectionTitle>Default Checked</SubsectionTitle>
        <Checkbox labelText="I am a checkbox" defaultChecked="true" />
        <Highlight className="js">
          {
            '<Checkbox id="disabled-checkbox" labelText="I am a checkbox" defaultChecked="true"/>'
          }
        </Highlight>
      </Box>
    </DocSection>

    <DocSection>
      <SectionTitle>Guidelines</SectionTitle>
      <List>
        <ListItem>
          Add labels, errors and default selections with{" "}
          <Link href="/components/checkbox-group">Checkbox Group</Link>
        </ListItem>
        <ListItem>
          If there are many items in a list, consider using a "Show all" button
        </ListItem>
      </List>
    </DocSection>

    <DocSection>
      <SectionTitle>Props</SectionTitle>
      <PropsTable propsRows={radioProps} />
    </DocSection>

    <DocSection>
      <SectionTitle>Related components</SectionTitle>
      <List>
        <ListItem>
          <Link href="/components/checkbox-group">Checkbox Group</Link>
        </ListItem>
        <ListItem>
          <Link href="/components/form">Form</Link>
        </ListItem>
      </List>
    </DocSection>

    <DocSection>
      <SectionTitle>Resources</SectionTitle>
      <List>
        <ListItem>
          <Link href="https://storybook.nulogy.design/?path=/story/checkbox--checkbox">
            View in Storybook
          </Link>
        </ListItem>
      </List>
    </DocSection>
  </Layout>
);
