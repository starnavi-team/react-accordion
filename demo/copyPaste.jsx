import React from 'react';

export const SimpleExample = (
  <pre>
    <span className="red">
      &lt;Accordion
      {' '}
      <span className="yellow">className=</span>
      <span className="green">&quot;accordion&quot;</span>
      {' '}
      <span className="yellow">style=</span>
      <span className="blue">&#123;&#123; width: &#39;80&#37;&#39; &#125;&#125;</span>
      &gt;
      <br />
      {'  '}
      <span className="red">
        &lt;AccordionGroup
        {' '}
        <span className="yellow">className=</span>
        <span className="green">&quot;accordion--group&quot;</span>
        <br />
        {'    '}
        <span className="red">
          &lt;AccordionGroupTitle
          {' '}
          <span className="yellow">className=</span>
          <span className="green">&quot;accordion--group-title&quot;</span>
          {' '}
          <span className="yellow">style=</span>
          <span className="blue">&#123;titleStyles&#125;</span>
          &gt;
          <br />
          {'      '}
          <span className="grey">Simple example</span>
          <br />
          {'    '}
          &lt;/AccordionGroupTitle&gt;
        </span>
        <br />
        {'    '}
        <span className="red">
          &lt;AccordionGroupBody
          {' '}
          <span className="yellow">style=</span>
          <span className="blue">&#123;bodyStyles&#125;</span>
          &gt;
          <br />
          {'      '}
          <span className="grey">This is the example of simple accordion. This body contains simple text.</span>
          <br />
          {'    '}
          &lt;/AccordionGroupBody&gt;
        </span>
        <br />
        {'  '}
        &lt;/AccordionGroup&gt;
      </span>
      <br />

      {'  '}
      <span className="red">
        &lt;AccordionGroup
        {' '}
        <span className="yellow">className=</span>
        <span className="green">&quot;accordion--group&quot;</span>
        <br />
        {'    '}
        <span className="red">
          &lt;AccordionGroupTitle
          {' '}
          <span className="yellow">className=</span>
          <span className="green">&quot;accordion--group-title&quot;</span>
          {' '}
          <span className="yellow">style=</span>
          <span className="blue">&#123;titleStyles&#125;</span>
          &gt;
          <br />
          {'      '}
          <span className="grey">Simple example with image</span>
          <br />
          {'    '}
          &lt;/AccordionGroupTitle&gt;
        </span>
        <br />
        {'    '}
        <span className="red">
          &lt;AccordionGroupBody
          {' '}
          <span className="yellow">style=</span>
          <span className="blue">&#123;bodyStyles&#125;</span>
          &gt;
          <br />
          {'      '}
          &lt;img
          {' '}
          <span className="yellow">src=</span>
          <span className="green">&quot;https://picsum.photos/300/200/?random&quot;</span>
          {' '}
          <span className="yellow">alt=</span>
          <span className="green">&quot;random&quot;</span>
          {' '}
          /&gt;
          <br />
          {'    '}
          &lt;/AccordionGroupBody&gt;
        </span>
        <br />
        {'  '}
        &lt;/AccordionGroup&gt;
      </span>
      <br />

      {'  '}
      <span className="red">
        &lt;AccordionGroup
        {' '}
        <span className="yellow">className=</span>
        <span className="green">&quot;accordion--group&quot;</span>
        <br />
        {'    '}
        <span className="red">
          &lt;AccordionGroupTitle
          {' '}
          <span className="yellow">className=</span>
          <span className="green">&quot;accordion--group-title accordion--group-title__black&quot;</span>
          {' '}
          <span className="yellow">style=</span>
          <span className="blue">&#123;titleStyles&#125;</span>
          &gt;
          <br />
          {'      '}
          &lt;img
          {' '}
          <span className="yellow">src=</span>
          <span className="blue">&#123;icon&#125;</span>
          {' '}
          <span className="yellow">alt=</span>
          <span className="green">&quot;icon&quot;</span>
          {' '}
          /&gt;
          <br />
          {'    '}
          &lt;/AccordionGroupTitle&gt;
        </span>
        <br />
        {'    '}
        <span className="red">
          &lt;AccordionGroupBody
          {' '}
          <span className="yellow">style=</span>
          <span className="blue">&#123;bodyStyles&#125;</span>
          &gt;
          <br />
          {'      '}
          <span className="red">
            &lt;StyledComponent
            &gt;
            <br />
            {'        '}
            <span className="grey">It is a styled component</span>
            <br />
            {'      '}
            &lt;/StyledComponent&gt;
          </span>
          <br />
          {'    '}
          &lt;/AccordionGroupBody&gt;
        </span>
        <br />
        {'  '}
        &lt;/AccordionGroup&gt;
      </span>
      <br />
      &lt;/Accordion&gt;
    </span>
    <br />
    <br />
    <br />
    <span className="light-grey">&#47;&#47;scss styling:</span>
    <br />
    <br />
    <span className="yellow">
      .accordion &#123;
      <br />
      {'  '}
      <span className="grey">
        border: 1px solid #cccccc;
        <br />
        {'  '}
        border-radius: 3px;
        <br />
        {'  '}
        margin: 0 auto;
        <br />
        {'  '}
        background: #9EBDCC;
        <br />
      </span>
      <br />
      {'  '}
      &#38;--group &#123;
      <br />
      {'    '}
      <span className="grey">
        border-top: 1px solid #cccccc;
        <br />
        <br />
        {'    '}
        <span className="yellow">&#38;&#58;first-of-type &#123;</span>
        <br />
        {'      '}
        border-top: none;
        <br />
        {'    '}
        <span className="yellow">&#125;</span>
        <br />
      </span>
      {'  '}
      &#125;
      <br />
      <br />
      {'  '}
      &#38;--group-title &#123;
      <br />
      <span className="grey">
        {'    '}
        cursor: pointer;
        <br />
        {'    '}
        padding: 20px 10px;
      </span>
      <br />
      <br />
      {'    '}
      &gt;img &#123;
      <br />
      {'      '}
      <span className="grey">
        width: 25px;
        <br />
        {'      '}
        height: auto;
      </span>
      <br />
      {'    '}
      &#125;
      <br />
      {'  '}
      &#125;
      <br />
      <br />
      {'  '}
      &#38;&#58;hover &#123;
      <br />
      {'    '}
      <span className="grey">background: #c2c3c4;</span>
      <br />
      {'  '}
      &#125;
      <br />
      <br />
      {'  '}
      &#38;__black &#123;
      <br />
      {'    '}
      <span className="grey">background: #1b1c15;</span>
      <br />
      <br />
      {'    '}
      &#38;&#58;hover &#123;
      <br />
      {'      '}
      <span className="grey">background: #1b1c15;</span>
      <br />
      <br />
      {'      '}
      &gt;img &#123;
      <br />
      {'        '}
      <span className="grey">width: 45px;</span>
      <br />
      {'      '}
      &#125;
      <br />
      {'    '}
      &#125;
      <br />
      {'  '}
      &#125;
      <br />
      &#125;
    </span>
    <br />
    <br />
    <br />
    <span className="light-grey">&#47;&#47;inline styles:</span>
    <br />
    <br />
    <span className="grey">
      <span className="purple">const </span>
      titleStyles = &#123;
      <br />
      {'  '}
      fontSize&#58;
      <span className="green">&#39;30px&#39;,</span>
      <br />
      {'  '}
      fontWeight&#58;
      <span className="green">&#39;700&#39;,</span>
      <br />
      &#125;
      <br />
      <br />
      <span className="purple">const </span>
      bodyStyles = &#123;
      <br />
      {'  '}
      padding&#58;
      <span className="green">&#39;20px 10px&#39;,</span>
      <br />
      {'  '}
      fontSize&#58;
      <span className="green">&#39;25px&#39;,</span>
      <br />
      {'  '}
      fontWeight&#58;
      <span className="green">&#39;700&#39;,</span>
      <br />
      {'  '}
      background&#58;
      <span className="green">&#39;#cccccc&#39;,</span>
      <br />
      &#125;
    </span>
    <br />
    <br />
    <br />
    <span className="light-grey">&#47;&#47; styled component:</span>
    <br />
    <br />
    <span className="grey">
      <span className="purple">const </span>
      StyledComponent = styled.div
      <span className="green">
        &#96;
        <br />
        {'  '}
        width: 75%;
        <br />
        {'  '}
        min-height: 50px;
        <br />
        {'  '}
        padding: 10px;
        <br />
        {'  '}
        display: flex;
        <br />
        {'  '}
        align-items: center;
        <br />
        {'  '}
        justify-content: center;
        <br />
        {'  '}
        margin: 0 auto;
        <br />
        {'  '}
        background: #9ca3c1;
        <br />
        &#96;
      </span>
      ;
    </span>
    <br />
  </pre>
);

