import {
  AnimatedProgress,
  Box,
  CodePane,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  Slide,
  SlideLayout,
  Text,
} from 'spectacle'
import {
  makeTransferKinetic,
  makeTransferKineticDart,
  makeTransferStep1,
  makeTransferStep2,
  makeTransferStep3,
} from './code/make-transaction'
import { sdks } from './code/sdk-list'

const kinBanner = require('./images/kin-banner.png')
const kinTheLargest = require('./images/kin-the-largest.jpg')
const makeTransferAfter = require('./images/make-transfer-after.png')
const makeTransferBefore = require('./images/make-transfer-before.png')

const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
}

// SPECTACLE_CLI_TEMPLATE_START
export const template = () => (
  <FlexBox justifyContent="space-between" position="absolute" bottom={0} width={1}>
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <AnimatedProgress />
    </Box>
  </FlexBox>
)

export const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide padding={0} backgroundColor={'inherit'} transition={{}}>
      <Image width={'100%'} src={kinBanner} />
    </Slide>
    <SlideLayout.List title="Agenda" items={['About Kin', 'About Kinetic', 'DEMO!!']} />
    <SlideLayout.List
      title="About Kin"
      items={[
        'Launched in 2018 by Kik',
        'Migrated to Solana in December 2020',
        'Cryptocurrency for in-app payments',
        'Ecosystem of +50 apps',
        'Users can spend and earn Kin',
        'KRE rewards developers for their economic activity',
        'Focus on non-crypto native users and devs',
      ]}
    />
    <SlideLayout.List
      title="Kin in numbers"
      items={[
        '~1.8 million monthly active spenders',
        '~280 million transactions (year to date)',
        '~23 million per month',
        '~780K per day',
        '~32K per hour',
        '~9 per second',
      ]}
    />
    <Slide backgroundColor={'inherit'}>
      <FlexBox justifyContent="center">
        <Image width={'50%'} src={kinTheLargest} />
      </FlexBox>
    </Slide>
    <SlideLayout.List
      title="Kin, the summary"
      items={[
        'Cryptocurrency for in-app payments',
        'An ecosystem of +40 apps',
        'Largest token on Solana',
        'Give your users a token with real value',
        'YOU Get paid for your economic activity',
        '➡️ Sign up at: portal.kin.org',
      ]}
    />
    <SlideLayout.List
      title="About Kinetic"
      items={[
        'Open Source (MIT License)',
        'Small convenience layer on top of Solana',
        'Multi-tenant system',
        'Works with any Solana SPL token',
        'Focused on making in-app payments EASY',
        'Onboard your users without SOL in their wallet',
        'Following the Kinetic SDK Standard',
      ]}
    />
    <SlideLayout.List
      title="Kinetic SDK Standard"
      items={[
        'Wrap around a Solana SDK',
        'Use that to generate keypairs and transactions',
        'Kinetic API holds remote fee payer wallet',
        'Offloads traffic to the Kinetic API',
        'Kinetic API handles access control, verification, partial signing',
        'Consistent across all 6+ platforms',
      ]}
    />

    <Slide>
      <Heading>Step 1: accounts and keys</Heading>
      <CodePane language="typescript" showLineNumbers={false}>
        {makeTransferStep1}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Step 2: the instruction</Heading>
      <CodePane language="typescript" showLineNumbers={false}>
        {makeTransferStep2}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Step 3: the transaction</Heading>
      <CodePane language="typescript" showLineNumbers={false}>
        {makeTransferStep3}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>The Kinetic Way</Heading>
      <FlexBox justifyContent="space-between">
        <Image src={makeTransferBefore} width={'50%'} />
        <Image src={makeTransferAfter} width={'50%'} />
      </FlexBox>
    </Slide>
    <Slide>
      <CodePane language="typescript" showLineNumbers={false}>
        {makeTransferKinetic}
      </CodePane>
      <Box p={2} />
      <CodePane language="dart" showLineNumbers={false}>
        {makeTransferKineticDart}
      </CodePane>
    </Slide>
    <Slide>
      <Grid gridTemplateColumns="1fr 1fr " gridTemplateRows=" 1fr 1fr" gridRowGap={1}>
        {sdks.map(({ image, name }, index) => (
          <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1} justifyContent="start">
            <Image
              src={image}
              width={100}
              style={{ backgroundColor: '#8a99d455', padding: '10px', borderRadius: '25%' }}
            />
            <Text>{name}</Text>
          </FlexBox>
        ))}
      </Grid>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px">
          🥳 <i>Demo Time</i>
        </Heading>
      </FlexBox>
    </Slide>

    <SlideLayout.List
      title="What's next for Kinetic?"
      items={[
        'Expose more Solana features:',
        'Add support for NFTs',
        'Integrate Solana Pay',
        'Integrate Solana Wallet Adapter (SAGA)',
        'Work with devs (you?) to integrate Kinetic',
        'Explore new SDK platforms',
      ]}
    />
    <SlideLayout.List
      title="What's next for you?"
      items={[
        '⭐️ github.com/kin-labs/kinetic ⭐',
        'Check our docs: developer.kin.org',
        'Sign up at: portal.kin.org',
        'Come talk to us!',
        'Ask us questions!',
        'Do the Heavy Duty challenge!',
      ]}
    />

    {/*<Slide>*/}
    {/*  <FlexBox height="100%">*/}
    {/*    <FlexBox paddingTop={0} key={`formidable-logo-${1}`} flex={1}>*/}
    {/*      <Image src={beemanAvatar} width={200} style={{ borderRadius: '50%' }} />*/}
    {/*    </FlexBox>*/}
    {/*  </FlexBox>*/}
    {/*  <Notes>*/}
    {/*    Spectacle supports notes per slide.*/}
    {/*    <ol>*/}
    {/*      <li>Notes can now be HTML markup!</li>*/}
    {/*      <li>Lists can make it easier to make points.</li>*/}
    {/*    </ol>*/}
    {/*  </Notes>*/}
    {/*</Slide>*/}
    {/*<Slide>*/}
    {/*  <FlexBox height="100%" flexDirection="column">*/}
    {/*    <Heading margin="0px" fontSize="150px">*/}
    {/*      ✨<i>Spectacle</i> ✨*/}
    {/*    </Heading>*/}
    {/*    <Heading margin="0px" fontSize="h2">*/}
    {/*      A ReactJS Presentation Library*/}
    {/*    </Heading>*/}
    {/*    <Heading margin="0px 32px" color="primary" fontSize="h3">*/}
    {/*      Where you can write your decks in JSX, Markdown, or MDX!*/}
    {/*    </Heading>*/}
    {/*  </FlexBox>*/}
    {/*</Slide>*/}
    {/*<Slide*/}
    {/*  transition={{*/}
    {/*    from: {*/}
    {/*      transform: 'scale(0.5) rotate(45deg)',*/}
    {/*      opacity: 0,*/}
    {/*    },*/}
    {/*    enter: {*/}
    {/*      transform: 'scale(1) rotate(0)',*/}
    {/*      opacity: 1,*/}
    {/*    },*/}
    {/*    leave: {*/}
    {/*      transform: 'scale(0.2) rotate(315deg)',*/}
    {/*      opacity: 0,*/}
    {/*    },*/}
    {/*  }}*/}
    {/*  backgroundColor="tertiary"*/}
    {/*  backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/src/beau.jpg?raw=true)"*/}
    {/*  backgroundOpacity={0.5}*/}
    {/*>*/}
    {/*  <Heading>Custom Backgrounds</Heading>*/}
    {/*  <UnorderedList>*/}
    {/*    <ListItem>*/}
    {/*      <CodeSpan>backgroundColor</CodeSpan>*/}
    {/*    </ListItem>*/}
    {/*    <ListItem>*/}
    {/*      <CodeSpan>backgroundImage</CodeSpan>*/}
    {/*    </ListItem>*/}
    {/*    <ListItem>*/}
    {/*      <CodeSpan>backgroundOpacity</CodeSpan>*/}
    {/*    </ListItem>*/}
    {/*    <ListItem>*/}
    {/*      <CodeSpan>backgroundSize</CodeSpan>*/}
    {/*    </ListItem>*/}
    {/*    <ListItem>*/}
    {/*      <CodeSpan>backgroundPosition</CodeSpan>*/}
    {/*    </ListItem>*/}
    {/*    <ListItem>*/}
    {/*      <CodeSpan>backgroundRepeat</CodeSpan>*/}
    {/*    </ListItem>*/}
    {/*  </UnorderedList>*/}
    {/*</Slide>*/}
    {/*<Slide>*/}
    {/*  <Heading>Animated Elements</Heading>*/}
    {/*  <OrderedList>*/}
    {/*    <Appear>*/}
    {/*      <ListItem>Elements can animate in!</ListItem>*/}
    {/*    </Appear>*/}
    {/*    <Appear>*/}
    {/*      <ListItem>Out of order</ListItem>*/}
    {/*    </Appear>*/}
    {/*    <Appear priority={0}>*/}
    {/*      <ListItem>*/}
    {/*        Just identify the order with the prop <CodeSpan>priority</CodeSpan>!*/}
    {/*      </ListItem>*/}
    {/*    </Appear>*/}
    {/*  </OrderedList>*/}
    {/*</Slide>*/}
    {/*<Slide>*/}
    {/*  <FlexBox>*/}
    {/*    <Text>These</Text>*/}
    {/*    <Text>Text</Text>*/}
    {/*    <Text color="secondary">Items</Text>*/}
    {/*    <Text fontWeight="bold">Flex</Text>*/}
    {/*  </FlexBox>*/}
    {/*  <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>*/}
    {/*    <Box backgroundColor="primary">*/}
    {/*      <Text color="secondary">Single-size Grid Item</Text>*/}
    {/*    </Box>*/}
    {/*    <Box backgroundColor="secondary">*/}
    {/*      <Text>Double-size Grid Item</Text>*/}
    {/*    </Box>*/}
    {/*  </Grid>*/}
    {/*  <Grid gridTemplateColumns="1fr 1fr 1fr" gridTemplateRows="1fr 1fr 1fr" gridRowGap={1}>*/}
    {/*    {Array(9)*/}
    {/*      .fill('')*/}
    {/*      .map((_, index) => (*/}
    {/*        <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>*/}
    {/*          <Image src={beemanAvatar} width={100} />*/}
    {/*        </FlexBox>*/}
    {/*      ))}*/}
    {/*  </Grid>*/}
    {/*</Slide>*/}
    {/*<SlideFragments />*/}
    {/*<Slide>*/}
    {/*  <CodePane language="jsx">{`*/}
    {/*    import { createClient, Provider } from 'urql';*/}
    {/*    const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });*/}
    {/*    const App = () => (*/}
    {/*      <Provider value={client}>*/}
    {/*        <Todos />*/}
    {/*      </Provider>*/}
    {/*    );*/}
    {/*    `}</CodePane>*/}
    {/*  <Box height={20} />*/}
    {/*  <CodePane language="java" showLineNumbers={false}>{`*/}
    {/*    public class NoLineNumbers {*/}
    {/*      public static void main(String[] args) {*/}
    {/*        System.out.println("Hello");*/}
    {/*      }*/}
    {/*    }*/}
    {/*    `}</CodePane>*/}
    {/*</Slide>*/}
    {/*<div>*/}
    {/*  <Slide>*/}
    {/*    <Heading>This is a slide embedded in a div</Heading>*/}
    {/*  </Slide>*/}
    {/*</div>*/}
    {/*    <MarkdownSlide componentProps={{ color: 'yellow' }}>*/}
    {/*      {`*/}
    {/*# This is a Markdown Slide*/}
    {/*- You can pass props down to all elements on the slide.*/}
    {/*- Just use the \`componentProps\` prop.*/}
    {/*`}*/}
    {/*    </MarkdownSlide>*/}
    {/*    <MarkdownSlide animateListItems>*/}
    {/*      {`*/}
    {/*# This is also a Markdown Slide*/}
    {/*It uses the \`animateListItems\` prop.*/}
    {/*- Its list items...*/}
    {/*- ...will appear...*/}
    {/*- ...one at a time.*/}
    {/*      `}*/}
    {/*    </MarkdownSlide>*/}
    {/*    <Slide>*/}
    {/*      <Grid gridTemplateColumns="50% 50%" gridTemplateRows="50% 50%" height="100%">*/}
    {/*        <FlexBox alignItems="center" justifyContent="center">*/}
    {/*          <Heading>This is a 4x4 Grid</Heading>*/}
    {/*        </FlexBox>*/}
    {/*        <FlexBox alignItems="center" justifyContent="center">*/}
    {/*          <Text textAlign="center">With all the content aligned and justified center.</Text>*/}
    {/*        </FlexBox>*/}
    {/*        <FlexBox alignItems="center" justifyContent="center">*/}
    {/*          <Text textAlign="center">*/}
    {/*            It uses Spectacle <CodeSpan>{'<Grid />'}</CodeSpan> and <CodeSpan>{'<FlexBox />'}</CodeSpan> components.*/}
    {/*          </Text>*/}
    {/*        </FlexBox>*/}
    {/*        <FlexBox alignItems="center" justifyContent="center">*/}
    {/*          <Box width={200} height={200} backgroundColor="secondary" />*/}
    {/*        </FlexBox>*/}
    {/*      </Grid>*/}
    {/*    </Slide>*/}
    {/*    <MarkdownSlideSet>*/}
    {/*      {`*/}
    {/*# This is the first slide of a Markdown Slide Set*/}
    {/*---*/}
    {/*# This is the second slide of a Markdown Slide Set*/}
    {/*        `}*/}
    {/*    </MarkdownSlideSet>*/}
    {/*    <SlideLayout.List title="Slide layouts!" items={['Two-column', 'Lists', 'And more!']} animateListItems />*/}
  </Deck>
)
