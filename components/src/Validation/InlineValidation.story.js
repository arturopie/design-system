import React from "react";
import { storiesOf } from "@storybook/react";

import { InlineValidation } from ".";
import { List, ListItem } from "../List";
import { Link } from "../Link";

storiesOf("Inline Validation", module)
  .add("Inline Validation", () => <InlineValidation message="Something has gone wrong" />)
  .add("with list items", () => (
    <InlineValidation message="Something has gone wrong">
      <List compact leftAlign>
        <ListItem>Something has gone wrong.</ListItem>
        <ListItem>Entry must be atleast 3 characters long</ListItem>
        <ListItem>
          <Link href="https://nulogy.design/">See here</Link>
        </ListItem>
      </List>
    </InlineValidation>
  ))
  .add("with only list items", () => (
    <InlineValidation>
      <List compact leftAlign>
        <ListItem>Something has gone wrong.</ListItem>
        <ListItem>Entry must be atleast 3 characters long</ListItem>
        <ListItem>
          <Link href="https://nulogy.design/">See here</Link>
        </ListItem>
      </List>
    </InlineValidation>
  ));