export const SimpleExampleText = ''
  + '<Accordion className="accordion" style={{ width: \'80%\' }}>\n'
  + '  <AccordionGroup className="accordion--group">\n'
  + '    <AccordionGroupTitle className="accordion--group-title" style={titleStyles}>\n'
  + '      Simple example\n'
  + '    </AccordionGroupTitle>\n'
  + '    <AccordionGroupBody style={bodyStyles}>\n'
  + '      This is the example of simple accordion. This body contains simple text.\n'
  + '    </AccordionGroupBody>\n'
  + '  </AccordionGroup>\n'
  + '  <AccordionGroup className="accordion--group">\n'
  + '    <AccordionGroupTitle className="accordion--group-title" style={titleStyles}>\n'
  + '      Simple example with image\n'
  + '    </AccordionGroupTitle>\n'
  + '    <AccordionGroupBody style={bodyStyles}>\n'
  + '      <img src="https://picsum.photos/300/200/?random" alt="random" />\n'
  + '    </AccordionGroupBody>\n'
  + '  </AccordionGroup>\n'
  + '  <AccordionGroup className="accordion--group">\n'
  + '    <AccordionGroupTitle className="accordion--group-title accordion--group-title__black" style={titleStyles}>\n'
  + '      <img src={icon} alt="icon" />\n'
  + '    </AccordionGroupTitle>\n'
  + '    <AccordionGroupBody style={bodyStyles}>\n'
  + '      <StyledComponent>\n'
  + '        It is a styled component\n'
  + '      </StyledComponent>\n'
  + '    </AccordionGroupBody>\n'
  + '  </AccordionGroup>\n'
  + '</Accordion>\n\n\n'
  + '//scss styling:\n\n'
  + '.accordion {\n'
  + '  border: 1px solid #cccccc;\n'
  + '  border-radius: 3px;\n'
  + '  margin: 0 auto;\n'
  + '  background: #9EBDCC;\n'
  + '\n'
  + '  &__nested {\n'
  + '    background: #6ea4cc;\n'
  + '  }\n'
  + '\n'
  + '  &--group {\n'
  + '    border-top: 1px solid #cccccc;\n'
  + '\n'
  + '    &:first-of-type {\n'
  + '      border-top: none;\n'
  + '    }\n'
  + '  }\n'
  + '\n'
  + '  &--group-title {\n'
  + '    cursor: pointer;\n'
  + '    padding: 20px 10px;\n'
  + '\n'
  + '\n'
  + '    >img {\n'
  + '      width: 25px;\n'
  + '      height: auto;\n'
  + '    }\n'
  + '\n'
  + '    &:hover {\n'
  + '      background: #c2c3c4;\n'
  + '    }\n'
  + '\n'
  + '    &__black {\n'
  + '      background: #1b1c15;\n'
  + '\n'
  + '      &:hover {\n'
  + '        background: #1b1c15;\n'
  + '        padding: 10px;\n'
  + '\n'
  + '        >img {\n'
  + '          width: 45px;\n'
  + '        }\n'
  + '      }\n'
  + '    }\n'
  + '  }\n'
  + '}\n\n\n'
  + '//inline styles:\n\n'
  + 'const titleStyles = {\n'
  + '  fontSize: \'30px\',\n'
  + '  fontWeight: \'700\',\n'
  + '};\n'
  + '\n'
  + 'const bodyStyles = {\n'
  + '  padding: \'20px 10px\',\n'
  + '  fontSize: \'25px\',\n'
  + '  fontWeight: \'700\',\n'
  + '  background: \'#cccccc\',\n'
  + '};\n\n\n'
  + '//styled component:\n\n'
  + 'const StyledComponent = styled.div`\n'
  + '  width: 75%;\n'
  + '  min-height: 50px;\n'
  + '  padding: 10px;\n'
  + '  display: flex;\n'
  + '  align-items: center;\n'
  + '  justify-content: center;\n'
  + '  margin: 0 auto;\n'
  + '  background: #9ca3c1;\n'
  + '`;';


