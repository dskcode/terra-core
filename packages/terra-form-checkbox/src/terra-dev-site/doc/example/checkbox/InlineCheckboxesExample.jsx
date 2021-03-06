import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Checkbox from 'terra-form-checkbox/lib/Checkbox';

const inlineCheckboxesExample = () => (
  <div>
    <Checkbox id="firstInline" labelText="First Checkbox" isInline />
    <Checkbox id="secondInline" labelText="Second Checkbox" isInline />
    <Checkbox id="thirdInline" labelText="Third Checkbox" isInline />
  </div>
);

export default inlineCheckboxesExample;
