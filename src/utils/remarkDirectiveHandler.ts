/**
 * Transforms remark-directive container nodes into MDX JSX elements.
 *
 * Converts:
 *   :::callout{type="info" title="提示"}
 *   Some content.
 *   :::
 *
 * Into an <Callout type="info" title="提示"> MDX JSX element.
 */
import { visit } from "unist-util-visit";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const remarkDirectiveHandler = (): any => {
  return (tree: any) => {
    visit(tree, "containerDirective", (node: any, index, parent: any) => {
      if (index == null || !parent) return;
      const { name, attributes, children } = node;

      // Convert attributes object to MDX attribute nodes
      const attrNodes = Object.entries(attributes || {}).map(([attrName, value]) => ({
        type: "mdxJsxAttribute",
        name: attrName,
        value: String(value),
      }));

      // Create MDX JSX flow element
      const jsxNode = {
        type: "mdxJsxFlowElement",
        name,
        attributes: attrNodes,
        children: children || [],
      };

      // Replace the directive node with the JSX node
      parent.children[index] = jsxNode;
    });
  };
};