export const NestedExample = (
  <pre>
    <span className="red">
      &lt;Accordion
      {' '}
      <span className="yellow">className=</span>
      <span className="green">&quot;accordion&quot;</span>
      &gt;
      <br />
      {'  '}
      &lt;AccordionGroup
      {' '}
      <span className="yellow">className=</span>
      <span className="green">&quot;accordion--group&quot;</span>
      <br />
      {'    '}
      &lt;AccordionGroupTitle
      {' '}
      <span className="yellow">className=</span>
      <span className="green">&quot;accordion--group-title&quot;</span>
      {' '}
      <span className="yellow">style=</span>
      <span className="blue">&#123;titleStyles&#125;</span>
      &gt;
      <br />
      {'      '}
      <span className="grey">Accordion-(nested description)</span>
      <br />
      {'    '}
        &lt;/AccordionGroupTitle&gt;
      <br />
      {'    '}
          &lt;AccordionGroupBody
      {' '}
      <span className="yellow">style=</span>
      <span className="blue">&#123;bodyStyles&#125;</span>
          &gt;
      <br />
      {'      '}
          &lt;Description&gt;
      <br />
      {'        '}
          &lt;p&gt;
      <br />
      {'          '}
      <span className="grey">Main component, contains block/blocks(AccordionGroups)</span>
      <br />
      {'        '}
          &lt;/p&gt;
      <br />
      {'        '}
          &lt;p&gt;
      <br />
      {'          '}
      <span className="grey">Optional props: style and className</span>
      <br />
      {'        '}
          &lt;/p&gt;
      <br />
      {'      '}
          &lt;/Description&gt;
      <br />
      {'      '}
      &lt;Accordion
      {' '}
      <span className="yellow">className=</span>
      <span className="green">&quot;accordion accordion__nested&quot;</span>
      &gt;
      <br />
      {'        '}
      &lt;AccordionGroup
      {' '}
      <span className="yellow">className=</span>
      <span className="green">&quot;accordion--group&quot;</span>
      &gt;
      <br />
      {'          '}
      &lt;AccordionGroupTitle
      {' '}
      <span className="yellow">className=</span>
      <span className="green">&quot;accordion--group-title&quot;</span>
      {' '}
      <span className="yellow">style=</span>
      <span className="blue">&#123;titleStyles&#125;</span>
      &gt;
      <br />
      {'            '}
      <span className="grey">AccordionGroup</span>
      <br />
      {'          '}
      &lt;/AccordionGroupTitle&gt;
      <br />
      {'          '}
      &lt;AccordionGroupBody
      {' '}
      <span className="yellow">style=</span>
      <span className="blue">&#123;bodyStyles&#125;</span>
      &gt;
      <br />
      {'            '}
      &lt;Description&gt;
      <br />
      {'              '}
      &lt;p&gt;
      <br />
      {'                '}
      <span className="grey">
         Sub-component of the Accordion, contains two children:
         AccordionGroupTitle and AccordionGroupBody
      </span>
      <br />
      {'              '}
      &lt;/p&gt;
      <br />
      {'              '}
      &lt;p&gt;
      <br />
      {'                '}
      <span className="grey">Optional props: style and className</span>
      <br />
      {'              '}
      &lt;/p&gt;
      <br />
      {'            '}
      &lt;/Description&gt;
      <br />
      {'            '}
      &lt;AccordionGroup
      {' '}
      <span className="yellow">className=</span>
      <span className="green">&quot;accordion--group&quot;</span>
      &gt;
      <br />
      {'              '}
      &lt;AccordionGroupTitle
      {' '}
      <span className="yellow">className=</span>
      <span className="green">&quot;accordion--group-title&quot;</span>
      {' '}
      <span className="yellow">style=</span>
      <span className="blue">&#123;titleStyles&#125;</span>
      &gt;
      <br />
      {'                '}
      <span className="grey">AccordionGroupTitle</span>
      <br />
      {'              '}
      &lt;/AccordionGroupTitle&gt;
      <br />
      {'              '}
      &lt;AccordionGroupBody
      {' '}
      <span className="yellow">style=</span>
      <span className="blue">&#123;bodyStyles&#125;</span>
      &gt;
      <br />
      {'                '}
      &lt;Description&gt;
      <br />
      {'                  '}
      &lt;p&gt;
      <br />
      {'                    '}
      <span className="grey">
         Sub-component of the AccordionGroup of the Accordion. Put here
         any element you you need: text, button, image ... .
         Via click toggles opening/closing of
         the AccordionGroupBody component.
      </span>
      <br />
      {'                  '}
      &lt;/p&gt;
      <br />
      {'                  '}
      &lt;p&gt;
      <br />
      {'                    '}
      <span className="grey">Optional props: style and className</span>
      <br />
      {'                  '}
      &lt;/p&gt;
      <br />
      {'                '}
      &lt;/Description&gt;
      <br />
      {'              '}
      &lt;/AccordionGroupBody&gt;

      <br />
      {'            '}
      &lt;/AccordionGroup&gt;
      <br />
      {'            '}
      &lt;AccordionGroup
      {' '}
      <span className="yellow">className=</span>
      <span className="green">&quot;accordion--group&quot;</span>
      &gt;
      <br />
      {'              '}
      &lt;AccordionGroupTitle
      {' '}
      <span className="yellow">className=</span>
      <span className="green">&quot;accordion--group-title&quot;</span>
      {' '}
      <span className="yellow">style=</span>
      <span className="blue">&#123;titleStyles&#125;</span>
      &gt;
      <br />
      {'                '}
      <span className="grey">AccordionGroupBody</span>
      <br />
      {'              '}
      &lt;/AccordionGroupTitle&gt;
      <br />
      {'              '}
      &lt;AccordionGroupBody
      {' '}
      <span className="yellow">style=</span>
      <span className="blue">&#123;bodyStyles&#125;</span>
      &gt;
      <br />
      {'                '}
      &lt;Description&gt;
      <br />
      {'                  '}
      &lt;p&gt;
      <br />
      {'                    '}
      <span className="grey">
        Sub-component of the AccordionGroup of the Accordion.
        Put here all the info you want to visualize by clicking on the
        AccordionGroupTitle. It is possible to put into AccordionGroupBody
        any element you need.
      </span>
      <br />
      {'                  '}
      &lt;/p&gt;
      <br />
      {'                  '}
      &lt;p&gt;
      <br />
      {'                    '}
      <span className="grey">Optional props: style and className</span>
      <br />
      {'                  '}
      &lt;/p&gt;
      <br />
      {'                '}
      &lt;/Description&gt;
      <br />
      {'              '}
      &lt;/AccordionGroupBody&gt;

      <br />
      {'            '}
      &lt;/AccordionGroup&gt;
      <br />
      {'          '}
      &lt;/AccordionGroupBody&gt;
      <br />
      {'        '}
      &lt;/AccordionGroup&gt;
      <br />
      {'      '}
      &lt;/Accordion&gt;
      <br />
      {'    '}
      &lt;/AccordionGroupBody&gt;
      <br />
      {'  '}
      &lt;/AccordionGroup&gt;
      <br />
      &lt;/Accordion&gt;
    </span>
     <br />
    <br />
    <br />
    <span className="light-grey">&#47;&#47;scss styling:</span>
    <br />
    <br />
    <span className="yellow">
      .accordion &#123;
      <br />
      {'  '}
      <span className="grey">
        border: 1px solid #cccccc;
        <br />
        {'  '}
        border-radius: 3px;
        <br />
        {'  '}
        margin: 0 auto;
        <br />
        {'  '}
        background: #9EBDCC;
        <br />
      </span>
      <br />
      {'  '}
      &#38;--group &#123;
      <br />
      {'    '}
      <span className="grey">
        border-top: 1px solid #cccccc;
        <br />
        <br />
        {'    '}
        <span className="yellow">&#38;&#58;first-of-type &#123;</span>
        <br />
        {'      '}
        border-top: none;
        <br />
        {'    '}
        <span className="yellow">&#125;</span>
        <br />
      </span>
      {'  '}
      &#125;
      <br />
      <br />
      {'  '}
      &#38;--group-title &#123;
      <br />
      <span className="grey">
        {'    '}
        cursor: pointer;
        <br />
        {'    '}
        padding: 20px 10px;
      </span>
      <br />
      <br />
      {'    '}
      &gt;img &#123;
      <br />
      {'      '}
      <span className="grey">
        width: 25px;
        <br />
        {'      '}
        height: auto;
      </span>
      <br />
      {'    '}
      &#125;
      <br />
      {'  '}
      &#125;
      <br />
      <br />
      {'  '}
      &#38;&#58;hover &#123;
      <br />
      {'    '}
      <span className="grey">background: #c2c3c4;</span>
      <br />
      {'  '}
      &#125;
      <br />
      <br />
      {'  '}
      &#38;__black &#123;
      <br />
      {'    '}
      <span className="grey">background: #1b1c15;</span>
      <br />
      <br />
      {'    '}
      &#38;&#58;hover &#123;
      <br />
      {'      '}
      <span className="grey">background: #1b1c15;</span>
      <br />
      <br />
      {'      '}
      &gt;img &#123;
      <br />
      {'        '}
      <span className="grey">width: 45px;</span>
      <br />
      {'      '}
      &#125;
      <br />
      {'    '}
      &#125;
      <br />
      {'  '}
      &#125;
      <br />
      &#125;
    </span>
    <br />
    <br />
    <br />
    <span className="light-grey">&#47;&#47;inline styles:</span>
    <br />
    <br />
    <span className="grey">
      <span className="purple">const </span>
      titleStyles = &#123;
      <br />
      {'  '}
      fontSize&#58;
      <span className="green">&#39;30px&#39;,</span>
      <br />
      {'  '}
      fontWeight&#58;
      <span className="green">&#39;700&#39;,</span>
      <br />
      &#125;
      <br />
      <br />
      <span className="purple">const </span>
      bodyStyles = &#123;
      <br />
      {'  '}
      padding&#58;
      <span className="green">&#39;20px 10px&#39;,</span>
      <br />
      {'  '}
      fontSize&#58;
      <span className="green">&#39;25px&#39;,</span>
      <br />
      {'  '}
      fontWeight&#58;
      <span className="green">&#39;700&#39;,</span>
      <br />
      {'  '}
      background&#58;
      <span className="green">&#39;#cccccc&#39;,</span>
      <br />
      &#125;
    </span>
    <br />
    <br />
    <br />
    <span className="light-grey">&#47;&#47; styled component:</span>
    <br />
    <br />
    <span className="grey">
      <span className="purple">const </span>
      Description = styled.div
      <span className="green">
        &#96;
        <br />
        {'  '}
        padding: 10px;
        <br />
        {'  '}
        background: #1a436f;
        <br />
        {'  '}
        color: #f8f8f8;
        <br />
        {'  '}
        font-size: 18px;
        <br />
        &#96;
      </span>
      ;
    </span>
    <br />
  </pre>
);

