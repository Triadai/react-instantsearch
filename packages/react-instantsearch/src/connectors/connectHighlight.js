import createConnector from '../core/createConnector';
import parseAlgoliaHit from '../core/highlight';

import highlightTags from '../core/highlightTags.js';

const highlight = ({ attributeName, hit, highlightProperty }) =>
  parseAlgoliaHit({
    attributeName,
    hit,
    preTag: highlightTags.highlightPreTag,
    postTag: highlightTags.highlightPostTag,
    highlightProperty,
  });

/**
 * connectHighlight connector provides the logic to create an highlighter
 * component that will retrieve, parse and render an highlighted attribute
 * from an Algolia hit.
 * @name connectHighlight
 * @kind connector
 * @category connector
 * @providedPropType {function} highlight - the function to retrieve and parse an attribute from a hit. It takes a configuration object with 3 attribute: `highlightProperty` which is the property that contains the highlight structure from the records, `attributeName` which is the name of the attribute to look for and `hit` which is the hit from Algolia. It returns an array of object `{value: string, isHighlighted: boolean}`.
 * @example
 * const CustomHighlight = connectHighlight(({highlight, attributeName, hit, highlightProperty}) => {
 *   const parsedHit = highlight({attributeName, hit, highlightProperty});
 *   return parsedHit.map(part => {
 *     if(part.isHighlighted) return <em>{part.value}</em>;
 *     return part.value;
 *   });
 * });
 */
export default createConnector({
  displayName: 'AlgoliaHighlighter',

  propTypes: {},

  getProvidedProps() {
    return { highlight };
  },
});
