import { Button } from '@/components/Button/Button'
import { css } from '../../styled-system/css'
import { VStack } from '../../styled-system/jsx'
import { container, flex } from '../../styled-system/patterns'
import { button } from '../../styled-system/recipes'
const styles = css({
  display: 'flex',
  fontSize: '4xl',
  fontWeight: 'bold',
  // _hover: {
  //   color: 'red.800',
  // },
  // _before: {
  //   content: '"👋"',
  // },
  // _osLight: {
  //   color: 'red.500',
  // },
  // md: {
  //   color: 'yellow.800',
  //   _hover: {
  //     color: 'blue.800',
  //   },
  // },
})

export default function Home() {
  return (
    <main>
      <h1 className={styles}>Home</h1>
      <hr />
      <h1 className={styles}>Patterns</h1>
      <div className={flex({ gap: '1.5' })}>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </div>
      <hr />
      <VStack gap="0">
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </VStack>
      <hr />
      <h1 className={styles}>Recipes</h1>
      <button
        className={button({
          intent: 'primary',
          size: 'large',
        })}
      >
        hello recipe
      </button>
      <Button intent="danger" size="large">
        JSX Button
      </Button>
      <p
        className={css({
          backgroundColor: {
            base: 'indigo.500',
            md: 'red.500',
            xl: 'yellow.500',
          },
          borderRadius: 'md',
          fontSize: '2xs',
          padding: '2',
        })}
      >
        Responsive Styles
      </p>
    </main>
  )
}
