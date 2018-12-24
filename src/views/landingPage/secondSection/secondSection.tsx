import * as React from 'react'

import { Section } from 'commons/atoms/section'

console.log('test')

export const SecondSection = () => (
  <div>
    <Section
      label="new design"
      description="there is no other platform for you"
      backgroundUrl="/static/pencil.png"
      hasEllipsis={true}
    >
      <p>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus
        porttitor. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula
        porta felis euismod semper.
      </p>
      <p>
        Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Donec
        ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed
        consectetur. Nulla vitae elit libero, a pharetra augue.
      </p>
    </Section>
  </div>
)
