import { splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const buttonFn = /* @__PURE__ */ createRecipe('ftv-button', {
  "intent": "danger",
  "size": "medium"
}, [
  {
    "intent": "danger",
    "size": "large",
    "css": {
      "border": "3px solid black"
    }
  }
])

const buttonVariantMap = {
  "intent": [
    "primary",
    "danger",
    "warning",
    "outline"
  ],
  "size": [
    "small",
    "medium",
    "large"
  ]
}

const buttonVariantKeys = Object.keys(buttonVariantMap)

export const button = /* @__PURE__ */ Object.assign(buttonFn, {
  __recipe__: true,
  __name__: 'button',
  raw: (props) => props,
  variantKeys: buttonVariantKeys,
  variantMap: buttonVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, buttonVariantKeys)
  },
})