export const NestedExampleText = ''
  + '<Accordion className="accordion">\n'
  + '  <AccordionGroup className="accordion--group">\n'
  + '    <AccordionGroupTitle className="accordion--group-title" style={titleStyles}>\n'
  + '      Accordion-(nested description)\n'
  + '    </AccordionGroupTitle>\n'
  + '    <AccordionGroupBody style={{ background: \'#cccccc\' }}>\n'
  + '      <Description>\n'
  + '        <p>Main component, contains block/blocks(AccordionGroups)</p>\n'
  + '        <p>\n'
  + '          Optional props: style and className\n'
  + '        </p>\n'
  + '      </Description>\n'
  + '      <Accordion className="accordion accordion__nested">\n'
  + '        <AccordionGroup className="accordion--group">\n'
  + '          <AccordionGroupTitle className="accordion--group-title" style={titleStyles}>\n'
  + '            AccordionGroup\n'
  + '          </AccordionGroupTitle>\n'
  + '          <AccordionGroupBody>\n'
  + '            <Description>\n'
  + '              <p>\n'
  + '                Sub-component of the Accordion, contains two children:\n'
  + '                AccordionGroupTitle and AccordionGroupBody\n'
  + '              </p>\n'
  + '              <p>\n'
  + '                Optional props: style and className\n'
  + '              </p>\n'
  + '            </Description>\n'
  + '            <AccordionGroup className="accordion--group">\n'
  + '              <AccordionGroupTitle className="accordion--group-title" style={titleStyles}>\n'
  + '                AccordionGroupTitle\n'
  + '              </AccordionGroupTitle>\n'
  + '              <AccordionGroupBody>\n'
  + '                <Description>\n'
  + '                  <p>\n'
  + '                    Sub-component of the AccordionGroup of the Accordion. Put here\n'
  + '                    any element you you need: text, button, image ... .\n'
  + '                    Via click toggles opening/closing of\n'
  + '                    the AccordionGroupBody component.\n'
  + '                  </p>\n'
  + '                  <p>\n'
  + '                    Optional props: style and className\n'
  + '                  </p>\n'
  + '                </Description>\n'
  + '              </AccordionGroupBody>\n'
  + '            </AccordionGroup>\n'
  + '            <AccordionGroup className="accordion--group">\n'
  + '              <AccordionGroupTitle className="accordion--group-title" style={titleStyles}>\n'
  + '                AccordionGroupBody\n'
  + '              </AccordionGroupTitle>\n'
  + '              <AccordionGroupBody>\n'
  + '                <Description>\n'
  + '                  <p>\n'
  + '                    Sub-component of the AccordionGroup of the Accordion.\n'
  + '                    Put here all the info you want to visualize by clicking on the\n'
  + '                    AccordionGroupTitle. It is possible to put into AccordionGroupBody\n'
  + '                    any element you need.\n'
  + '                  </p>\n'
  + '                  <p>\n'
  + '                    Optional props: style and className\n'
  + '                  </p>\n'
  + '                </Description>\n'
  + '              </AccordionGroupBody>\n'
  + '            </AccordionGroup>\n'
  + '          </AccordionGroupBody>\n'
  + '        </AccordionGroup>\n'
  + '      </Accordion>\n'
  + '    </AccordionGroupBody>\n'
  + '  </AccordionGroup>\n'
  + '</Accordion>\n\n\n'
  + '//scss styling:\n\n'
  + '.accordion {\n'
  + '  border: 1px solid #cccccc;\n'
  + '  border-radius: 3px;\n'
  + '  margin: 0 auto;\n'
  + '  background: #9EBDCC;\n'
  + '\n'
  + '  &__nested {\n'
  + '    background: #6ea4cc;\n'
  + '  }\n'
  + '\n'
  + '  &--group {\n'
  + '    border-top: 1px solid #cccccc;\n'
  + '\n'
  + '    &:first-of-type {\n'
  + '      border-top: none;\n'
  + '    }\n'
  + '  }\n'
  + '\n'
  + '  &--group-title {\n'
  + '    cursor: pointer;\n'
  + '    padding: 20px 10px;\n'
  + '\n'
  + '\n'
  + '    >img {\n'
  + '      width: 25px;\n'
  + '      height: auto;\n'
  + '    }\n'
  + '\n'
  + '    &:hover {\n'
  + '      background: #c2c3c4;\n'
  + '    }\n'
  + '\n'
  + '    &__black {\n'
  + '      background: #1b1c15;\n'
  + '\n'
  + '      &:hover {\n'
  + '        background: #1b1c15;\n'
  + '        padding: 10px;\n'
  + '\n'
  + '        >img {\n'
  + '          width: 45px;\n'
  + '        }\n'
  + '      }\n'
  + '    }\n'
  + '  }\n'
  + '}\n\n\n'
  + '//inline styles:\n\n'
  + 'const titleStyles = {\n'
  + '  fontSize: \'30px\',\n'
  + '  fontWeight: \'700\',\n'
  + '};\n'
  + '\n'
  + 'const bodyStyles = {\n'
  + '  padding: \'20px 10px\',\n'
  + '  fontSize: \'25px\',\n'
  + '  fontWeight: \'700\',\n'
  + '  background: \'#cccccc\',\n'
  + '};\n\n\n'
  + '//styled component:\n\n'
  + 'const Description = styled.div`\n'
  + '  padding: 10px;\n'
  + '  font-size: 18px;\n'
  + '  background: #1a436f;\n'
  + '  color: #f8f8f8;\n'
  + '`;';
