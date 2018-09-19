## react-accordion

#### Installation

`npm install @starnavi/react-accordion`

or

`yarn add @starnavi/react-accordion`

##

#### Usage sample
   
   
   ```js
    import { Accordion, AccordionGroup, AccordionGroupTitle, AccordionGroupBody } from '@starnavi/react-accordion'

    export default () => (
        <Accordion>
            <AccordionGroup>
                <AccordionGroupTitle>
                    Title to click on
                </AccordionGroupTitle>
                <AccordionGroupBody>
                    Body part, you can put here any element you want
                </AccordionGroupBody>
            </AccordionGroup>
        </Accordion>
    );
```
### Styling

**_react-accordion_** does not have any styles by default, you are free to pass to 
it's components your custom styles or/and classNames 
 
##

### Components:

### **&lt;Accordion /&gt;**

#### Additional props:

**_style_**:`object`

**_className_**: `string`

Pass your custom **_style_** and/or **_className_** to style rendered `<div />` of Accordion

##

### **&lt;AccordionGroup /&gt;**

#### Additional props:

**_style_**:`object`

**_className_**: `string`

Pass your custom **_style_** and/or **_className_** to style rendered `<div />` of AccordionGroup

##

### **&lt;AccordionGroupTitle /&gt;**

#### Additional props:

**_style_**:`object`

**_className_**: `string`

Pass your custom **_style_** and/or **_className_** to style rendered `<div />` of AccordionGroupTitle

##

### **&lt;AccordionGroupBody /&gt;**

#### Additional props:

**_style_**:`object`

**_className_**: `string`

Pass your custom **_style_** and/or **_className_** to style rendered `<div />` of AccordionGroupBody

    
    


