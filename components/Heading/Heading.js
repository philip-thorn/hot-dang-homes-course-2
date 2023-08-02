import { getFontsizeForHeading, getTextAlign } from "utils/fonts"
import React from "react"

export const Heading = ({textAlign, content, level}) => {
const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: {__html: content},
    className: `font-heading max-w-5xl mx-auto my-5 ${getFontsizeForHeading(level)} ${getTextAlign(textAlign)}`
});
    return tag;
}